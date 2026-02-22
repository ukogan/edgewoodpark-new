/**
 * render.js -- HTML render functions for each content panel.
 * Reads from global variables defined in content.js.
 */

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function mdToHtml(text) {
  // Simple markdown-to-HTML for project body text:
  // **bold** and -- to em dash
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/ -- /g, ' &mdash; ')
    .replace(/-&gt;/g, '&rarr;')
    .replace(/&lt;-/g, '&larr;');
}

function renderHero(data) {
  var panel = document.getElementById('panel-hero');
  if (!panel || !data) return;

  // Count additions and deletions
  var additions = 0, deletions = 0;
  data.diffLines.forEach(function(line) {
    if (line.type === 'added') additions++;
    if (line.type === 'removed') deletions++;
  });

  var diffHtml = '';
  var lineNum = 0;
  data.diffLines.forEach(function(line) {
    lineNum++;
    var cls = line.type === 'added' ? 'diff-line--added' :
              line.type === 'removed' ? 'diff-line--removed' : 'diff-line--context';
    var prefix = line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' ';
    var label = line.type === 'added' ? ' aria-label="Added line"' :
                line.type === 'removed' ? ' aria-label="Removed line"' : '';
    var content = escapeHtml(line.text)
      .replace(/-&gt;/g, '&rarr;')
      .replace(/ -- /g, ' &mdash; ');
    diffHtml += '<div class="diff-line ' + cls + '"' + label + '>' +
      '<span class="diff-line__number">' + lineNum + '</span>' +
      '<span class="diff-line__prefix">' + prefix + '</span>' +
      '<span class="diff-line__content">' + content + '</span>' +
      '</div>';
  });

  // Blank context lines are now driven by content (blank lines in hero.md)

  var statsHtml = '';
  data.stats.forEach(function(stat) {
    statsHtml += '<div class="stat-cell">' +
      '<span class="stat-cell__value">' + escapeHtml(stat.value) + '</span>' +
      '<span class="stat-cell__label">' + escapeHtml(stat.label) + '</span>' +
      '</div>';
  });

  panel.innerHTML =
    '<div class="hero">' +
      '<h1 class="hero__name">' + escapeHtml(data.name) + '</h1>' +
      '<p class="hero__subtitle">' + escapeHtml(data.subtitle) + '</p>' +
      '<div class="diff-block" aria-label="Highlights">' +
        '<div class="diff-block__header">' +
          '<span class="diff-block__filename">Highlights</span>' +
          '<div class="diff-block__stats">' +
            '<span class="diff-block__additions" aria-label="' + additions + ' additions">+' + additions + '</span>' +
            '<span class="diff-block__deletions" aria-label="' + deletions + ' deletion' + (deletions !== 1 ? 's' : '') + '">-' + deletions + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="diff-block__body">' + diffHtml + '</div>' +
      '</div>' +
      '<div class="stats-bar" aria-label="Key metrics">' + statsHtml + '</div>' +
      '<div id="contrib-graph-mount"></div>' +
    '</div>';

  // Render contribution graph if data available
  if (typeof contributionsData !== 'undefined' && contributionsData) {
    renderContribGraph(contributionsData);
  }
}

function highlightMarkdownLine(line, fileKey) {
  var escaped = escapeHtml(line);

  // Empty line
  if (!line.trim()) return escaped;

  // Horizontal rule
  if (/^---+$/.test(line.trim())) {
    return '<span class="md-hl-hr">' + escaped + '</span>';
  }

  // H1
  if (/^# /.test(line)) {
    return '<span class="md-hl-h1">' + escaped + '</span>';
  }

  // H2
  if (/^## /.test(line)) {
    return '<span class="md-hl-h2">' + escaped + '</span>';
  }

  // H3
  if (/^### /.test(line)) {
    return '<span class="md-hl-h3">' + escaped + '</span>';
  }

  // List items — color the marker, highlight inline formatting in the rest
  var listMatch = line.match(/^(\s*- )(.*)/);
  if (listMatch) {
    return '<span class="md-hl-list-marker">' + escapeHtml(listMatch[1]) + '</span>' +
      highlightInline(escapeHtml(listMatch[2]), fileKey);
  }

  // Regular line — highlight inline formatting
  return highlightInline(escaped, fileKey);
}

