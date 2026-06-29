// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the active section link in the sticky nav while scrolling
const sections = document.querySelectorAll('main .section[id]');
const navLinks = document.querySelectorAll('.section-nav a');

const setActive = () => {
  let currentId = '';
  const scrollPos = window.scrollY + 120; // offset for sticky nav height

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', setActive, { passive: true });
window.addEventListener('load', setActive);
