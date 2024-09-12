/*Contexto
A nave espacial está passando por um planeta que usa moedas de crédito como dinheiro
Existem moedas de valores: 1, 5, 10, 25, 100 e 500
Para conseguir um favor de um comerciante local, o personagem irá ajudá-lo a automatizar a contagem das moedas
Desafio
Escrever uma função que:
Recebe um valor inteiro como parâmetro
Retorna a quantidade de cada moeda necessária para atingir esse valor
Prioriza as moedas de maior valor primeiro
Regras
Sempre utilizar primeiro as moedas de maior valor (500, depois 100, etc)
Retornar um objeto com as quantidades de cada moeda
Exemplo
Valor de entrada: 478
Retorno esperado:
Moedas de 1: 3
Moedas de 5: 0
Moedas de 10: 0
Moedas de 25: 3
Moedas de 100: 4
Considerações finais
Outros valores de teste são fornecidos para servir de guia
Foco em priorizar as moedas maiores primeiro
Esse é um resumo de alto nível do desafio de programação apresentado no vídeo, destacando o contexto, o problema, as regras e um exemplo. Foi formatado com Markdown para facilitar a visualização.*/

function calcTroco(n) {
    // Valores das moedas: 1, 5, 10, 25, 100 e 500
    const moedas = [500, 100, 25, 10, 5, 1];
    const resultado = [];

    // Percorre cada valor de moeda
    for (let i = 0; i < moedas.length; i++) {
        const moeda = moedas[i];
        // Calcula quantas moedas dessa denominação são necessárias
        const quantidade = Math.floor(n / moeda);
        if (quantidade > 0) {
            resultado.push(`Total de ${quantidade} moedas de ${moeda}`);
        }
        // Atualiza o valor de n
        n %= moeda;
    }

    return resultado.join('\n');
}

console.log(calcTroco(1553));
