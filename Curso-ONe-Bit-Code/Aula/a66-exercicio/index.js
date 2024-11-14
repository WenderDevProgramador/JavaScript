
const imc = (altura, peso) => {
    return new Promise((resolve, reject) => {
        if (typeof altura !== "number" || typeof peso !== "number") {
            reject('Você precisa inserir parametros do tipo número!')
        } else {
            const result = parseFloat((peso / (altura ** 2)).toFixed(2))
            if (result < 18.5) resolve(`Seu IMC é ${result} magreza`)
            if (result >= 18.5 && result <= 24.9) resolve(`Seu IMC é ${result} normal`)
            if (result >= 25 && result <= 29.9) resolve(`Seu IMC é ${result}  sobrepeso`)
            if (result >= 30 && result <= 39.9) resolve(`Seu IMC é ${result} obesidade`)
            if (result >= 40) resolve(`Seu IMC é ${result} obesidade grave `)
        }
    })

}

const showImc = (altura, peso) => {
    imc(altura, peso).then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    console.log('Calculando o IMC ...')
}

showImc(1.90,80)
showImc(1.60,67)
showImc(1.75,130)
showImc(1.89, 300)