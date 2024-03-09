// ----------------------CONST---------------------------------


const arrNumbers =[1,2,3,4,5,6,7,2];
const arrString =["Camioneta","Carro particular","Motocicleta","Patineta", "Caminar" ];

const candy = [{
    name: "Cotton Candy",
    price: 3.9,
    due: "Nov 03 2020"
},{
    name: "Blueberry",
    price: 3.0,
    due: "Nov 03 2021"

},{
    name: "Soda",
    price: 3.3,
    due: "Nov 03 2021"

},{
    name: "Weed",
    price: 4.20,
    due: "In your mind"

}
    
]

// ------------------------ARRAY AND METHODS--------------------------------------------------------------------------

// .at(), llama el arr dependiendo del valor que reciba, dara true , false or undf
    // console.log(arrNumbers.at(0));

    // For sentense arrNumbers, to see each element

    // for (let i = 0; i < arrNumbers.length; i++) {
    // //    console.log(arrNumbers[i,2]);, podemos acceder al elemento entrando por el i y enviando el el que queremos en consola , sin embargo no podemos entrar en elem negativos
    //     // console.log(arrNumbers.at(-2)); .at() nos ayuda a entrar en los elementos postivos y negativos , es recomendable usarlo 
    // }


// ----------------------------------------Mutabilidad-------------------------------------------
 
arrString.unshift("Lista de vehiculos");//Agrega un elemento al principio 
arrString.push("Lista de Mercado");//Agrega un elemento al final
arrString.splice(5,0, "input")//Elimina el array dependiendo del valor que le demos,
//  sin embargo si le damos para agregar otro arr podemos pocisionarlo donde nos convenga o eliminar un arr ya existente 
// let a = arrString.pop()
// let c = arrString.shift()
// console.log(c);
// console.log(a);
    // let d = arrString.at(1) // .at(), llama el arr dependiendo del valor que reciba, dara true , false or undf
    // console.log(d);
// arrString.fill()  // Ayuda a llenar todas las posiciones del array depende de como lo especifiquemos 

let copy = [...arrNumbers, ...arrString]  // operador Spread ... nos ayuda a unir la ifnormacion de manera sencilla sin tanto codigo, tambien nos auuida a crear copias 

// copy[0] = 10




// ----------------------------------------Inmutabilidad-------------------------------------------
const carros = arrString.concat(arrNumbers);//concatena dos array en una nueva variable

console.log(carros.indexOf("Caminar")); //muestra el index del array donde esta posicionado
let b = arrString.slice(0,2) //Elimina o muestra el array que posicionemos en el parametro    


// -----------------------------Objetos-----------------------------------------------------------------------------




// candy.forEach((element,i) => {console.log(element),console.log("index " + i)})

candy.sort((a,b) => {
    if (a.name > b.name) {
        return 1
    }
    if (a.name < b.name) {
        return -1
    }
    return 0;
})


// const  e = candy.find((element) => element.price < 5);
// const  f = candy.filter((element) => element.price < 4);
// console.log(f);
// console.log(3);


// paradigma en Objet, con booleans 


let fn = (e) => e.price > 3 // 
// console.log(candy.every(fn));// every nos ayuda a validar si el precio de nuestro Obj en este caso, supera 5, si no muestra el booleans false, other wise true 

// map, transforma un arr en otro arr sin importar si son del mismo tipo 

const candy1 = candy.map(element => {
    return{
        name:element.name,
        price: element.price * 2,
        due: element.due
    }
})

























// mostrar el codigo en consola, debemos crear una funcion, asimismo argumentarla 


// show(copy);
showDom("array1", copy);
showDom2("array2",candy);
showDom2("array3",candy1);



function show(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function showDom(element,arr) {
    document.getElementById(element).innerHTML="";

    for (let i = 0; i < arr.length; i++) {
        document.getElementById(element).innerHTML+=
        `<div> ${arr[i]} </div>`;
    }
}

// for of se hace uso con obejtos iterables

function showDom2(element,arr) {
    document.getElementById(element).innerHTML="";

    for (let e of arr) {
        document.getElementById(element).innerHTML+=
        `<div> ${e.name} ${e.price},${e.due} </div>`;
    }
}























