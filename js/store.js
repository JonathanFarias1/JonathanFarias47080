$(document).ready(function() {
    $.getJSON('../productos.json', function(data) {
        const productList = $('#product-list');

        $.each(data.productos, function(index, product) {
            const catalogoProductos = `
                <div class="col-md-4 mb-3">
                    <div class="card centradoBoton">
                        <img src="${product.imagen}" class="card-img-top imagenesCarrito" alt="${product.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${product.nombre}</h5>
                            <p class="card-text">Precio: ${product.precio ? `$${product.precio}` : 'Precio no disponible'}</p>
                            <p class="card-text">Poder: ${product.poder}</p>
                            <input type="number" class="espaciadoInput" id="cantidades${index}" placeholder="Cantidad" min="1" value="1" />
                            <button onclick="agregarCarrito(${index})" class="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            `;
            productList.append(catalogoProductos);
        });

    });
});

function agregarCarrito(index) {
    const cantidades = parseInt($(`#cantidades${index}`).val());

    $.getJSON('../productos.json', function(data) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoSeleccionado = data.productos[index];

        productoSeleccionado.cantidad = cantidades;
        carrito.push(productoSeleccionado);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto agregado al carrito');
    });
}
