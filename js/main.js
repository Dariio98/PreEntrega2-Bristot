// Bienvenida

alert('Bienvenido a nuestra rotisería online');
alert('La promo del dia es: Llevando dos o más productos tenes 10% de descuento en el total de tu compra');

// ordenar precios de los productos de menor a mayor

const ordenarPrecios = () => {
    comida.sort((a, b) => a.precio - b.precio)
    mostrarLista();
}

const mostrarLista = () => {
    const lista = comida.map(producto => {
        return producto.nombre+ ' $'+producto.precio
    });
    console.log(lista)
    comprarComida(lista)
}

// función elegir compra
const carrito = [];
const comprarComida = (listaDeComida) => {
    let comidaNombre = '';
    let cantidadComida = 0;
    let seguirComprando = false;


    do {
    comidaNombre = prompt('¿Qué deseas comprar?' +'\n\n'+listaDeComida.join('\n'));
    cantidadComida = parseInt(prompt('¿Cuánto deseas comprar?'))

    const validarProducto = comida.find(producto =>producto.nombre.toLowerCase() === comidaNombre.toLowerCase());

    // validación de texto ingresado por el usuario
    if (validarProducto) {
        agregarProducto(validarProducto, validarProducto.id, cantidadComida);
    } else {
        alert ('Usted ingreso el nombre del producto incorrecto. Lea atentamente y vuelva a ingresar el nombre de lo que usted desea comprar')
    }


        seguirComprando = confirm('Deseas comprar algo más?')
    } while (seguirComprando)

    confirmarCompra();

}

// funcion del carrito de compras
const agregarProducto = (validarProducto, idProducto, cantidadComida ) => {
    const productoIdentico = carrito.find(producto => producto.id === idProducto);
    if (productoIdentico) {
        productoIdentico.cantidad += cantidadComida
    } else {
        validarProducto.cantidad += cantidadComida;
        carrito.push(validarProducto);
    }
    console.log(carrito)
};


// comprobar carrito
const confirmarCompra = () => {
    const productoFinal = carrito.map(producto => {
        return producto.nombre+ ' x'+producto.cantidad+ ' unidades'
    });

    const confirmar = confirm('Usted tiene en su carrito: '
        +'\n\n'+productoFinal.join('\n')
        +'\n\n ¿Deseas continuar con la compra?'
    );

    if (confirmar) {
        finalizarCompra(productoFinal);
    } else {
        alert('Su compra ha sido cancelada')
    }
};


const finalizarCompra = (productoFinal) => {
    const totalCompra = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0);
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio*elemento.cantidad), 0)

if (totalCompra >= 2) {
    promo(precioTotal)
} else {
    alert('El precio de su compra es de: $'+precioTotal)
}

};


// promoción
const promo = (precioTotal) => {
    const precioPromo = precioTotal * 0.90;

    alert('El precio final de su compra con promoción es de: $'+precioPromo)
}



ordenarPrecios()
 
