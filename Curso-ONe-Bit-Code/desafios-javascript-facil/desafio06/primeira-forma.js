function fraseInvestida (str) {
    let entrada = str.split(' ');
    let resultado = []
    for(let i = 0; i < entrada.length; i++) {
        let saida = entrada[i].split('').reverse().join('');
        resultado.push(saida)
    }

    return resultado.join(' ').toLowerCase()
}

console.log(fraseInvestida("Lorem ipsum dolore sec avanti"))

