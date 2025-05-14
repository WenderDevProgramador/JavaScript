//Escreva uma função que recebe uma string e retorna cada palavra da string investida e em letra minúsculas, porém com as palavras na mesma ordem> Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.


//Entrada : 'Lorem ipsum dolore sec avanti'


function inverter(str) {
    const frase = str.toLowerCase().split(' ').map((palavra) =>  palavra.split('').reverse().join('')
    )

    return frase.join(' ')
}

console.log(inverter('Lorem ipsum dolore sec avanti'))
console.log(inverter('Wender e Sileide'))
