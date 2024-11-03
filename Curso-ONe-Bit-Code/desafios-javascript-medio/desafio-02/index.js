/*
Escreva uma função que recebe uma string de algorismos romanos e seja capaz de traduzir seu conteúdo retornando o inteiro decimal correspondente.

Os algorismos romanos são :
-I: 1
-V: 5
-X: 10
-L: 50
-C: 100
-D: 500
-M: 1000


Testes:

Entrada : ('XLVII') Saida : 47
Entrada : ('CDXXXVIII') Saida : 438
*/


const traductor = (str) => {
    let nroman = str.toString().toUpperCase().split('')
    const valueCorres = nroman.map((valor) => {
        switch (valor) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0
        }
    })

    const result = valueCorres.reduceRight((accum, atual, index, array) => { 
        if ( atual < array[index + 1]) { 
            return accum - atual;
        } else { return accum + atual; } }, 0); 
        return result;
}

console.log(traductor('xlvii'))
console.log(traductor('CDXXXVIII'))