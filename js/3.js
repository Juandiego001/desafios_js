// Punto #3
let boton3 = botones[2];
boton3.addEventListener("click", () => {
    let noDelDia = value(inputs[4]);
    let delDia = value(inputs[5]);
    let descuento = noDelDia*225;
    let total = descuento + delDia*450;
    let divRespuesta = document.createElement('div');
    divRespuesta.className = 'w-75 d-flex justify-content-center text-light m-auto';
    divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: Precio habitual de las barras: $ 450 pesos.<br>' + 
        `Descuento hecho por las <u>no frescas</u>: $ ${descuento} pesos.<br>` + 
        `Coste final total: $ ${total} pesos.</h4>`;
    divs[2].appendChild(divRespuesta);
});