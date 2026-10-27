// Small, intentional motion — reveal content as it enters the viewport.
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

revealItems.forEach((item) => revealObserver.observe(item));

// Keep navigation quietly aware of the section currently on screen.
const links = [...document.querySelectorAll('.nav nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { threshold: 0.35 });

sections.forEach((section) => activeObserver.observe(section));

// Respect users who prefer reduced motion.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduced-motion');
}
