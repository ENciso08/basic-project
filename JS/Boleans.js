//con una sintaxis asi , se debe tener claro que es un objeto 

const producto  = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Agregar propiedades
producto.imagen = "Imagen.jpg";

//Eliminar propiedades.
delete producto.disponible;
console.log(producto);

