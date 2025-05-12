//Escreva uma função que recebe um array e retorne um novo array com todas as posições investidas do original sem alterá-lo.Não utilize os métodos do objeto global Array do JS (reverse, map, forEach)


function inverte(array) {
    
    let nov = []

    for (let i = 0; i < array.length; i++) {
        nov[i] = array[array.length - 1 - i];
        
    }

    return nov

} 


console.log(inverte([0,9,6,8,9,1,5,7]))
console.log(inverte(['Antonio','Fagundes','Da','Silva']))