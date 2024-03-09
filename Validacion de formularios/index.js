// para acceder al id elemento usamos Element
const formulario = document.getElementById("formulario")

// para accder al ID formulario usamos queryAll, para accder a todos
const inputs = document.querySelectorAll("#formulario input")



// como estamos trabajando con formularios, tenemos las RegExp que nos pueden ser utiles a la hora de programar la funcion
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// representa si un campo esta valido o no esto con el fin de cuando enviamos
//  el form sea correcto la informacion que estamos mandando, de lo contrario mandara un error

const campos ={
    usuario: false,
    nombre : false,
    password: false,
    correo: false,
    telefono: false
}

// para validar el formulario accedemos al parametro (e) y le solicitamos que llame al name del input al cual deseamos ubicar 
// en este caso el input que queremos es usuario, entonces buscamos el name
const validarFormulario =(e) => {

    // usamos un swicth para comparar el valor de cada instancia con la expresion dada 
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target,'usuario');
     
            break;         
        case "nombre":
            validarCampo(expresiones.nombre, e.target,'nombre');

            break;         
        case "password":
            validarCampo(expresiones.password, e.target,'password');
            validarPassword2();

            break;         
        case "password2":
            validarPassword2();
            break;         
            
        case "correo":
            validarCampo(expresiones.correo, e.target,'correo');   

            break;         
        case "telefono":
            validarCampo(expresiones.telefono, e.target,'telefono');


            break;         
        case "terminos":

            break;         
    
        default:

            break;
    }

}

// esta funcion la podemos reutilizar en todo el formulario
    const validarCampo = (expresion,input,campo) =>{
       // validamos con if si el usuario corresponde con la expresion regular
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto")
            document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto")
            document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle")
            document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-check")
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
            campos[campo] = false
        } else{
            document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
            document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
            document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle")
            document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-check")
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
            campos[campo] = true

        }
    }


// validar password2, en caso de que sean dif muestra false

const validarPassword2 = ()=>{
    const inputPassword1 = document.getElementById("password");
    const inputPassword2 = document.getElementById("password2");

    // agregamos un condicional que nos determine si la password es true or false
    if (inputPassword1.value !==inputPassword2.value) {
            document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
            document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
            document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle")
            document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-check")
            document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
            campos["password"] = false;

    }else{
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto")
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto")
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle")
        document.querySelector(`#grupo__password2 i`).classList.add("fa-times-check")
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos["password"] = true;

    }
}


// agregamos el metodo forEach, para llamar recorrer cada input y se ejecute un codigo por cada input 
// le colocamos el parametro input 

    inputs.forEach((input) => {
        // le agregamos un event listener para que se ejectute una validacion 
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    // agregamos un evento de tipo submit para tener acceso al boton ENVIAR
    formulario.addEventListener('submit',(e)=> {
        // agregamos preventDefault para EVITAR que los datos se envien apenas se llene el form, este nos ayuda a validar primero 
        // que la informacion esta ingresada correcta
        e.preventDefault();

        const terminos = document.getElementById("terminos")
        if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
            formulario.reset();

            document.getElementById("formulario__mensaje-exito").classList.add('formulario__mensaje-exito-activo');
            setTimeout(()=>{
                document.getElementById("formulario__mensaje-exito").classList.remove('formulario__mensaje-exito-activo')
            },50000);
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
                icono.classList.remove('formulario__grupo-correcto');
            })

        }else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }

        

    })