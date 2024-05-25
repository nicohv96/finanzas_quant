//-------------------------------DOM-------------------------------
const header = document.querySelector(".header");
const menuIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const topButton = document.querySelector('.top-button');
const socialButton = document.querySelector('.social-button');
const marquee = document.querySelector('#marquee');

//-------------------------------Eventos-------------------------------
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
  marquee.classList.toggle("down",window.scrollY>0);
  socialButton.classList.toggle("show",window.scrollY>0);
});

//----------------------Marquee--------------------
const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      url:"https://dolarapi.com/v1/dolares",
      datos: [],
      error: false,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          this.datos = data;
          this.date = new Date(this.datos[0].fechaActualizacion)
          this.fecha=`${(this.date).toLocaleDateString()} - ${(this.date).getHours()}:${(this.date).getMinutes()}`
        })
        .catch(error=>{
            console.log("Error"+error)
            this.error = true
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#marquee");