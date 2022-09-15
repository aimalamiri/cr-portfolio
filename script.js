const burger = document.querySelector('#mobile-menu');
const nav = document.querySelector('#desktop-nav');
const navLinks = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
  const links = document.querySelector('#desktop-nav ul').children;
  for (let i = 0; i < links.length; i += 1) {
    links[i].children[0].classList.add('text-white');
  }
  nav.classList.toggle('mobile-nav');
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    nav.classList.remove('mobile-nav');
  });
}
