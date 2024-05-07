const menuIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  overlay.classList.toggle('active'); // Activa o desactiva el fondo oscurecido
});

overlay.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
  overlay.classList.remove('active');
});

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  const breakpoint = 768;

  if (screenWidth > breakpoint) {
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
  }
});

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("down",window.scrollY>0);
});

/*
window.onload = function() {
  window.scrollTo(0, 0);
};
*/