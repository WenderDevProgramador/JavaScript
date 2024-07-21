const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

console.log(arr)

//Adicionar Elementos

// push - > adiciona elementos no final do array

arr.push('Boromir')
arr.push('Boromir')

//unshift -> adiciona elementos no começo do array

let tamanho = arr.unshift('Black')
console.log(arr)
console.log(tamanho)

//pop - > remove elementos no final do array

 
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift - > Remove elementos no começo do array

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um elemento
//includes -> Pesquisa por um elemento.

const inclui = arr.includes('Gandalf')

console.log(inclui)

//indexOf - > Pesquisa a posição do elemento.

const indice = arr.indexOf('Gandalf')

console.log(indice)

//Cortar e Concatenar
//slice -> Corta uma parte do array e salva é como a função copia e cola no windows

const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)

console.log(hobbits)
console.log(outros)
console.log(arr)