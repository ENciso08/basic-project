//* Boton Abrir cerrar formulario*//
const toggle = document.querySelector('.main'),
      toggle1 = document.querySelector('.trasera'),
      tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta');

   const vuelta = false;

   //*Rotacion Tarjeta*//
      toggle.onclick = () => {
         if (vuelta){
            tarjeta.classList.remove('active');
         } else {
            tarjeta.classList.toggle('active');
         }
         };

         btnAbrirFormulario.addEventListener('click', () => {
            btnAbrirFormulario.classList.toggle('active')
            formulario.classList.toggle ('active');
         }) 

//* Select del mes generado dinamicamente *//

   for (let i = 1; i <=12; i++){
      let opcion = document.createElement('option');
      opcion.value = i;
      opcion.innerText = i;
      formulario.selectMes.appendChild(opcion);
}
//* Select del año generado dinamicamente 
   const yearActual = new Date().getFullYear();
   for(let i = yearActual; i <= yearActual + 8; i++ ) {
      let opcion = document.createElement('option');
      opcion.value = i;
      opcion.innerText = i;
      formulario.selectYear.appendChild(opcion);
   }
   //*Input numero de tarjeta
   let input = document.getElementById('inputNumber');
      input.addEventListener('keyup' , (event) =>{
         console.log(event);
      });
