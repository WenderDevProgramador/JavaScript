
function fatorial (num) {
    let n = BigInt(num)
    if (n === 0n) {
        return 1n
    } else {
        return n * fatorial(num - 1)
    }
    
}

// Quando trabalhamos com números muito grande no javaScript precisamos usar o BigInt() e os outros números precisamos colocar um n no final.

console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(32))
console.log(fatorial(9))

