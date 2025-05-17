//Escreva uma função que recebe um valor inteiro e retorne a quantidade de cada moeda para se chegar ao valor. Deve-se sempre priorizar as moedas de maior valor (o maximo possivel da maior moeda e ir diminuindo gradativamente até que se chegue em um valor).

// Entrada: 478
// Saída: {'1': 3, '5':0, '10':0,'25': 3, '100':4, '500': 0}


function caixa(num) {
    let moedas = {
        '500': 0,
        '100': 0,
        '25': 0,
        '10': 0,
        '5': 0,
        '1': 0
    }

    let resto = num

    moedas['500'] = Math.floor(resto / 500)
    resto -= 500 * Math.floor(resto / 500)

    moedas['100'] = Math.floor(resto / 100)
    resto -= 100 * Math.floor(resto / 100)

    moedas['25'] = Math.floor(resto / 25)
    resto -= 25 * Math.floor(resto / 25)

    moedas['10'] = Math.floor(resto / 10)
    resto -= 10 * Math.floor(resto / 10)

    moedas['5'] = Math.floor(resto / 5)
    resto -= 5 * Math.floor(resto / 5)

    moedas['1'] = Math.floor(resto / 1)
    resto -= 1 * Math.floor(resto / 1)


    return moedas
}

console.log(caixa(478))
console.log(caixa(550))
console.log(caixa(5139))