//Escreva uma função recebe um par ordenado (x,y) e retorne um array de pares (x,y) onde cada um deles possiu x e y menor ou igual ao par recebido em ordem crescente. Os pares devem ser ordenados de forma que o primeiro aumente o valor de y e depois o valor de x. Apenas o quadrante onde x e y são positivos deve ser considerado.

//Entrada : ([2,2])
//Saída: ([2,7])

function cordenadas(arr){
    let coord = []

    for (let i = 0; i <= arr[0]; i++) {
        for (let j = 0; j <= arr[1]; j++) {
            coord.push([i,j])
        
    }
        
    }

    return coord
}

console.log(cordenadas([2,2]))
console.log(cordenadas([6,8]))
console.log(cordenadas([12,4]))