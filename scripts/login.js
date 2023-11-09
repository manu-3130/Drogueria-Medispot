const users = [
    { username: 'admin', password: 'password' }
];

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username == username && u.password == password);

    if (user) {
        window.location.href = 'admin.html';
    } else {
        showMessage('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}

function cambiarContraseña(){
    const password = document.getElementById('password').value;
    const nuevaPassword = document.getElementById('nuevaPassword').value;
    const nuevaPassword2 = document.getElementById('nuevaPassword2').value;
    const user = users.find(u => u.password == password);

    if(user){
        if(nuevaPassword.length >= 8 && nuevaPassword == nuevaPassword2){
            users[0].password = nuevaPassword
            window.location.href = 'index.html';
        }
        else if(nuevaPassword.length < 8){
            showMessage('Su contraseña debe de tener mas de 8 caracteres. Intentélo de nuevo.');
        }else if (nuevaPassword != nuevaPassword2){
            showMessage('Las contraseñas no son iguales. Inténtelo de nuevo.');
        }

    }else if (password != users[0].password){
        showMessage('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}