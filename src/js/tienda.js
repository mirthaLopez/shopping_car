const contenedorProductos = document.querySelector(".contenedorProductos");
let listaCarrito=JSON.parse(localStorage.getItem("listaCarrito"))||[];
//delegación de eventos
contenedorProductos.addEventListener("click", function (event) {
    // si se hace click---> 
    if (event.target.classList.contains('carrito')) {
        // contenedor correspondiente
        const producto = event.target.closest('.producto');
        const nombre = producto.querySelector('h4').textContent;
        const precio = producto.querySelector('p').textContent;
        const cantidad = producto.querySelector('input').valueAsNumber;
        const talla = producto.querySelector('select').value;
        const articulo = {
            productName: nombre,
            price: precio,
            quantity: cantidad,
            size: talla
        };

        listaCarrito.push(articulo);
        localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
    }
});
