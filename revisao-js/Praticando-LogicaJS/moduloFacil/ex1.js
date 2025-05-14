//Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os númeos em ordem ascendente.

//Entrada : ([[1,5,3],[6,19,11],[47,128,5],[1,93,57,42,103]])


function ordenar(arr) {
    const numbers = []
    const novoArr = arr.forEach(list => numbers.push(...list))
    return numbers.sort((a,b) => a - b)

    
}

console.log(ordenar([[1,5,3],[6,19,11],[47,128,5],[1,93,57,42,103]]))