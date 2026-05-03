// Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém com as palavras na mesma ordem. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

// Entrada: ("Lorem ipsum dolore sec avanti")
// Saída: ("merol muspi erolod ces itnava")


const reverseWords = (str) => {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ').toLowerCase();
}

console.log(reverseWords("Lorem ipsum dolore sec avanti"));