// Mobile nav toggle
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    const isOpen = navLinks.classList.contains('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form submission (demo)
const form = document.querySelector('.contact__form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn');
    btn.textContent = 'Message Sent';
    btn.disabled = true;
    btn.style.opacity = '0.6';
  });
}
