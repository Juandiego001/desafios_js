// Punto #2
let boton2 = botones[1];
boton2.addEventListener("click", () => {
    let peso = value(inputs[2]);
    let estatura = value(inputs[3]);
    let total = Math.round(peso/(estatura**2)*100)/100;
    let divRespuesta = document.createElement('div');
    divRespuesta.className = 'w-75 d-flex justify-content-center text-light m-auto';
    divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: Tu índice de masa ' + 
        `corporal es de ${total} kg/m2.</h4>`;
    divs[1].appendChild(divRespuesta);
});