
function calcAlgo(num) {
    let numero = num.toString().split('')
    let resutado = numero.map(novo => Number(novo) ** 2 ).join('')

    return Number(resutado)
}

console.log(calcAlgo(3514))