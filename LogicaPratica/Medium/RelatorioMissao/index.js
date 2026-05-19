// Escreva uma função que recebe 3 argumentos, uma frase, uma palavra e um array de índices. A função deve retornar a frase com a palavra inserida em cada uma das posições indicadas no array de índices.
// A função não deve funcionar em índices que não estejam ao alcance da frase.
// A funçãp deve retorna a mesma frase caso o array de índices esteja vazio.

// Entrada: "capaz ultilizar as cápsulas emergência", "de",[6,27]  => Saída: "capaz de ultilizar as cápsulas de emergência"

function decipher (str, toInsert, indexes) {
    const charsArray = str.split('');
    let offset = 0;  

    for (let i = 0; i <= str.length; i++) {
        if(indexes.includes(i)) {
            charsArray.splice(i + offset, 0, toInsert + ' ');
            offset += toInsert.length ;
        }
}
    return charsArray.join('');
}

console.log(decipher("capaz ultilizar as cápsulas emergência", "de", [6, 27]));
console.log(decipher("Hello"," World", [6]));
console.log(decipher("Minha avó maluca"," tá", [10]));
console.log(decipher("Será que o kevim é ? Dizem que ele é mas será se é mesmo?","gay", [19,35,47]));