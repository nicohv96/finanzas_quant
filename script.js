const header = document.querySelector(".header");
const menuIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const topButton = document.querySelector('.top-button');

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
  header.classList.toggle("down",window.scrollY>0);
  topButton.classList.toggle("show",window.scrollY>0);
});
