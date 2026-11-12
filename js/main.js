const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}
const form = document.querySelector('#comment-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const status = document.querySelector('#form-status');
    status.textContent = `THANK YOU, ${name.toUpperCase()}! YOUR COMMENT HAS BEEN PREVIEWED. THIS DEMO FORM DOES NOT SEND DATA TO A SERVER.`;
    form.reset();
  });
}
