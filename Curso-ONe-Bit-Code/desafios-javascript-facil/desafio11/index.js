// O capitão da sua nave precisa que você implemente no sistema principal uma forma de obter todas as coordenadas abaixo de um determinado ponto partindo da origem (0,0) e retorne isso para o sistema em uma lista de pares ordenados(x,y).

//O desafio consiste em implementar, no sistema principal de uma nave, uma função que recebe um par ordenado de coordenadas (x, y) e retorna todas as coordenadas abaixo desse ponto, a partir da origem (0, 0).



function parOdernado(array) {
    const gResult = []

    for(let i = 0; i <= array[0]; i++) {
        for(let j = 0; j <= array[1]; j++) {
            gResult.push([i,j])
        }
    }

    return gResult
}

console.log(parOdernado([2,2]))
console.log(parOdernado([2,7]))
