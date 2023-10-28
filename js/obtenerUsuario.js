//Aun por Implementar
document.addEventListener("DOMContentLoaded", function() {

    const usuarioJSON = localStorage.getItem("usuario");
    
    if (usuarioJSON) {
        const usuario = JSON.parse(usuarioJSON);
        const usernameElement = document.getElementById("username");
        usernameElement.textContent = usuario.username;
    }
});
