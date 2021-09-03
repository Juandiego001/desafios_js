// Punto #5
let boton5 = botones[4];
boton5.addEventListener("click", () => {
    let palabra = value(inputs[7]);
    let size = palabra.length;
    let divRespuesta = document.createElement('div');
    divRespuesta.className = 'w-75 d-flex justify-content-center text-light m-auto';
    
    divs[4].appendChild(divRespuesta);
    // Validamos que la palabra tenga más de 2 caracteres
    if (size > 2){
        let total = esPalindrome(palabra, size);
        if (total){
            divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: La palabra es palíndrome.</h4>';
        } else {
            divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: La palabra <u>no</u> es palíndrome.</h4>';
        }
    } else {
        divRespuesta.innerHTML =  '<h4 class="text-center">Repuesta: La palabra es palíndrome ' + 
            'porque tiene uno o dos caracteres.</h4>';
    }
});

function esPalindrome(palabra, size){
    let res = true;
    if (size%2 == 0){
        for (let i = 0; i < size/2; i++){
            if (palabra[i] != palabra[size - i - 1]){
                res = false;
                break;
            }
        }
    } else {
        for (let i = 0; i < (size-1)/2; i++){
            if (palabra[i] != palabra[size - i - 1]){
                res = false;
                break;
            }
        }
    }

    return res;
}
