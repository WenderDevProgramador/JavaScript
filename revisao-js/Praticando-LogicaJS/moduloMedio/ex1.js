//Escreva uma função que recebe uma string de algarismos romanos e seja capaz de traduzir seu conteúdo retornando o inteiro decimal correspondente.

//Os algarismos romanos são: 
// - I: 1 
// - V: 5 
// - X: 10 
// - L: 50 
// - C: 100 
// - D: 500 
// - M: 1000

//Testes : ('XLVII')
// Saída : 47

function romano(str) {
    const mai = str.toUpperCase().split('')
    const tab = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }


    const todosValidos = mai.every(letra => tab.hasOwnProperty(letra))
    if (!todosValidos) {
        return 'Você deve digitar um algarismo romano válido'
    }

    let total = 0

    for (let i = 0; i < mai.length; i++) {
        const atual = tab[mai[i]]
        const prox = tab[mai[i + 1]]

        // Se o valor atual for menor que o próximo, subtrai
        if (prox > atual) {
            total -= atual
        } else {
            total += atual
        }
    }

    return total
}

// Teste
console.log(romano('XLVII')) // Saída esperada: 47
