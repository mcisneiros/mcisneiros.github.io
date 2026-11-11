(function () {
  var root = document.documentElement;
  var nav = document.getElementById('nav');
  var menu = document.getElementById('menu');

  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

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

  if ('IntersectionObserver' in window) {
    root.classList.add('reveal-ready');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
  }
})();
