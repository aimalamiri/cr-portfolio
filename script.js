const burger = document.querySelector('#mobile-menu');

burger.addEventListener('click', () => {
  const nav = document.querySelector("#desktop-nav");
  const links = document.querySelector("#desktop-nav ul");
  for (const link of links.children) {
    link.children[0].classList.toggle('text-white');
  }
  nav.classList.toggle('mobile-nav')
});