function highlightInline(escaped, fileKey) {
  // Bold: **text** — color the markers dim, text bright
  escaped = escaped.replace(/\*\*(.+?)\*\*/g,
    '<span class="md-hl-emphasis-marker">**</span><span class="md-hl-bold">$1</span><span class="md-hl-emphasis-marker">**</span>');

  // Italic: *text* (but not inside already-processed bold)
  escaped = escaped.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g,
    '<span class="md-hl-emphasis-marker">*</span><span class="md-hl-italic">$1</span><span class="md-hl-emphasis-marker">*</span>');

  // Links: [text](target) — make clickable in skill.md, just colored elsewhere
  if (fileKey === 'skill') {
    escaped = escaped.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      function(m, text, target) {
        return '<a class="file-link" onclick="window._scrollToHiw(\'' + target + '\')">' +
          '<span class="md-hl-emphasis-marker">[</span>' + text +
          '<span class="md-hl-emphasis-marker">](</span>' + target +
          '<span class="md-hl-emphasis-marker">)</span></a>';
      }
    );
  } else {
    escaped = escaped.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<span class="md-hl-emphasis-marker">[</span><span class="md-hl-link">$1</span>' +
      '<span class="md-hl-emphasis-marker">](</span><span class="md-hl-link">$2</span><span class="md-hl-emphasis-marker">)</span>');
  }

  // Inline code: `text`
  escaped = escaped.replace(/`([^`]+)`/g,
    '<span class="md-hl-emphasis-marker">`</span><span style="color:var(--text-primary);">$1</span><span class="md-hl-emphasis-marker">`</span>');

  return escaped;
}

function renderHowIWork(data) {
  var panel = document.getElementById('panel-craft');
  if (!panel || !data) return;

  // File order matches sidebar
  var fileOrder = [
    'skill', 'customer-intimacy', 'cross-functional-leadership',
    'build-to-discover', 'strategy-to-shipping-code',
    'engineering-collaboration', 'trust-as-the-product', 'antipattern-mvp-trap'
  ];

  var html = '';

  fileOrder.forEach(function(fileKey) {
    if (!data[fileKey]) return;

    var lines = data[fileKey].content;
    var filename = fileKey + '.md';

    var gutterHtml = '';
    var contentHtml = '';

    for (var j = 0; j < lines.length; j++) {
      gutterHtml += '<span class="ln">' + (j + 1) + '</span>';
      contentHtml += highlightMarkdownLine(lines[j], fileKey) + '\n';
    }

    html += '<div class="hiw-section" id="hiw-' + fileKey + '">' +
      '<div class="hiw-section__header">' +
        '<span class="hiw-section__filename">' + escapeHtml(filename) + '</span>' +
      '</div>' +
      '<div class="code-view">' +
        '<div class="code-view__gutter">' + gutterHtml + '</div>' +
        '<div class="code-view__text">' + contentHtml + '</div>' +
      '</div>' +
    '</div>';
  });

  panel.innerHTML = html;
}

function renderProjects(data) {
  var panel = document.getElementById('panel-projects');
  if (!panel || !data) return;

  var html = '<div class="section-header">' +
    '<span class="section-header__version">v2.0</span>' +
    '<h2 class="section-header__title">Projects</h2>' +
    '<span class="section-header__path">~/edgewood-park/projects/</span>' +
    '</div>';

  data.forEach(function(p) {
    if (p.tier === 'featured') {
      html += '<div class="project-featured reveal" id="' + escapeHtml(p.id) + '">' +
        '<div class="project-featured__header">' +
          '<span class="project-featured__name">' + escapeHtml(p.filename) + '</span>' +
        '</div>' +
        '<div class="project-featured__body">' +
          '<p><strong>' + mdToHtml(p.title) + '</strong></p>' +
          '<p>' + mdToHtml(p.body) + '</p>' +
        '</div>';

      if (p.before || p.after) {
        html += '<div class="project-diff" aria-label="Before and after comparison">' +
          '<div class="project-diff__before">' +
            '<div class="project-diff__label project-diff__label--before" aria-label="Before state">&#x2212; Before</div>' +
            '<p class="project-diff__text">' + mdToHtml(p.before) + '</p>' +
          '</div>' +
          '<div class="project-diff__after">' +
            '<div class="project-diff__label project-diff__label--after" aria-label="After state">+ After</div>' +
            '<p class="project-diff__text">' + mdToHtml(p.after) + '</p>' +
          '</div>' +
        '</div>';
      }

      if (p.outcome) {
        html += '<div class="project-featured__insight">' +
          '<span class="project-featured__insight-label">OUTCOME:</span>' +
          '<span class="project-featured__insight-text">' + mdToHtml(p.outcome) + '</span>' +
        '</div>';
      }

      html += '</div>';

    } else if (p.tier === 'medium') {
      // Split body into paragraphs on double newline
      var bodyParts = p.body.split('\n\n');
      var bodyHtml = '';
      bodyParts.forEach(function(part) {
        if (part.trim()) bodyHtml += '<p>' + mdToHtml(part.trim()) + '</p>';
      });

      html += '<div class="project-medium reveal" id="' + escapeHtml(p.id) + '">' +
        '<div class="project-medium__header">' +
          '<span class="project-medium__name">' + escapeHtml(p.filename) + '</span>' +
        '</div>' +
        '<div class="project-medium__body">' + bodyHtml + '</div>';

      if (p.outcome) {
        html += '<div class="project-medium__outcome">=> ' + mdToHtml(p.outcome) + '</div>';
      }

      html += '</div>';

    } else if (p.tier === 'compact') {
      html += '<div class="project-compact reveal" id="' + escapeHtml(p.id) + '">' +
        '<span class="project-compact__name">' + escapeHtml(p.filename) + '</span>' +
        '<span class="project-compact__desc">' + mdToHtml(p.body) + '</span>';

      if (p.link) {
        var domain = p.link.replace(/^https?:\/\//, '').replace(/\/$/, '');
        html += '<a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener" class="project-compact__link">' + escapeHtml(domain) + ' &rarr;</a>';
      }

      html += '</div>';
    }
  });

  panel.innerHTML = html;
}

function renderExperience(data) {
  var panel = document.getElementById('panel-experience');
  if (!panel || !data) return;

  var html = '<div class="section-header">' +
    '<span class="section-header__version">CHANGELOG</span>' +
    '<h2 class="section-header__title">Experience</h2>' +
    '<span class="section-header__path">~/edgewood-park/CHANGELOG.md</span>' +
    '</div>';

  data.forEach(function(entry) {
    var title = escapeHtml(entry.title).replace(/ -- /g, ' &mdash; ');
    var period = escapeHtml(entry.period).replace(/ - /g, ' &ndash; ');

    html += '<div class="changelog-entry reveal">' +
      '<div class="changelog-version">' +
        '<div class="changelog-version__dot"></div>' +
        '<span class="changelog-version__tag">' + escapeHtml(entry.version) + '</span>' +
        '<span class="changelog-version__title">' + title + '</span>' +
        '<span class="changelog-version__period">' + period + '</span>' +
      '</div>' +
      '<div class="changelog-body">';

    entry.sections.forEach(function(section) {
      var labelClass = 'changelog-section__label--' + section.label;
      html += '<div class="changelog-section">' +
        '<div class="changelog-section__label ' + labelClass + '">' + escapeHtml(section.label.charAt(0).toUpperCase() + section.label.slice(1)) + '</div>';

      section.items.forEach(function(item) {
        var itemText = escapeHtml(item).replace(/-&gt;/g, '&rarr;').replace(/ -- /g, ' &mdash; ');
        if (section.label === 'result') {
          html += '<div class="changelog-item changelog-item--result">' + itemText + '</div>';
        } else {
          html += '<div class="changelog-item">' + itemText + '</div>';
        }
      });

      html += '</div>';
    });

    html += '</div></div>';
  });

  panel.innerHTML = html;
}

function renderTestimonials(data) {
  var panel = document.getElementById('panel-testimonials');
  if (!panel || !data) return;

  var html = '<div class="section-header">' +
    '<h2 class="section-header__title">Reviews</h2>' +
    '<span class="section-header__path">~/edgewood-park/reviews/</span>' +
    '</div>';

  data.forEach(function(review) {
    // Split quote into lines for diff-style rendering
    var words = review.body.split(' ');
    var quoteLines = [];
    var currentLine = '';
    for (var i = 0; i < words.length; i++) {
      var test = currentLine ? currentLine + ' ' + words[i] : words[i];
      if (test.length > 80 && currentLine) {
        quoteLines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = test;
      }
    }
    if (currentLine) quoteLines.push(currentLine);

    var linesHtml = '';
    for (var j = 0; j < quoteLines.length; j++) {
      linesHtml += '<div class="diff-line diff-line--added">' +
        '<span class="diff-line__number">' + (j + 1) + '</span>' +
        '<span class="diff-line__prefix">+</span>' +
        '<span class="diff-line__content">' + escapeHtml(quoteLines[j]) + '</span>' +
        '</div>';
    }

    html += '<div class="diff-block reveal" style="margin-bottom: var(--space-lg);">' +
      '<div class="diff-block__header">' +
        '<span class="diff-block__filename">' + escapeHtml(review.name) + '</span>' +
        '<span class="diff-block__stats" style="font-size: var(--font-size-xs); color: var(--text-muted);">' + escapeHtml(review.role) + '</span>' +
      '</div>' +
      '<div class="diff-block__body">' + linesHtml + '</div>' +
      '</div>';
  });

  panel.innerHTML = html;
}

function renderContribGraph(data) {
  var mount = document.getElementById('contrib-graph-mount');
  if (!mount || !data || !data.contributions) return;

  var contributions = data.contributions;
  var total = data.total || 0;

  var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Build the grid cells and track week-to-month mapping
  var cellsHtml = '';
  var weekMonths = [];
  var currentWeek = -1;

  for (var i = 0; i < contributions.length; i++) {
    var c = contributions[i];
    var weekIndex = Math.floor(i / 7);

    if (weekIndex !== currentWeek) {
      currentWeek = weekIndex;
      // Extract month from date string (YYYY-MM-DD)
      var month = parseInt(c.date.split('-')[1], 10) - 1;
      weekMonths.push(month);
    }

    var level = c.level || 0;
    var count = c.count || 0;
    var countLabel = count === 0 ? 'No contributions' :
                     count === 1 ? '1 contribution' :
                     count + ' contributions';

    cellsHtml += '<div class="contrib-graph__cell contrib-graph__cell--level-' + level + '"' +
      ' data-date="' + escapeHtml(c.date) + '"' +
      ' data-count="' + count + '"' +
      ' role="gridcell" tabindex="-1"' +
      ' aria-label="' + countLabel + ' on ' + escapeHtml(c.date) + '"' +
      '></div>';
  }

  // Build month labels
  var monthLabelsHtml = '';
  var COL_WIDTH = 14; // 11px cell + 3px gap
  var lastMonth = -1;
  for (var w = 0; w < weekMonths.length; w++) {
    if (weekMonths[w] !== lastMonth) {
      // Count span columns for this month
      var spanCols = 0;
      for (var w2 = w; w2 < weekMonths.length && weekMonths[w2] === weekMonths[w]; w2++) {
        spanCols++;
      }
      monthLabelsHtml += '<span class="contrib-graph__month-label" style="width:' +
        (spanCols * COL_WIDTH) + 'px">' + MONTH_NAMES[weekMonths[w]] + '</span>';
      lastMonth = weekMonths[w];
    }
  }

  // Chart icon SVG
  var chartIcon = '<svg class="contrib-graph__header-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">' +
    '<path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"/>' +
    '</svg>';

  // Legend cells
  var legendHtml = '';
  var legendColors = ['#21262d', '#0e4429', '#006d32', '#26a641', '#39d353'];
  for (var lc = 0; lc < legendColors.length; lc++) {
    legendHtml += '<div class="contrib-graph__legend-cell" style="background:' + legendColors[lc] + ';"></div>';
  }

  mount.innerHTML =
    '<div class="contrib-graph" aria-label="Contribution activity graph">' +
      '<div class="contrib-graph__header">' +
        chartIcon +
        '<span class="contrib-graph__filename">contributions.graph</span>' +
        '<span class="contrib-graph__count">' +
          '<strong>' + total + '</strong> contributions in the last year' +
        '</span>' +
      '</div>' +
      '<div class="contrib-graph__body">' +
        '<div class="contrib-graph__wrapper">' +
          '<div class="contrib-graph__months" aria-hidden="true">' + monthLabelsHtml + '</div>' +
          '<div class="contrib-graph__grid-area">' +
            '<div class="contrib-graph__day-labels" aria-hidden="true">' +
              '<div class="contrib-graph__day-label"></div>' +
              '<div class="contrib-graph__day-label">Mon</div>' +
              '<div class="contrib-graph__day-label"></div>' +
              '<div class="contrib-graph__day-label">Wed</div>' +
              '<div class="contrib-graph__day-label"></div>' +
              '<div class="contrib-graph__day-label">Fri</div>' +
              '<div class="contrib-graph__day-label"></div>' +
            '</div>' +
            '<div class="contrib-graph__grid" role="group" aria-label="Contribution cells">' +
              cellsHtml +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="contrib-graph__footer">' +
        '<div class="contrib-graph__legend">' +
          '<span class="contrib-graph__legend-label">Less</span>' +
          legendHtml +
          '<span class="contrib-graph__legend-label">More</span>' +
        '</div>' +
      '</div>' +
    '</div>';

  // Tooltip behavior
  var tooltip = document.getElementById('contrib-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.className = 'contrib-tooltip';
    tooltip.id = 'contrib-tooltip';
    tooltip.setAttribute('aria-hidden', 'true');
    tooltip.innerHTML = '<span class="contrib-tooltip__count" id="tooltip-count"></span>' +
      '<span class="contrib-tooltip__date" id="tooltip-date"></span>';
    document.body.appendChild(tooltip);
  }

  var tooltipCount = document.getElementById('tooltip-count');
  var tooltipDate = document.getElementById('tooltip-date');
  var grid = mount.querySelector('.contrib-graph__grid');

  grid.addEventListener('mouseover', function(e) {
    var cell = e.target.closest('.contrib-graph__cell');
    if (!cell) return;

    var count = parseInt(cell.getAttribute('data-count'), 10);
    var dateStr = cell.getAttribute('data-date');

    if (count === 0) {
      tooltipCount.textContent = 'No contributions';
    } else if (count === 1) {
      tooltipCount.textContent = '1 contribution';
    } else {
      tooltipCount.textContent = count + ' contributions';
    }

    // Format date: YYYY-MM-DD -> Month Day, Year
    var parts = dateStr.split('-');
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];
    var monthIndex = parseInt(parts[1], 10) - 1;
    var day = parseInt(parts[2], 10);
    tooltipDate.textContent = ' on ' + monthNames[monthIndex] + ' ' + day + ', ' + parts[0];

    tooltip.classList.add('contrib-tooltip--visible');

    var rect = cell.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
  });

  grid.addEventListener('mouseout', function(e) {
    var cell = e.target.closest('.contrib-graph__cell');
    if (!cell) return;
    tooltip.classList.remove('contrib-tooltip--visible');
  });
}

function renderContact(data) {
  var panel = document.getElementById('panel-contact');
  if (!panel || !data) return;

  var heading = escapeHtml(data.heading).replace(/&amp;/g, '&amp;');
  var intro = escapeHtml(data.intro);
  var ctaText = escapeHtml(data.cta_text).replace(/ -- /g, ' &mdash; ');

  var cardsHtml = '';
  data.cards.forEach(function(card) {
    cardsHtml += '<div class="consulting-card">' +
      '<div class="consulting-card__title">' + escapeHtml(card.title) + '</div>' +
      '<div class="consulting-card__desc">' + escapeHtml(card.desc).replace(/ -- /g, ' &mdash; ') + '</div>' +
      '</div>';
  });

  panel.innerHTML =
    '<div class="section-header">' +
      '<h2 class="section-header__title">Let\'s Work Together</h2>' +
      '<span class="section-header__path">~/edgewood-park/CONTRIBUTING.md</span>' +
    '</div>' +
    '<div class="contact-section">' +
      '<h2 class="contact-section__heading">' + heading + '</h2>' +
      '<p class="contact-section__sub">' + intro + '</p>' +
      '<div class="consulting-grid reveal">' + cardsHtml + '</div>' +
      '<a href="' + escapeHtml(data.cta_href) + '" target="_blank" rel="noopener" class="connect-btn">' +
        '<span aria-hidden="true">&#8631;</span> ' + ctaText +
      '</a>' +
    '</div>';
}
