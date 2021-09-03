// Punto #4
let boton4 = botones[3];
boton4.addEventListener("click", () => {
    let cantidadNums = value(inputs[6]);
    let total = sumaNumeros(cantidadNums);
    let divRespuesta = document.createElement('div');
    divRespuesta.className = 'w-75 d-flex justify-content-center text-light m-auto';
    divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: La suma total es ' + 
        `${total}.</h4>`;
    divs[3].appendChild(divRespuesta);
});

function sumaNumeros(n){
    let sumaNumeros = 0;
    for (let i = 0; i < n; i++){
        let num = Number(prompt("Ingresa el número #" + (i+1) + ": "));
        sumaNumeros += num;
    }

    return sumaNumeros;
}