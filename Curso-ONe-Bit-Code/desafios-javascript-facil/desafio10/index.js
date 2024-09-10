
function Fatorial(num) {
    const bigNum = BigInt(num)

    if (bigNum === 0n) {
        return 1n
    } else {
        return bigNum * Fatorial(bigNum - 1n)
    }
}

console.log(Fatorial(5))


//BigInt() --> Função usada para trabalhar com números de valores muito alto no JavaScript , os números a serém calculados junto deve se colocar o n no final ex 0n 5n.

//Função recursiva é uma função usada dentro dela mesma chamando ela mesma, para se criar um loop com uma condição de parada.