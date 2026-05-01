// Escreva uma função que receba um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem últilizar nenhuma estrutura de repetição (for, while, do while).

// Entrada: (4) => Saída: "chunk-chunk-chunk-chunk"

// Entrada: (2) => Saída: "chunk-chunk"

const chunk = (num) => {
    if(num === 0) return "";
    if(num === 1) return "chunk";
    return "chunk-" + chunk(num - 1);
}

console.log(chunk(4)); // "chunk-chunk-chunk-chunk"
console.log(chunk(2)); // "chunk-chunk"
console.log(chunk(8));
console.log(chunk(0));
console.log(chunk(11));