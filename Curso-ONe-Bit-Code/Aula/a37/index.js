//Média Aritimética Simples:

const MediaSimples = (...num) => {
    const soma = num.reduce((acum, atual) => acum + atual, 0)
    return soma / num.length

}

console.log(`A média dos valores solicitados é ${MediaSimples(2, 6, 3, 7, 4)}`)


//Média Aritimética Ponderada:

const MediaPonderada = (...num) => {
    const somaValores = num.reduce((acum, {n, p}) => acum + (n * (p ?? 1)),0)
    const soma = num.reduce((acum, {p}) => acum + (p ?? 1),0)
    return somaValores / soma
}


console.log(`A média Ponderada dos valores é ${MediaPonderada({ n:7, p: 2 }, { n: 9, p:5 }, { n: 3, p: 1 })}`)

//Mediana: 

const mediana = (...num) => {
    const ordenado = [...num].sort((a,b) => a - b)
    const posição = Math.floor(ordenado.length / 2)
    if(ordenado.length % 2 === 0) {
        const valor1 = ordenado[posição]
        const valor2 = ordenado[posição - 1]
        return MediaSimples(valor1,valor2)
    } else {
        return ordenado[posição]
    }
}

console.log(`A mediana de 2,4,5,7,42,99 é ${mediana(2, 4, 5, 7, 42, 99)}
A mediana de 15,14,8,7,3 é ${mediana(15, 14, 8, 7, 3)}`)

//Moda :

const mode = (...numbers) => {
    // [[n,qt],[n,qt],[n,qt]]
    const quantities = numbers.map(num => [num,
        numbers.filter(n => num === n).length
    ])

    quantities.sort((a,b) => b[1] - a[1])
    return quantities[0][0]
}


console.log(`Moda: ${mode(1, 1, 5, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)