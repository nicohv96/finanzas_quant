
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

// -------------------------------------------FORMULARIO--------------------------------------
const form = document.querySelector('.form');
const nom = document.querySelector('#nombre');
const nomError = document.querySelector('#nombre + span.error');
const ape = document.querySelector('#apellido');
const apeError = document.querySelector('#apellido + span.error');
const tel = document.querySelector('#telefono');
const telError = document.querySelector('#telefono + span.error');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');
const fotoPer = document.querySelector('#foto_perfil');
const enviar = document.querySelector('#enviar')


nom.addEventListener("input", function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.
  if (nom.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    nomError.innerHTML = ""; // Restablece el contenido del mensaje
    nom.style = "border-color: black; background-color: transparent;"
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

ape.addEventListener("input", function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.
  if (ape.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    apeError.innerHTML = ""; // Restablece el contenido del mensaje
    ape.style = "border-color: black; background-color: transparent;"
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

tel.addEventListener("input", function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.
  if (tel.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    telError.innerHTML = ""; // Restablece el contenido del mensaje
    tel.style = "border-color: black; background-color: transparent;"
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

email.addEventListener("input", function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.
  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ""; // Restablece el contenido del mensaje
    email.style = "border-color: black; background-color: transparent;"
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});


enviar.addEventListener('click', (event) => {
  //if the email field is valid, we let the form submit

  if (!email.validity.valid || !nom.validity.valid || 
    !ape.validity.valid || !tel.validity.valid  ) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  else{
    enviarJSON();
    alert("Formulario enviado")
  }
})



function enviarJSON() {
  let mail = email.value
  let nombre = nom.value
  let apellido = ape.value
  let telefono = tel.value
  let datos = JSON.stringify({nombre,apellido,telefono,mail});
  console.log(datos);

}; 





function showError() {
  if (email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent =
      "Debe introducir una dirección de correo electrónico.";
      email.style = "border-color: #900; background-color: #fdd;"
  } else if (email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent =
      "El valor introducido debe ser una dirección de correo electrónico.";
      email.style = "border-color: #900; background-color: #fdd;"
  }

  if (nom.validity.valueMissing) {// Si el campo está vacío
    nomError.textContent ="Debe introducir un nombre.";
      //nom.placeholder='Debe introducir un nombre' 
    nom.style = "border-color: #900; background-color: #fdd;"
  } 
  if (ape.validity.valueMissing) {// Si el campo está vacío
    apeError.textContent = "Debe introducir un apellido.";
    ape.style = "border-color: #900; background-color: #fdd;"
  }
  if (tel.validity.valueMissing) {// Si el campo está vacío
    telError.textContent = "Debe introducir un telefono.";
    tel.style=  "border-color: #900; background-color: #fdd;"
  } 

}