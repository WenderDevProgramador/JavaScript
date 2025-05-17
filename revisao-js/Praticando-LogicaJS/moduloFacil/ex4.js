//Escreva uma função que recebe um número e retorna o seu fatorial sem ultilizar nenhum estrutura de repetição. O fatorial de um número é igual a multiplicação de todos os inteiros positivos menores ou igual a ele. Deve ser capaz de retorna númeoros inteiros corretos mesmo para valores altos.

//Entrada : 5
// Saída : 120n

function fatorial(num) {
    const bigNum = BigInt(num)
    if ( bigNum === 0n) {
        return 1n
    } else {
        return bigNum * fatorial(bigNum - 1n)   
    }


}

console.log(fatorial(5))
console.log(fatorial(32))
console.log(fatorial(99))
console.log(fatorial(3))

