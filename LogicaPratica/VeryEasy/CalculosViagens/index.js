// Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro.

// Entrada: 3514 - Saida: 925116
// Entrada: 994571 - Saida: 811625494



const squareDigits = (num) => {
    let numStr = num.toString().split('');
    let result = numStr.reduce((acc, dig) =>  acc + (parseInt(dig) ** 2).toString(), '');
    return parseInt(result);
}

console.log(squareDigits(3514)); // 925116
console.log(squareDigits(994571)); // 811625494