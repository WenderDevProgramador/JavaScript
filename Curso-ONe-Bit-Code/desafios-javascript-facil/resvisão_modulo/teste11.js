
function troco(num) {
    const moedas = {'500': 0, '100': 0, '25':0, '10':0, '5':0, '1':0}
    let resto = num

    moedas['500'] = Math.floor(resto/500)
    resto -= 500 * Math.floor(resto/500)

    moedas['100'] = Math.floor(resto/100)
    resto -= 100 * Math.floor(resto/100)

    moedas['25'] = Math.floor(resto/25)
    resto -= 25 * Math.floor(resto/25)

    moedas['10'] = Math.floor(resto/10)
    resto -= 10 * Math.floor(resto/10)

    moedas['5'] = Math.floor(resto/5)
    resto -= 5 * Math.floor(resto/5)

    moedas['1'] = Math.floor(resto/1)
    resto -= 1 * Math.floor(resto/1)

    return moedas
}

console.log(troco(478))
console.log(troco(384))
console.log(troco(5412))
console.log(troco(50))


function trocoP(num) {
    const moedas = {'500': 0, '100': 0, '25': 0, '10': 0, '5': 0, '1': 0}
    let resto = num

    // Percorre os valores das moedas
    for (let valor in moedas) {
        moedas[valor] = Math.floor(resto / valor)
        resto -= valor * moedas[valor]
    }

    return moedas
}

console.log(trocoP(478))   // { '500': 0, '100': 4, '25': 3, '10': 0, '5': 0, '1': 3 }
console.log(trocoP(384))   // { '500': 0, '100': 3, '25': 3, '10': 0, '5': 1, '1': 4 }
console.log(trocoP(5412))  // { '500': 10, '100': 4, '25': 0, '10': 1, '5': 0, '
