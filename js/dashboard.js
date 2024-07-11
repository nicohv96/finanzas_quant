document.getElementById('logoutBtn').addEventListener('click', function() {
    // Limpiar localStorage
    localStorage.removeItem('token'); // Si tienes un token guardado
    localStorage.clear(); // Esto limpiará todo el localStorage

    // Redirigir a la página de inicio de sesión
    window.location.href = 'login.html'; // Cambia 'login.html' por tu ruta de inicio de sesión
});