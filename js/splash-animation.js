/**
 * splash-animation.js -- Canvas-based particle assembly animation for splash screen.
 * Renders 8400 ASCII characters on a single <canvas> instead of individual DOM elements.
 * Depends on SPLASH_DATA from splash-data.js.
 */
(function() {
  var W = SPLASH_DATA.w;
  var H = SPLASH_DATA.h;
  var rawParticles = SPLASH_DATA.p;
  var CHAR_W = 5.2;
  var ROW_H = 7.5;
  var gridW = W * CHAR_W;
  var gridH = H * ROW_H;
  var N = rawParticles.length;

  var splash = document.getElementById('splash');
  var portraitWrap = document.getElementById('splash-portrait-wrap');
  var container = document.getElementById('splash-container');
  container.style.display = 'none';

  // --- Canvas setup (fullscreen, behind other splash elements) ---
  var dpr = window.devicePixelRatio || 1;
  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
  splash.insertBefore(canvas, splash.firstChild);
  var ctx = canvas.getContext('2d');

  // --- Layout state ---
  var PAD = 0.94;
  var scale = 1;
  var FOOTER_H = 80;
  var FOOTER_W = 200;
  var GAP_COL = 16;
  var GAP_ROW = 32;
  var gridOffsetX = 0, gridOffsetY = 0;
  var brightness = 1;

  // --- Particle data (immutable from source) ---
  var pRow = new Uint8Array(N);
  var pCol = new Uint8Array(N);
  var pChar = new Array(N);
  var pR = new Uint8Array(N);
  var pG = new Uint8Array(N);
  var pB = new Uint8Array(N);
  var pVisible = new Uint8Array(N); // 1 if non-space, 0 if space

  for (var i = 0; i < N; i++) {
    var p = rawParticles[i];
    pRow[i] = p[0]; pCol[i] = p[1]; pChar[i] = p[2];
    pR[i] = p[3]; pG[i] = p[4]; pB[i] = p[5];
    pVisible[i] = p[2] !== ' ' ? 1 : 0;
  }

  // --- Computed positions (updated on resize) ---
  var txArr = new Float32Array(N);
  var tyArr = new Float32Array(N);
  var colorArr = new Array(N);

  // --- Animation state ---
  var sxArr = new Float32Array(N);
  var syArr = new Float32Array(N);
  var delayArr = new Float32Array(N);
  var curPos = new Float32Array(N * 2);
  var assemblyDone = false;
  var dismissed = false;

  function updateLayout() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    canvas.width = vw * dpr;
    canvas.height = vh * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var isLandscapeMobile = vw > vh && vh < 600;
    splash.classList.toggle('splash--landscape', isLandscapeMobile);

    var sx, sy;
    if (isLandscapeMobile) {
      sx = ((vw - FOOTER_W - GAP_ROW) * PAD) / gridW;
      sy = (vh * PAD) / gridH;
    } else {
      sx = (vw * PAD) / gridW;
      sy = ((vh - FOOTER_H - GAP_COL) * PAD) / gridH;
    }
    scale = Math.min(sx, sy, 1);

    portraitWrap.style.width = Math.ceil(gridW * scale) + 'px';
    portraitWrap.style.height = Math.ceil(gridH * scale) + 'px';

    var rect = portraitWrap.getBoundingClientRect();
    gridOffsetX = rect.left;
    gridOffsetY = rect.top;

    brightness = scale < 1 ? 1 + (1 - scale) * 1.5 : 1;

    for (var i = 0; i < N; i++) {
      txArr[i] = gridOffsetX + pCol[i] * CHAR_W * scale;
      tyArr[i] = gridOffsetY + pRow[i] * ROW_H * scale;
      var r = pR[i], g = pG[i], b = pB[i];
      if (brightness > 1) {
        r = Math.min(255, Math.round(r * brightness));
        g = Math.min(255, Math.round(g * brightness));
        b = Math.min(255, Math.round(b * brightness));
      }
      colorArr[i] = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  }

  updateLayout();

  // --- Compute start positions and delays (once, based on initial viewport) ---
  var vw0 = window.innerWidth;
  var vh0 = window.innerHeight;
  var centerRow = H / 2;
  var centerCol = W / 2;
  var maxDist = Math.sqrt(centerRow * centerRow + centerCol * centerCol);
  var cx0 = gridOffsetX + gridW * scale / 2;
  var cy0 = gridOffsetY + gridH * scale / 2;

  for (var i = 0; i < N; i++) {
    sxArr[i] = cx0 + (Math.random() - 0.5) * vw0 * 1.5;
    syArr[i] = cy0 + (Math.random() - 0.5) * vh0 * 1.5;
    var dr = pRow[i] - centerRow, dc = pCol[i] - centerCol;
    var dist = Math.sqrt(dr * dr + dc * dc);
    delayArr[i] = (dist / maxDist) * 1800;
  }

  // --- Resize handler ---
  window.addEventListener('resize', function() {
    if (dismissed) return;
    updateLayout();
    if (assemblyDone) {
      for (var i = 0; i < N; i++) {
        curPos[i * 2] = txArr[i];
        curPos[i * 2 + 1] = tyArr[i];
      }
      drawFrame();
    }
  });

  // --- Drawing ---
  function drawFrame() {
    var w = canvas.width / dpr;
    var h = canvas.height / dpr;
    ctx.clearRect(0, 0, w, h);
    var fs = Math.max(1, 7 * scale);
    ctx.font = fs + 'px "Courier New",monospace';
    ctx.textBaseline = 'top';
    for (var i = 0; i < N; i++) {
      if (!pVisible[i]) continue;
      ctx.fillStyle = colorArr[i];
      ctx.fillText(pChar[i], curPos[i * 2], curPos[i * 2 + 1]);
    }
  }

  // --- Animation ---
  var MOVE_DURATION = 4000;
  var startTime = null;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (var i = 0; i < N; i++) {
      curPos[i * 2] = txArr[i];
      curPos[i * 2 + 1] = tyArr[i];
    }
    drawFrame();
    assemblyDone = true;
    onAssemblyComplete();
  } else {
    requestAnimationFrame(function firstFrame(now) {
      startTime = now;
      requestAnimationFrame(animate);
    });
  }

  function animate(now) {
    var elapsed = now - startTime;
    var allDone = true;
    for (var i = 0; i < N; i++) {
      var localElapsed = elapsed - delayArr[i];
      if (localElapsed < 0) {
        curPos[i * 2] = sxArr[i];
        curPos[i * 2 + 1] = syArr[i];
        allDone = false;
        continue;
      }
      var t = localElapsed / MOVE_DURATION;
      if (t >= 1) { t = 1; } else { allDone = false; }
      var ease = easeOutCubic(t);
      curPos[i * 2] = sxArr[i] + (txArr[i] - sxArr[i]) * ease;
      curPos[i * 2 + 1] = syArr[i] + (tyArr[i] - syArr[i]) * ease;
    }
    drawFrame();
    if (!allDone) {
      requestAnimationFrame(animate);
    } else {
      assemblyDone = true;
      onAssemblyComplete();
    }
  }

  function onAssemblyComplete() {
    document.getElementById('splash-enter').classList.add('visible');
    document.getElementById('splash-copyright').classList.add('visible');

    for (var i = 0; i < N; i++) {
      curPos[i * 2] = txArr[i];
      curPos[i * 2 + 1] = tyArr[i];
    }
    drawFrame();

    // No repulsion on touch devices (no hover cursor, saves CPU/battery)
    var isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!isTouchDevice) {
      startRepulsion();
    }

    document.getElementById('splash-enter').addEventListener('click', function() {
      dismissed = true;
      splash.classList.add('fade-out');
      document.querySelector('.app-shell').style.display = '';
      setTimeout(function() {
        splash.style.display = 'none';
        document.querySelectorAll('#panel-hero .reveal').forEach(function(el) {
          el.classList.add('revealed');
        });
      }, 800);
    });
  }

  function startRepulsion() {
    var mouseX = -9999, mouseY = -9999;
    var SPRING = 0.15;
    var offsets = new Float32Array(N * 2);

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    document.addEventListener('mouseleave', function() {
      mouseX = -9999; mouseY = -9999;
    });

    function repulse() {
      if (dismissed) return;
      var radius = 60 * scale;
      var strength = 40 * scale;
      var needsRedraw = false;
      for (var i = 0; i < N; i++) {
        var dx = txArr[i] - mouseX;
        var dy = tyArr[i] - mouseY;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var targetDx = 0, targetDy = 0;
        if (dist < radius && dist > 0.1) {
          var force = (1 - dist / radius) * strength;
          targetDx = (dx / dist) * force;
          targetDy = (dy / dist) * force;
        }
        var idx = i * 2;
        offsets[idx] += (targetDx - offsets[idx]) * SPRING;
        offsets[idx + 1] += (targetDy - offsets[idx + 1]) * SPRING;
        var ox = offsets[idx], oy = offsets[idx + 1];
        if (Math.abs(ox) > 0.1 || Math.abs(oy) > 0.1) {
          curPos[idx] = txArr[i] + ox;
          curPos[idx + 1] = tyArr[i] + oy;
          needsRedraw = true;
        } else {
          curPos[idx] = txArr[i];
          curPos[idx + 1] = tyArr[i];
        }
      }
      if (needsRedraw) {
        drawFrame();
      }
      requestAnimationFrame(repulse);
    }
    requestAnimationFrame(repulse);
  }
})();
