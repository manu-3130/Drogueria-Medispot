const contraseña = document.getElementById("nuevaPassword").value;

localStorage.setItem("nombre", "usuario");
localStorage.setItem("contraseña", contraseña);
let nombreGuardado = localStorage.getItem("nombre");
console.log("Valor guardado: ", nombreGuardado);