// Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabetica em minusculo. Assuma que a string não tenha nenhuma letra com acento, números ou caracteres especiais.

// Entrada: "Ola Mundo" - Saida: "u"
// Entrada: "A vida e bela" - Saida: "v"
// Entrada: "Lorem ipsum dolore sec avanti" - Saida: "v"

const highestLetter = (str) => {
    const lowerStr = str.toLowerCase();
    const letters = lowerStr.split('')
    const sortedArry = letters.sort();
    return sortedArry[sortedArry.length - 1];
}

console.log(highestLetter("Ola Mundo")); // "u"
console.log(highestLetter("A vida e bela")); // "v"
console.log(highestLetter("Lorem ipsum dolore sec avanti")); // "v"