// Escreva uma função que recebe um número e retorna a sua persistência multiplicativa, que é o número de vezes que você deve multiplicar os dígitos de um número até chegar a um único dígito.

// Entrada: (539) Saída: (3) Explicação: 5*3*9 = 135, 1*3*5 = 15, 1*5 = 5. O número de vezes que multiplicamos os dígitos é 3, então a persistência multiplicativa de 539 é 3.

// Entrada: (999) Saída: (4)

// Entrada: (7169) Saída: (5)

function percistence(num) {
    let count = 0;
    while (num > 9) {
        num = num.toString().split('').reduce((acc, n ) => +acc * +n, 1);
        count++;
    }
    return count;
}

console.log(percistence(539));
console.log(percistence(999));
console.log(percistence(7169));