const contenedorProductos = document.getElementById("contenedorProductos");

let listChart = JSON.parse(localStorage.getItem("listaCarrito")) || [];
let total = 0;
let totalArticulos = 0;

console.log(listChart[0].price);


for (let index = 0; index < listChart.length; index++) {
    total = total + (Number(listChart[index].price) * (listChart[index].quantity));
    totalArticulos = totalArticulos + listChart[index].quantity;
    let producto = document.createElement("div")
    contenedorProductos.appendChild(producto);
    producto.className = "contenedorArticulo"

    /// creamos etiquetas h3 donde se almacena cada articulo
    let articulo = document.createElement("h3")
    producto.appendChild(articulo)
    articulo.className = "articulo"
    articulo.innerHTML = "Articulo: " + listChart[index].productName; 

    let precio=document.createElement("h5");
    articulo.appendChild(precio); 
    precio.innerHTML="Precio por unidad: "+listChart[index].price;

    let cantidad=document.createElement("h5");
    articulo.appendChild(cantidad); 
    cantidad.innerHTML="Cantidad de articulos ordenados: "+listChart[index].quantity;
    /// Crea un boton Eliminar
    let btnEliminar = document.createElement("button") 
    btnEliminar.innerHTML ="Eliminar";
    btnEliminar.className = "btnEliminar"
    articulo.appendChild(btnEliminar); 
    
    btnEliminar.addEventListener("click", function () {
        let articulos = JSON.parse(localStorage.getItem("listaCarrito")) || [] 
        const listaActualizada = articulos.filter(product => product != articulo);
        articulo.remove()
        localStorage.setItem("listaCarrito", JSON.stringify(listaActualizada));
        location.reload()
    })

}

console.log(total);
console.log(totalArticulos);