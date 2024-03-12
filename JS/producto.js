//Arrays 
//Arreglo plano
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre'];

//Arreglo de objetos 
const carrito =[    
{ nombre: 'Monitor 20 pulgadas', precio: 500 },
{ nombre: 'Televisor SMART TV', precio: 700 },
{ nombre: 'Tablet', precio: 300 },
{ nombre: 'Audifonos', precio: 200 },
{ nombre: 'Teclado', precio: 50 },
{ nombre: 'Celular', precio: 500 },
{ nombre: 'Laptop', precio: 900 },
{ nombre: 'Bocina', precio: 10 },
];

//forEach
//meses.forEach(function(mes){
    if(mes = 'Marzo'){
        console.log('Marzo si existe')
    }
//});

//include
//const resultado = meses.includes('marzo');
//console.log(resultado);
//Filter , para negar usando esta funcion se usa !==, con esta funcion podemos filtrar la informacion que deseemos 
resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Televisor SMART TV'
})
console.log(resultado);
