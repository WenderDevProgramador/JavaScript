
function alterarN(n) {
    let result = ''
    let nString = n.toString()
    nString.split('')

    for (let i = 0; i < nString.length; i++) {
        let calculo = Number(nString[i]) ** 2
        result += calculo.toString()
    }

    return Number(result)

}

console.log(alterarN(3514))
console.log(alterarN(994571))
console.log(alterarN(24))
console.log(alterarN(745821698))


//Resolvendo com metodo map

function alterar(n) {
    const array = n.toString().split('')
    const result = array.map((valor) => valor ** 2)

    return Number(result.join(''))
}


console.log(alterar(3514))
console.log(alterar(994571))
console.log(alterar(24))
console.log(alterar(745821698))