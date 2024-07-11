document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const passw = document.getElementById('passw').value;

    fetch('https://finanzasquant.pythonanywhere.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario: usuario, passw: passw })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'User registered successfully') {
            alert('Registro exitoso');
            window.location.href = 'login.html';
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});