// =========================================================
// Site behaviour (runs on every page):
// 1. Reading-progress line along the bottom of the top bar
// 2. Active nav link (scroll-spy on the home page, fixed on sub-pages)
// 3. Mobile menu toggle
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const progressFill = document.getElementById('progressFill');
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  // ---- 1. Progress ----
  function updateProgress() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressFill.style.width = `${progress}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // ---- 2. Active link ----
  function setActive(id) {
    navLinks.forEach((link) => link.classList.toggle('active', link.dataset.section === id));
  }

  const pageSection = document.body.dataset.section; // set on project/experience pages
  if (pageSection) {
    setActive(pageSection);
  } else {
    const sections = document.querySelectorAll('.section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach((s) => observer.observe(s));
    setActive('profile');
  }

  // ---- 3. Mobile menu ----
  function setMenu(open) {
    siteNav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  }
  navToggle.addEventListener('click', () => setMenu(!siteNav.classList.contains('open')));
  navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
});
