// Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os números em ordem ascendente.

// Exemplo: [[3, 2, 1], [6, 5, 4]] => [1, 2, 3, 4, 5, 6]

// Entrada: [[1,3],[4,8],[7,5],[2,6]] => [1, 2, 3, 4, 5, 6, 7, 8]


const organizeResults = (arr) => {
    const arrayUnico = arr.reduce((acc, curr) => [...acc, ...curr], [])
    return arrayUnico.sort((a, b) => a - b)
}

console.log(organizeResults([[3, 2, 1], [6, 5, 4]])) // [1, 2, 3, 4, 5, 6]
console.log(organizeResults([[1,3],[4,8],[7,5],[2,6]])) // [1, 2, 3, 4, 5, 6, 7, 8]