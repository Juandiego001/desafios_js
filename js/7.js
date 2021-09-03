// Punto #7
const frutas = {mango: 5, pera: 10, manzana: 15, papaya:20, piña:25, 
    fresa:30, uva:35, mandarina:40, naranja:45, banano:50, granadilla:55};
let boton7 = botones[6];
boton7.addEventListener("click", () => {
    let fruta = value(inputs[9]);
    let kilos = Number(value(inputs[10]));
    let precioKilo = frutas[fruta];
    let divRespuesta = document.createElement('div');
    divRespuesta.className = 'w-75 d-flex justify-content-center text-light m-auto';
    if (precioKilo != null){
        let total = precioKilo*kilos;
        divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: El valor a pagar ' + 
        `por ${kilos} kilos de ${fruta} es de $ ${total} pesos.</h4>`;
    } else {
        divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: Lo sentimos, ' + 
        `la fruta digitada no existe.</h4>`;
    }
        divs[6].appendChild(divRespuesta);
});