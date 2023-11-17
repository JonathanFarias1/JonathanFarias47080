$(document).ready(function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const articulos = $('#articulos');

    if (carrito.length === 0) {
        articulos.append('<li class="list-group-item">El carrito está vacío</li>');
    } else {
        let montoTotal = 0;

        carrito.forEach(function(product, index) {
            const subtotal = product.precio * product.cantidad;
            montoTotal += subtotal;

           
            const item = `
            <tr>
                <td class="align-middle">
                    <img src="${product.imagen}" class="mr-2" style="width: 50px; height: 50px;" alt="${product.nombre}">
                    ${product.nombre}
                </td>
                <td class="align-middle">$${numeroComas(product.precio.toLocaleString())}</td>
                <td class="align-middle">${product.cantidad}</td>
                <td class="align-middle">$${numeroComas(subtotal.toFixed(2).toLocaleString())}</td>
                <td class="align-middle">
                    <button onclick="elimiardelCarrito(${index})" class="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>
        `;
        articulos.append(item);
    });
        const totales = $('#total');
        totales.html(`<p>Monto total: $${numeroComas(montoTotal.toFixed(2))}</p>`);
    }
});

function elimiardelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}


function numeroComas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




document.addEventListener("DOMContentLoaded", function() {
    const carritoEnLocalStorage = localStorage.getItem('carrito');
    
    if (!carritoEnLocalStorage || carritoEnLocalStorage.trim() === '') {
        Swal.fire({
            icon: 'info',
            title: 'Carrito Vacío',
            text: 'Agrega productos al carrito antes de continuar.',
            showConfirmButton: false,
            timer: 2500 
        }).then(() => {
            window.location.href = '../pages/store.html';
        });
    } else {
        document.getElementById('btnFinalizarCompra').addEventListener('click', function() {
            document.getElementById('formularioPago').style.display = 'block';
        });
    }
});



document.getElementById('btnComprar').addEventListener('click', function() {
    localStorage.removeItem('carrito');
    Swal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito',
        text: 'Gracias por tu compra.',
        showConfirmButton: false,
        timer: 2000  
    }).then(() => {
        window.location.href = '../index.html';
    });
});