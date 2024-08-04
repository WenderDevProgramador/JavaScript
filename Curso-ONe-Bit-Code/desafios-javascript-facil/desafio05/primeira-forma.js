

function maiorLetra(letra) {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const entrada = letra.toUpperCase();
    let maiorValor = -1;
    let maiorLetra = '';

    for (let i = 0; i < entrada.length; i++) {
        let posicao = alphabet.indexOf(entrada[i]);
        if (posicao > maiorValor) {
            maiorValor = posicao;
            maiorLetra = entrada[i];
        }
    }

    return maiorLetra;
}


let resultado = maiorLetra("Lorem ipsum dolore sec avanti");
console.log(`A maior letra de acordo com sua posição no alfabeto é ${resultado}.`); 
