/**
 * splash-animation.js -- Particle assembly animation for splash screen.
 * Depends on SPLASH_DATA from splash-data.js.
 */
(function() {
  var W = SPLASH_DATA.w;
  var H = SPLASH_DATA.h;
  var particles = SPLASH_DATA.p;
  var CHAR_W = 5.2;
  var ROW_H = 7.5;
  var gridW = W * CHAR_W;
  var gridH = H * ROW_H;

  var splash = document.getElementById('splash');
  var portraitWrap = document.getElementById('splash-portrait-wrap');
  var container = document.getElementById('splash-container');
  container.style.width = gridW + 'px';
  container.style.height = gridH + 'px';

  // Scale to fit viewport, reserving space for footer text
  var PAD = 0.94;
  var scale = 1;
  var FOOTER_H = 80;
  var FOOTER_W = 200;
  var GAP_COL = 16;
  var GAP_ROW = 32;

  function calcScale() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
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

    var brightness = scale < 1 ? 1 + (1 - scale) * 1.5 : 1;
    container.style.transform = 'scale(' + scale + ')';
    container.style.transformOrigin = '0 0';
    container.style.filter = brightness > 1 ? 'brightness(' + brightness + ')' : '';
    portraitWrap.style.width = Math.ceil(gridW * scale) + 'px';
    portraitWrap.style.height = Math.ceil(gridH * scale) + 'px';
  }
  calcScale();
  window.addEventListener('resize', calcScale);

  var vw = window.innerWidth;
  var vh = window.innerHeight;
  var centerRow = H / 2;
  var centerCol = W / 2;
  var maxDist = Math.sqrt(centerRow * centerRow + centerCol * centerCol);

  var fragment = document.createDocumentFragment();
  var spans = [];

  for (var i = 0; i < particles.length; i++) {
    var row = particles[i][0], col = particles[i][1], ch = particles[i][2];
    var r = particles[i][3], g = particles[i][4], b = particles[i][5];
    var tx = col * CHAR_W;
    var ty = row * ROW_H;
    var sx = (Math.random() - 0.5) * (vw / scale) * 1.5 + gridW / 2;
    var sy = (Math.random() - 0.5) * (vh / scale) * 1.5 + gridH / 2;
    var dr = row - centerRow, dc = col - centerCol;
    var dist = Math.sqrt(dr * dr + dc * dc);
    var delay = (dist / maxDist) * 1800;

    var span = document.createElement('span');
    span.className = 'p';
    span.textContent = ch;
    span.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
    span.style.left = tx + 'px';
    span.style.top = ty + 'px';
    span.style.transform = 'translate(' + (sx - tx) + 'px,' + (sy - ty) + 'px)';
    span.style.opacity = '0';
    fragment.appendChild(span);
    spans.push({ el: span, sx: sx, sy: sy, tx: tx, ty: ty, delay: delay });
  }
  container.appendChild(fragment);

  var MOVE_DURATION = 4000;
  var startTime = null;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  requestAnimationFrame(function firstFrame(now) {
    for (var i = 0; i < spans.length; i++) spans[i].el.style.opacity = '1';
    startTime = now;
    requestAnimationFrame(animate);
  });

  function animate(now) {
    var elapsed = now - startTime;
    var allDone = true;
    for (var i = 0; i < spans.length; i++) {
      var s = spans[i];
      var localElapsed = elapsed - s.delay;
      if (localElapsed < 0) { allDone = false; continue; }
      var t = localElapsed / MOVE_DURATION;
      if (t >= 1) { t = 1; } else { allDone = false; }
      var ease = easeOutCubic(t);
      var cx = s.sx + (s.tx - s.sx) * ease;
      var cy = s.sy + (s.ty - s.sy) * ease;
      s.el.style.transform = 'translate(' + (cx - s.tx) + 'px,' + (cy - s.ty) + 'px)';
    }
    if (!allDone) {
      requestAnimationFrame(animate);
    } else {
      for (var i = 0; i < spans.length; i++) spans[i].el.style.transform = 'translate(0,0)';
      onAssemblyComplete();
    }
  }

  function onAssemblyComplete() {
    // Show labels
    document.getElementById('splash-enter').classList.add('visible');
    document.getElementById('splash-copyright').classList.add('visible');
    var enterBtn = document.getElementById('splash-enter');

    // Start repulsion
    var mouseX = -9999, mouseY = -9999;
    var RADIUS = 60, STRENGTH = 40, SPRING = 0.15;
    var offsets = new Float32Array(spans.length * 2);
    var containerRect = container.getBoundingClientRect();

    document.addEventListener('mousemove', function(e) {
      mouseX = (e.clientX - containerRect.left) / scale;
      mouseY = (e.clientY - containerRect.top) / scale;
    });
    document.addEventListener('mouseleave', function() { mouseX = -9999; mouseY = -9999; });
    window.addEventListener('resize', function() { containerRect = container.getBoundingClientRect(); });

    function repulse() {
      for (var i = 0; i < spans.length; i++) {
        var s = spans[i];
        var dx = s.tx - mouseX, dy = s.ty - mouseY;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var targetDx = 0, targetDy = 0;
        if (dist < RADIUS && dist > 0.1) {
          var force = (1 - dist / RADIUS) * STRENGTH;
          targetDx = (dx / dist) * force;
          targetDy = (dy / dist) * force;
        }
        var idx = i * 2;
        offsets[idx] += (targetDx - offsets[idx]) * SPRING;
        offsets[idx + 1] += (targetDy - offsets[idx + 1]) * SPRING;
        var ox = offsets[idx], oy = offsets[idx + 1];
        if (Math.abs(ox) > 0.1 || Math.abs(oy) > 0.1) {
          s.el.style.transform = 'translate(' + ox + 'px,' + oy + 'px)';
        } else if (s.el.style.transform !== 'translate(0,0)') {
          s.el.style.transform = 'translate(0,0)';
        }
      }
      requestAnimationFrame(repulse);
    }
    requestAnimationFrame(repulse);

    // Click to enter site
    enterBtn.addEventListener('click', function() {
      splash.classList.add('fade-out');
      var appShell = document.querySelector('.app-shell');
      appShell.style.display = '';
      setTimeout(function() {
        splash.style.display = 'none';
        // Trigger reveal animations on the hero panel
        document.querySelectorAll('#panel-hero .reveal').forEach(function(el) {
          el.classList.add('revealed');
        });
      }, 800);
    });
  }
})();
