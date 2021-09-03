// Se obtienen todos los botones
let botones = document.querySelectorAll("button");

// Se obtienen todos los inputs
let inputs = document.querySelectorAll("input");

// Se obtienen todos los div's donde se colocaran las respuestas
// con la clase form-group
let divs = document.querySelectorAll(".form-group");

// Para retornar los valores de los Inputs
const value = (input) => {return input.value};

// Punto #1
let boton1 = botones[0];
boton1.addEventListener("click", () => {
    let horasTrabajadas = value(inputs[0]);
    let costeHoras = value(inputs[1]);
    let total = horasTrabajadas*costeHoras;
    let divRespuesta = document.createElement('div');
    divRespuesta.className = 'w-75 d-flex justify-content-center text-light m-auto';
    divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: Al trabajador le ' + 
        `corresponde la paga de $ ${total} pesos.</h4>`;
    divs[0].appendChild(divRespuesta);
});