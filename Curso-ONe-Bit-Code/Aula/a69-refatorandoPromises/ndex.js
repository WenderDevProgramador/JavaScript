
const imc = async (altura, peso) => {
    if (typeof altura !== "number" || typeof peso !== "number") {
        return Promise.reject('Você precisa inserir parametros do tipo número!')
    } else {
        const result = parseFloat((peso / (altura ** 2)).toFixed(2))
        if (result < 18.5) return `Seu IMC é ${result} magreza`
        if (result >= 18.5 && result <= 24.9) return `Seu IMC é ${result} normal`
        if (result >= 25 && result <= 29.9) return `Seu IMC é ${result}  sobrepeso`
        if (result >= 30 && result <= 39.9) return `Seu IMC é ${result} obesidade`
        if (result >= 40) return `Seu IMC é ${result} obesidade grave `
    }
    
}



const showImc = async (altura, peso) => {
    try {
        console.log('Calculando o IMC...')
        const result = await imc(altura, peso)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

showImc(1.90, 56)
showImc(1.60, 67)
showImc(1.75, "t")
showImc(1.89, 300)