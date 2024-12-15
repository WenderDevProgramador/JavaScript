function imc(weigth, heigth) {
    return new Promise((resolve, reject) => {
        if (typeof weigth !== 'number' || typeof heigth !== 'number') {
            reject('Arguments must be of type number! ')
        } else {
            resolve(weigth / (heigth * heigth))
        }

    })
}

function showImc(weigth, heigth,name='Sem nome') {
    imc(weigth, heigth).then((result) => {
        console.log(`O resultado do IMC foi de ${result}.`)
        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }).catch((err) => {
        console.log(err)
    })

    console.log(`Calculando o IMC para peso ${weigth} e altura ${heigth} Nome: ${name} ...`)
}

showImc(68,'true','Ze Do Gato')
showImc(300,1.99,'Mr.Pumba')
showImc(68,1.95,'Rafael')
showImc(68,1.70)