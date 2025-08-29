// Simple mobile menu toggle + current year
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer-inner p');
  if (footer) footer.innerHTML = footer.innerHTML.replace(/\d{4}/, new Date().getFullYear());
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('show');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});
