//Aun por Implementar
const usuarios = [
    { id: 1, nombre: "Usuario1", username: "user1", email: "usuario1@example.com", password: "contraseña1" },
    { id: 2, nombre: "Usuario2", username: "user2", email: "usuario2@example.com", password: "contraseña2" },

];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.password === password);
    
    if (usuarioValido) {

        Swal.fire({
            title: 'Quieres Continuar !',
            showDenyButton:true,
            showCancelButton:true,
            confirmButtonText: 'Si',
            denyButtonText:'No',
            cancelButtonText:'Cancelar'
    }).then((result) => {
        console.log(result);
    
        if (result.isConfirmed) {
            window.location.href = "./pages/cotizadorPrincipal.html";
            localStorage.setItem("usuario", JSON.stringify(usuarioValido));
        }else if (result.isDenied) {
            Swal.fire({
                title: 'Error!',
                text: 'No se Ha Cancelado el Acceso',
                icon: 'error',
                confirmButtonText: 'Confirmar'
        })
    }
})

      

     
    } else {
      //  alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");

      Swal.fire({
        title: 'Error',
        text: 'Contraseña o Usuario Incorrecto',
        icon: 'error',
        confirmButtonText: 'Reintentar'
})

    }
});
