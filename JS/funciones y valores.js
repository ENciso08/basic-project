// Funciones que muestran valores 
//function sumar (n1, n2) {
//    return n1+n2;
//}
//const resultado = sumar(2,3);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(600);
total = agregarCarrito(400);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El valor a pagar es de: $${totalAPagar}`);//para agregar las comillas en este caso se debe usar template de strings la cual es una forma de agregar textos con variables 
