console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)

const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            usuario: "",
            passw: "",
            estado: false,  // Inicialmente falso, esto cambiará cuando cargue el usuario
            url: 'https://finanzasquant.pythonanywhere.com/usuarios/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.usuario = data.usuario
                    this.passw = data.passw
                    this.estado = data.estado
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let user = {
                usuario: this.usuario,
                passw: this.passw,
                estado: this.estado
            }
            var options = {
                body: JSON.stringify(user),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Usuario actualizado")
                    window.location.href = "users.html"; // navega a users.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')