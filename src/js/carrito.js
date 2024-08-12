const contenedorProductos = document.getElementById("contenedorProductos");
const totalArt=document. getElementById("totalArt");
const totalPago=document. getElementById("totalPago");


let listChart = JSON.parse(localStorage.getItem("listaCarrito")) || [];
let total = 0;
let totalArticulos = 0;

for (let index = 0; index < listChart.length; index++) {
    total = total + (Number(listChart[index].price) * (listChart[index].quantity));
    totalArticulos = totalArticulos + Number(listChart[index].quantity);
    let producto = document.createElement("div")
    contenedorProductos.appendChild(producto);
    producto.className = "contenedorArticulo";

    /// creamos etiquetas h3 donde se almacena cada articulo
    let articulo = document.createElement("h3")
    producto.appendChild(articulo)
    articulo.className = "articulo"
    articulo.innerHTML = listChart[index].productName; 
    let articuloName=listChart[index].productName;
    console.log(articuloName);
    

    let precio=document.createElement("h5");
    producto.appendChild(precio); 
    precio.innerHTML="$"+listChart[index].price;

    let cantidad=document.createElement("h5");
    producto.appendChild(cantidad); 
    cantidad.innerHTML=listChart[index].quantity;
    /// Crea un boton Eliminar
    let btnEliminar = document.createElement("button") 
    btnEliminar.innerHTML ="Eliminar";
    btnEliminar.className = "btnEliminar"
    producto.appendChild(btnEliminar); 
    
    btnEliminar.addEventListener("click", function () {  
        let valores = JSON.parse(localStorage.getItem("listaCarrito")) || [];
        function filtrarPorNombre(obj) {
            if ("productName" in obj != articuloName) {
              return true;
            } else {
              return false;
            }
          }

          console.log(valores);

          const listaActualizada = valores.filter(filtrarPorNombre);
          console.log(listaActualizada);
          
          localStorage.setItem("listaCarrito", JSON.stringify(listaActualizada));
          producto.remove();
    })
}

totalArt.innerHTML="La cantidad total de articulos a pagar es: "+totalArticulos;
totalPago.innerHTML="El monto total a cancelar es: $"+total;
console.log(total);
console.log(totalArticulos);