//Escreva um programa que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento , número ou caractere especial, apenas letras e espaços.

//Entrada : 'Lorem ipsum dolore sec avanti'
//Saída : 'v'

function highsLetter(str) {
    const sorted = str.toLowerCase().split('').sort()

    return sorted[sorted.length - 1]
}

console.log(highsLetter('Lorem ipsum dolore sec avanti'))
console.log(highsLetter('Wender'))
console.log(highsLetter('Sileide'))