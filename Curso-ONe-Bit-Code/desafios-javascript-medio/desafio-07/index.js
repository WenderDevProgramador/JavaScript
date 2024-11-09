/*
Escreva uma função que recebe um array de opções e retorne um array bidimensional de todas as senhas possíveis ultilizando todos os elementos passados. Faça isso ultilizando recursão.

Entrada : (['x','s','-','#'])

Entrada: ["1","2","3"]
Saida: [['1','2','3'], ['2','1','3'],['2','3','1'],['1','3','2'],['3','1','2'],['3','2','1']]
*/


function possiblesPasswords(arr) {
    if (arr.length === 0) {
        return [[]];
    }

    const removeChar = arr[0];
    const partialChars = arr.slice(1);

    const partialPossibilities = possiblesPasswords(partialChars);

    const allPossibilities = [];

    partialPossibilities.forEach(partialPossibility => {
        for (let i = 0; i <= partialPossibility.length; i++) { // Incluímos `<=` para adicionar o caractere ao final também
            const completePossibility = [
                ...partialPossibility.slice(0, i),
                removeChar,
                ...partialPossibility.slice(i)
            ];
            allPossibilities.push(completePossibility);
        }
    });

    return allPossibilities;
}

console.log(possiblesPasswords(['x', 's', '-', '#'])); // Exemplo de caracteres
console.log(possiblesPasswords(["1", "2", "3"])); // Exemplo numérico
console.log(possiblesPasswords([])); // Exemplo de entrada vazia
