// Desafio: Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem alterá-lo. Não ultilize metodos globais do JS como reverse, map, forEach, etc.

// Entrada: [0,9,6,8,9,1,5,7] - Saida: [7,5,1,9,8,6,9,0]

const reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(reverseArray([0,9,6,8,9,1,5,7])); // [7,5,1,9,8,6,9,0]
console.log(reverseArray(["Flamengo", "Vasco", "Botafogo", "Fluminense"])); // ["Fluminense", "Botafogo", "Vasco", "Flamengo"]