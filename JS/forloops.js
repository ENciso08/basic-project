// for loop es un interador ques nos ayuda a cumplir una concidicion hasta que 
//se deje de cumplir o se cumpla una condicion 
// ira ejecutando un codigo mientras la condicion sea evaluada como verdadera 
// se deja de cumplir cuando se completa , 

//for ( let i = 0; i < 10; i++ ) {
//    if( i % 2 === 0) {  // escribir bien el codigo y sigueind las reglas nos servirian para poder correr el codigo 
 //       console.log(`El numero ${i} es PAR `);
 //   }
//}




//haciendo uso de for loop

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

    for ( let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
    }