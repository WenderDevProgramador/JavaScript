// Escreva uma função que recebe um número e verifica se ele é um código de identificação válido. A criação do digito verificador funciona da seguinte forma:
// Some os dígitos das posições pares(ímpares se estiver contando a partir de 1)
// Multiplique esse resultado por 3
// Some os dígitos das posições ímpares(pares se estiver contando a partir de 1)
// Some os resultados dos passos 2 e 3
// Encontre o resto da divisão do resultado do passo anterior por 10
// Se o resultado for 0, o dígito verificador é 0. Caso o digito verificador é 10 - resto

// Entrada: (547020743789) => saida: true
// Entrada: (301354030348) => saida: true
// Entrada: (301354030349) => saida: false

