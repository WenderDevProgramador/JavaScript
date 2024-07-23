const arr = [['Ze naldo', 25, ['Ronaldo', 36]], [25], [true]]

//console.log(arr[0][1])
//console.log(arr[0][2][1])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

//console.table(matriz)
//matriz[2].push('Novo')
//console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const resultado = matriz[i][j]
        console.log(`Posição (${i} , ${j}) Valor: ${resultado}`)
    }

}

