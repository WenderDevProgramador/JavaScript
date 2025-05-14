//Escreva uma função que recebe um número inteiro , eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro.

// - Entrada: (3514)
// Saída:925116


function numResult(num) {
    const result = num.toString().split('').map(digit => Number(digit) ** 2 ).join('')

    return Number(result)
}

console.log(numResult(3514))
console.log(numResult(94571))
console.log(numResult(24))