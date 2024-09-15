function maiorLetra(letra) {
    const letrar = letra.toLowerCase().split('');
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let maior = ''; // Variável para armazenar a maior letra
    let maiorPosicao = -1; // Armazena a maior posição encontrada no alfabeto

    letrar.forEach((elemento) => {
        const posicao = alfabeto.indexOf(elemento); // Encontra a posição da letra no alfabeto

        if (posicao > maiorPosicao) { // Se a posição for maior, atualiza
            maiorPosicao = posicao;
            maior = elemento;
        }
    });

    return maior;
}

console.log(maiorLetra('Lorem ipsum dolore sec avanti')); // Resultado: 'v'


//Segunda forma

function maiorL (l){
    const result = l.toLowerCase().split('').sort()
    return result[result.length - 1]

} 


console.log(maiorL('Lorem ipsum dolore sec avanti'));
