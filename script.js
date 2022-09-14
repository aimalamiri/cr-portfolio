const burger = document.querySelector('#mobile-menu');

burger.addEventListener('click', () => {
  const nav = document.querySelector('#desktop-nav');
  const links = document.querySelector('#desktop-nav ul').children;
  for (let i = 0; i < links.length; i += 1) {
    links[i].children[0].classList.toggle('text-white');
  }
  nav.classList.toggle('mobile-nav');
});
