// elementos del local storage
const productosCarrito = JSON.parse(localStorage.getItem("productos-carrito"));
console.log(productosCarrito);

const carritoVacio = document.querySelector('#carrito-vacio');
const carritoDeProductos = document.querySelector('#carrito-producto');
const carritoFuncionEliminar = document.querySelector('#carrito-funcion');
const carritoFuncionPrecio = document.querySelector('#carrito-funcion-precio');
const carritoFuncionComprar = document.querySelector('#carrito-funcion-comprar');

// Visibilidad de elementos en la pagina del carrito
if (productosCarrito) {
    carritoVacio.classList.add("disabled");
    carritoDeProductos.classList.remove("disabled");
    carritoFuncionEliminar.classList.remove("disabled");
    carritoFuncionComprar.classList.remove("disabled");
    carritoFuncionPrecio.classList.remove("disabled");

    // renderizar carrito
    const contenedor = document.getElementById('carrito-productos')
    productosCarrito.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('carrito__producto--contenedor');
        div.innerHTML += `
        <div class="carrito__producto--comprar">
        <img src="${producto.img}" alt="">
        <div class="carrito__producto--nombre">
            <h2>${producto.nombre}</h2>
        </div>
        <div class="carrito__producto--cantidad">
            <h2>Cantidad</h2>
            <p>${producto.cantidad}</p>
        </div>
        <div class="carrito__producto--precio">
            <h2>Precio</h2>
            <p>$${producto.precio}</p>
        </div>
        <div class="carrito__producto--subprecio">
            <h2>Subprecio</h2>
            <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito__producto--eliminar" id="${producto.id}"><i class="fa-solid fa-trash"></i></button>
    </div>`
    contenedor.append(div)
    });

} else {

}
