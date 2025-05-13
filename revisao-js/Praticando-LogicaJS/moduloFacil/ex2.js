//Escreva uma função que recebe um número e retorna uma quantidade equivalente de 'chunks' separados por um traço '-' sem últilizar nenhuma estrutura de repetição.

//Entrada: (4)
//Saída: 'chunk-chunk-chunk-chunk'

function chunk(n) {
    if (n === 0) {
        return ''
    }

    if (n === 1) {
        return 'chunks'
    } else {
        return 'chunks-' + chunk(n -1)
    }
}

console.log(chunk(4))
console.log(chunk(40))
console.log(chunk(8))
console.log(chunk(2))