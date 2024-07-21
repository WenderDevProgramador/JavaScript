
let n = parseFloat(prompt('Olá eu sou o robo da tabuada!\nQual número desejá ver a tabuada ? '))

let resultado = '' 

for (let cont = 1; cont <= 20; cont++) {
    resultado +=  `--> ${n} X ${cont} = ${n * cont} \n`

    
}

alert(`${resultado}`)
