function parimpar(n) {
        if (n % 2 == 0) {
            return 'PAR' 
        } else {
            return 'IMPAR'
        }
}

let a = parimpar(2)
console.log(parimpar(23),a)

function soma(n1=0,n2=0) {
    return n1 + n2
}

console.log(soma(25,2))