
// Entrada: (539) Saída: (3) Explicação: 5*3*9 = 135, 1*3*5 = 15, 1*5 = 5. O número de vezes que multiplicamos os dígitos é 3, então a persistência multiplicativa de 539 é 3.

// Entrada: (999) Saída: (4)

// Entrada: (7169) Saída: (5)

function percitence(num) {
    
    if (num < 10) return 0;

    const digits = num.toString().split('');
    const product = digits.reduce((acc, n) => acc * +n, 1);
    return 1 + percitence(product);
}

console.log(percitence(539));
console.log(percitence(999));
console.log(percitence(7169));