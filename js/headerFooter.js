const encabezado = document.getElementById("navegacion");
encabezado.classList.remove("d-none");

const encabezadoBody = encabezado.querySelector("nav");
encabezadoBody.innerHTML = `<a class="navbar-brand" href="#">
    <img src="images/cryptoMineLogo.png" alt="Logo">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="pages/cotizadorPrincipal.html">Inversion Basica</a>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Servicio Cotizador de Asics
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="pages/cotizadorMaquinas.html">Propuesta de Maquinas</a>
                <a class="dropdown-item" href="pages/ultimaCotizacion.html">UltimaCotizacion</a>
                <a class="dropdown-item" href="pages/valoresIniciales.html">Configuracion Propiedades</a>
            </div>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Tienda Asics</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
        </li>
    </ul>
</div>`;

document.addEventListener("DOMContentLoaded", function () {
  const pie = document.getElementById("pie");
  pie.classList.remove("d-none");

  const footer = pie.querySelector("footer");
  const footerContent = `
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h5>Say HelloDS Todos los Derechos Reservados © 2023</h5>
                    <p>Todos los derechos reservados</p>
                </div>
                <div class="col-lg-6">
                    <h5>Contacto</h5>
                    <ul class="list-unstyled">
                        <li><i class=""></i> Correo: info@dssayhello.com</li>
                        <li><i class=""></i> Teléfono: +1234567890</li>
                        <li><i class=""></i> Dirección: </li>
                    </ul>
                </div>
            </div>
        </div>`;

  footer.innerHTML = footerContent;
});
