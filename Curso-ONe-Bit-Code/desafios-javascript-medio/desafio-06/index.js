/*
    Escreva uma função que recebe um número e retorna a sua persistência multiplicativa, que é a quantidade de vezes que é necessário multiplicar os seus algarismos para se chegar em um número de um únco algarismo.

    Entrada : (539)
    Saida : 3

    Entrada : (999)
    Saida : 4

    Entrada : (7)
    Saida : 0
*/


function multPers(num) {

    if (num < 10) {
        return 0
    }

    const algarismos = num.toString().split('')
    const product = algarismos.reduce((accum, atual) => accum * atual, 1)

    console.log(algarismos)

    return 1 + multPers(product)
}

console.log(multPers(539))
console.log(multPers(999))
console.log(multPers(7))