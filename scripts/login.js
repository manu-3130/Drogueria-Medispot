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

function esconder(){
    const loginCambio1 = document.getElementById("login-section2")
    loginCambio1.style.display = "grid"
    const loginCambio2 = document.getElementById("login-section")
    loginCambio2.style.display = "none"
}

function cambiarContraseña(){
    const loginCambio1 = document.getElementById("login-section2")
    const loginCambio2 = document.getElementById("login-section")
    const password = document.getElementById('passwordActual').value;
    const nuevaPassword = document.getElementById('nuevaPassword').value;
    const nuevaPassword2 = document.getElementById('nuevaPassword2').value;
    const user = users.find(u => u.password == password);

    if(user){
        if(nuevaPassword.length >= 8 && nuevaPassword == nuevaPassword2){
            loginCambio1.style.display = "none"
            loginCambio2.style.display = "grid"
            user.password = nuevaPassword
            showMessage('Contraseña cambiada, ingrese de nuevo por favor');
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
    localStorage.setItem("nombre", responsePayload.name);
    //llevamos al usuario al panel del admin
    window.location.href = 'admin.html';
}