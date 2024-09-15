//Forma mais simples
function calcularMédia(...n) {

    let m = 0
    for (let i = 0; i < n.length; i++) {
        m += n[i]
    }

    return parseFloat(m / n.length)
}

console.log(calcularMédia(10, 9, 6, 8, 9,1, 5, 7))

//Usando metodo forEach

function calMedia(...num) {
    let soma = 0

    num.forEach((n) => soma += n)

    return parseFloat(soma / num.length)
}

console.log(calMedia(10, 9, 6, 8, 9,1, 5, 7))

//Usando o metodo reduce


function media(...núm) {
    const valor = núm.reduce((novo,ele) => (novo + ele), 0)

    return parseFloat(valor / núm.length)
}

console.log(media(10, 9, 6, 8, 9,1, 5, 7))