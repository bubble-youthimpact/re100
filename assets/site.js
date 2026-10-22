(function () {
  var menu = document.getElementById('mobile-menu');
  var openBtn = document.getElementById('menu-open');
  var closeBtn = document.getElementById('menu-close');
  var header = document.querySelector('.site-header');

  function openMenu() {
    menu.hidden = false;
    document.body.classList.add('menu-open');
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function closeMenu() {
    menu.hidden = true;
    document.body.classList.remove('menu-open');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }
  if (menu && openBtn && closeBtn) {
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) closeMenu();
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
    });
  }
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 4); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  /* Remove the app's old offline cache from visitors who opened the previous version of this site. */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (r) { r.unregister(); });
    }).catch(function () {});
  }
})();
