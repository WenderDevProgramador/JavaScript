// Escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média aritimética entre else.

// Testes: (10,9,6,8,9,1,5,7)
// Saída: (6.875)

// Testes: (10,10,10,10,9)
// Saída: (9.8)


function media(...numeros) {
    
    const n = numeros.reduce((acumm, num) => acumm + num,0)
    return n / numeros.length

    
}

console.log(media(10,9,6,8,9,1,5,7))
console.log(media(10,10,10,10,9))