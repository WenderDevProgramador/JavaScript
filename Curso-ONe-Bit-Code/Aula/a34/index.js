//Operador espreed usado para usar qualquer número dentro de uma função e usar como array.

function sum (param, ...n) {
    return n.reduce((novo,antigo) => novo + antigo, 0)
}

console.log(sum(1,2,5,100,36,2,0,1,0,9))