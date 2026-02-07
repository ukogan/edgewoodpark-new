/**
 * app.js -- Navigation, mobile menu, scroll reveals, keyboard shortcuts,
 * how-i-work sub-nav. Calls render functions on init.
 */
(function() {
  'use strict';

  // ---- Render all panels from content data ----
  renderHero(heroContent);
  renderHowIWork(howIWorkFiles);
  renderProjects(projectsContent);
  renderExperience(experienceContent);
  renderTestimonials(testimonialsContent);
  renderContact(contactContent);

  // ---- DOM References ----
  var panels = document.querySelectorAll('.content-panel');
  var fileItems = document.querySelectorAll('.file-tree__item');
  var contentArea = document.getElementById('contentArea');
  var sidebar = document.getElementById('sidebar');
  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var mobileOverlay = document.getElementById('mobileOverlay');

  var fileMap = {
    'hero': 'uri-kogan.md',
    'craft': 'how-i-work/',
    'projects': 'projects/',
    'experience': 'CHANGELOG.md',
    'testimonials': 'reviews/',
    'contact': 'CONTRIBUTING.md'
  };

  // Expose for inline onclick in skill.md links (scrolls to section)
  window._scrollToHiw = function(fileKey) {
    activateTab('craft');
    requestAnimationFrame(function() {
      var target = document.getElementById('hiw-' + fileKey);
      if (target) {
        setTimeout(function() {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  };

  // ---- Navigation ----
  function activateTab(tabId) {
    panels.forEach(function(panel) {
      panel.classList.toggle('content-panel--active', panel.id === 'panel-' + tabId);
    });

    fileItems.forEach(function(item) {
      if (!item.dataset.scroll) {
        item.classList.toggle('file-tree__item--active', item.dataset.tab === tabId);
        item.setAttribute('aria-selected', item.dataset.tab === tabId ? 'true' : 'false');
      }
    });

    contentArea.scrollTop = 0;

    requestAnimationFrame(function() { observeReveals(); });

    closeMobileMenu();
  }

  // File tree click/keyboard handlers
  fileItems.forEach(function(item) {
    // Skip non-navigable items
    if (item.classList.contains('file-tree__item--nonav')) return;

    function handleActivation() {
      var tabId = item.dataset.tab;
      var scrollTarget = item.dataset.scroll;

      activateTab(tabId);

      if (scrollTarget) {
        requestAnimationFrame(function() {
          var target = document.getElementById(scrollTarget);
          if (target) {
            setTimeout(function() {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
        });

        fileItems.forEach(function(fi) { fi.classList.remove('file-tree__item--active'); });
        item.classList.add('file-tree__item--active');
      }
    }

    item.addEventListener('click', handleActivation);
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivation();
      }
    });
  });

  // ---- Mobile Menu ----
  function closeMobileMenu() {
    sidebar.classList.remove('sidebar--mobile-open');
    mobileOverlay.classList.remove('mobile-overlay--visible');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      var isOpen = sidebar.classList.toggle('sidebar--mobile-open');
      mobileOverlay.classList.toggle('mobile-overlay--visible');
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  // ---- Scroll Reveal Animation ----
  var observer;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function observeReveals() {
    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll('.reveal').forEach(function(el) {
        el.classList.add('reveal--visible');
      });
      return;
    }

    var reveals = document.querySelectorAll('.reveal:not(.reveal--visible)');

    if (!observer) {
      observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: contentArea,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });
    }

    reveals.forEach(function(el) { observer.observe(el); });
  }

  observeReveals();

  // ---- Keyboard Navigation ----
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key >= '1' && e.key <= '7') {
      e.preventDefault();
      var tabIds = ['hero', 'craft', 'projects', 'experience', 'testimonials', 'contact'];
      var index = parseInt(e.key) - 1;
      if (tabIds[index]) activateTab(tabIds[index]);
    }
    if (e.key === 'Escape') closeMobileMenu();
  });

  // ---- Stat Animation ----
  var statCells = document.querySelectorAll('.stat-cell__value');
  var statsObserved = false;

  if (!prefersReducedMotion) {
    var statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !statsObserved) {
          statsObserved = true;
          statCells.forEach(function(cell, index) {
            cell.style.opacity = '0';
            cell.style.transform = 'translateY(10px)';
            cell.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            setTimeout(function() {
              cell.style.opacity = '1';
              cell.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }
      });
    }, { root: contentArea, threshold: 0.5 });

    statCells.forEach(function(cell) { statsObserver.observe(cell); });
  }

  // ---- Hover effects ----
  document.querySelectorAll('.project-featured, .project-medium').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 4px 24px rgba(88, 166, 255, 0.08)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });

  document.querySelectorAll('.review-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      var status = this.querySelector('.review-card__status');
      if (status) { status.style.transform = 'scale(1.2)'; status.style.transition = 'transform 0.2s ease'; }
    });
    card.addEventListener('mouseleave', function() {
      var status = this.querySelector('.review-card__status');
      if (status) { status.style.transform = 'scale(1)'; }
    });
  });

})();
