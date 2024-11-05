/*
Escreva uma função que recebe três argumentos, uma frase, uma palavra e um array de índices. A função deve retornar a frase com a palavra inserida em cada uma das posições especificadas pelo array de índices.

- A função não deve funcionar em índices que não estejam no alcance da frase.

- A função deve retornar a mesma frase caso o array de índices esteja vazio.

*Entrada : ('capaz utilizar as cápsulas emergência','de',[6,27])
*Saída: 'capaz de utilizar as cápsulas de emergência'
*/

const ordenar = (frase, palavra, array) => {
    const fraseSepara = frase.split('');
    let inserir = 0

    for (let i = 0; i <= frase.length; i++) {
        if (array.includes(i)) {
            fraseSepara.splice(i + inserir, 0, palavra +' ');
            inserir++
        }
    }

    return fraseSepara.join('');
}

console.log(ordenar('capaz utilizar as cápsulas emergência', 'de', [6, 27]));
