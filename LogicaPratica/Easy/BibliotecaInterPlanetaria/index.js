// Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o último, abreviados e o último nome em letras maiusculas antes das abreviações separado po vírgula.

// Entrada:"Isaac Larrubia Ferreira Pontes" => Saída: "PONTES,I. L. F. "

const nomeDeAcesso = (nomeCompleto) => {
    const result = nomeCompleto.split(" ")
    const ultimoNome = result.pop().toUpperCase()
    const abreviacao = result.map(nome => nome[0].toUpperCase() + ".").join(" ")
    return `${ultimoNome}, ${abreviacao} `
}

console.log(nomeDeAcesso("Isaac Larrubia Ferreira Pontes"))
