//Funciones JS que son y como crearlas 
//son una serie de procedimientos que permiten una accion, estas son reutilizables 

//Como declarar una funcion

function sumar(){
    console.log(10+10);
}

//Si se crea una funcion hay que llamarla 
sumar();

//Expresion de la funcion
sumar2();
const sumar2 = function(){
    console.log(3+3);
}



//IIFE , son funcione que se invocan a si misma, se usan en un escenario donde permite proteger las variables y funciones no se mezclen los archivos 
//(function() {
 //   console.log('Te Amo Mi Princesa');
//})();