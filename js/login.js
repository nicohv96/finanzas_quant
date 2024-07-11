document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const passw = document.getElementById('passw').value;

    fetch('https://finanzasquant.pythonanywhere.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario: usuario, passw: passw })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            sessionStorage.setItem('auth', btoa(`${usuario}:${passw}`));
            window.location.href = 'symbols.html';
        } else if (data.message === 'User account disabled') {
            alert('El usuario esta deshabilitado');
        } else {
            alert('El usuario y/o la contraseña son incorrectos');
        }
    })
    .catch(error => console.error('Error:', error));
});