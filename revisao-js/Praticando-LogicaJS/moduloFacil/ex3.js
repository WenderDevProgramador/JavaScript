//Escreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe e retorna true caso possua oi false caso não possua.

//Entrada : ('This is Thee')
//Saíada : true

//Entrada : ('ssd')
//Saíada : false


function checkBalance(str) {
    const charCount = {}
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1  
    }

    return Object.values(charCount).every((count, index, array) => index !== 0 ? count === array[index - 1] : true)
}

console.log(checkBalance('This is Thee'))
console.log(checkBalance('ssd'))
console.log(checkBalance('wwenndderr'))