// Escreva uma função que recebe um par ordenado (x,y) e retorne um array de pares (x,y) onde cada um deles possui x e y menor ou  igual ao par recebido em ordem crescente.Os pares devem ser ordenados de forma que primeiro aumente o valor de y e depois o valor de x.  Apenas o quadrante onde x e y são positivos deve ser considerado.

// Entrada: ([2,2]) Saída: [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]

// Entrada: ([2,7]) Saída: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7]]


const interCoord = ([x=0,y=0]) => {
    let result = []
    for(let i =0; i <= y; i++) {
        for(let j = 0; j <= x; j++) {
            result.push([j,i])
        }     }
    return result
    }

console.log(interCoord([2,2]))
console.log(interCoord([2,7]))
console.log(interCoord([0,0]))
console.log(interCoord([-9,-3]))