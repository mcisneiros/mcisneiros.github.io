(function () {
  var root = document.documentElement;
  var nav = document.getElementById('nav');
  var menu = document.getElementById('menu');

  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Scrollspy: highlight the link of the section being read (animated by CSS)
  var links = Array.prototype.slice.call(document.querySelectorAll('#menu a.nav-link'));
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var current = null, ticking = false;
  function spy() {
    ticking = false;
    var line = window.innerHeight * 0.35, idx = -1;
    targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top <= line) idx = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) idx = targets.length - 1;
    if (idx === current) return;
    current = idx;
    links.forEach(function (a, i) {
      a.classList.toggle('active', i === idx);
      if (i === idx) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  function requestSpy() { if (!ticking) { ticking = true; window.requestAnimationFrame(spy); } }
  window.addEventListener('scroll', requestSpy, { passive: true });
  window.addEventListener('resize', requestSpy);
  spy();

  if (menu) {
    menu.addEventListener('show.bs.collapse', function () { nav.classList.add('menu-open'); });
    menu.addEventListener('hidden.bs.collapse', function () { nav.classList.remove('menu-open'); });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a.nav-link') && menu.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  }

  // Light / dark toggle (initial theme is set by the inline script in <head>)
  document.querySelectorAll('.theme-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.classList.add('theme-anim');
      root.setAttribute('data-theme', next);
      clearTimeout(window.__themeT);
      window.__themeT = setTimeout(function () { root.classList.remove('theme-anim'); }, 600);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });

})();
