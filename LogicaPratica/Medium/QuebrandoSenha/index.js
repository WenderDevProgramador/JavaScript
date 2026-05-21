// Escreva uma função que recebe um array de opções e retorne um array bidimensional de todas as senhas possíveis ultilizando todos os elementos passados. Faça isso usando recursão.

// Entrada: [["X", "s", "-", "#"]] => Saída: [["X", "s", "-", "#"], ["X", "s", "#", "-"], ["X", "-", "s", "#"], ["X", "-", "#", "s"], ["X", "#", "s", "-"], ["X", "#", "-", "s"], ["s", "X", "-", "#"], ["s", "X", "#", "-"], ["s", "-", "X", "#"], ["s", "-", "#", "X"], ["s", "#", "X", "-"], ["s", "#", "-", "X"], ["-", "X", "s", "#"], ["-", "X", "#", "s"], ["-", "s", "X", "#"], ["-", "s", "#", "X"], ["-", "#", "X", "s"], ["-", "#", "s", "X"], ["#", "X", "s", "-"], ["#", "X", "-", "s"], ["#", "s", "X", "-"], ["#", "s", "-", "X"], ["#", "-", "X", "s"], ["#", "-", "s", "X"]]

const quebraSenha = (arr) => {
    if (arr.length === 0) return [[]];

    const removedChar= arr[0];
    const partialChars = arr.slice(1)

    const partialPossibilities = quebraSenha(partialChars);
    const allPossibilities = [];

    partialPossibilities.forEach(possibility => {
        for (let i = 0; i <= possibility.length; i++) {
            const completePosibility = [...possibility.slice(0, i), removedChar, ...possibility.slice(i)];
            allPossibilities.push(completePosibility);
        }
    })
    return allPossibilities;
    
}


console.log(quebraSenha(["X", "s", "-", "#"]))
console.log(quebraSenha(["1", "2", "3"]))
console.log(quebraSenha([]))
console.log(quebraSenha(["a", "7", "c", "4", "@"]))

