
async function imc(weigth, heigth) {
    if (typeof weigth !== 'number' || typeof heigth !== 'number') {
        return Promise.reject('Arguments must be of type number! ')
        } else {
            return weigth / (heigth * heigth)
        }
}

async function showImc(weigth, heigth,name='Sem nome') {
    try {
        const result = await imc(weigth, heigth)
        console.log(`Calculando o IMC para peso ${weigth} e altura ${heigth} Nome: ${name} ...`)

        console.log(`O resultado do IMC foi de ${result}.`)

        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')

    } catch (err) {
        console.log(err)
    }

}

showImc(68,'true','Ze Do Gato')
showImc(300,1.99,'Mr.Pumba')
showImc(68,1.95,'Rafael')
showImc(68,1.70)