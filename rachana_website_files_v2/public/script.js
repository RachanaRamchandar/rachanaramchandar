(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const setMenu = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', open);
  };
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (menuToggle.getAttribute('aria-expanded') === 'true' && !menu.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 940) setMenu(false); }, {passive: true});
  document.getElementById('year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window) {
    const anchors = navLinks.filter(link => link.hash && document.querySelector(link.hash));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          anchors.forEach(link => { link.classList.toggle('is-active', link.hash === `#${entry.target.id}`); });
        }
      }
    }, {rootMargin: '-20% 0px -68% 0px', threshold: 0});
    anchors.forEach(link => observer.observe(document.querySelector(link.hash)));
  }
})();
