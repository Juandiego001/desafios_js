// Punto #6
let boton6 = botones[5];
boton6.addEventListener("click", () => {
    let nums = value(inputs[8]);
    let total = mediaDesviacion(nums);
    let divRespuesta = document.createElement('div');
    divRespuesta.className = 'w-75 d-flex justify-content-center text-light m-auto';
    divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: La media de la ' + 
        `muestra de números es ${total[0]} y la desviación estándar es ${total[1]}.</h4>`;
    divs[5].appendChild(divRespuesta);
});

function mediaDesviacion(nums){
    // Se eliminan los espacios
    nums = nums.trim();
    let arr = nums.split(",");
    let sum = 0;
    let n = arr.length;
    arr.forEach(element => {
        sum += Number(element);
    });

    let media = sum / n;
    let sumCuadrados = 0;
    for (let i = 0; i < n; i++){
        sumCuadrados = sumCuadrados + ((arr[i]-media)**2);
    }
    let division = sumCuadrados / n;
    return [media, Math.sqrt(division)];
}