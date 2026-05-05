// Escreva uma função que recebe um número e retorna o seu fatorial.Sem usar estrutura de repetição. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120.

// Entrada: 5
// Saída: 120n

// Entrada: 0
// Saída: 1n

//Entrada: 32
//Saída: 263130836933693530167218012160000000n

const fatorial = (num) => {
    if (BigInt(num) === 0n){
        return 1n
    }

    return BigInt(num) * fatorial(BigInt(num) - 1n)
}


console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(32))