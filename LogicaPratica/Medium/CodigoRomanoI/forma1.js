// Escreve uma função que recebe uma string de algarismos romanos e seja capaz de traduzir seu conteúdo retornando o inteiro decimal correspondente.
// Os algarismos romanos são:
// I: 1
// V: 5
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000
// Por exemplo, a string "XXI" deve retornar o número 21.

// Entrada: xlvii saida: 47

const romanToInt = (s) => {
    const romano = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }

    const mai = s.toUpperCase();
    let total = 0;

    for (let i = 0; i < mai.length; i++) {
        const atual = romano[mai[i]];
        const proximo = romano[mai[i + 1]];

        if (atual < proximo) {
            'Subtração'
            total -= atual;
        } else {
            total += atual;
        }
    }
    return total;
}


console.log(romanToInt('xlvii'));
console.log(romanToInt('iv'));
console.log(romanToInt('xxi'));