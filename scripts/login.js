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

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "498012621121-lleev8gr93ln1sllgr4an89s2dgr6puu.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.prompt();
}

function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);    
    console.log("Nombre del usuario: ", responsePayload.name);
    //llevamos al usuario al panel del admin
    window.location.href = 'admin.html';
}