//Escreva uma função que recebe uma string contendo um nome completo, e retorna uma string com todos os nomes, exerto o último, abreviados e o último nome em letras maiusculas antes das abreviações separados por vírgula.

//Entrada: ('Isaac Larrubia Ferreira Pontes')
//Saída: 'PONTES, I, L. F.


function nome(str) {
    const lista = str.split(' ')
    let initials = ''

    for (let i = 0; i < lista.length - 1; i++) {
        initials += `${lista[i][0].toUpperCase()}. `;
        
    }

    return `${lista[lista.length - 1].toUpperCase()}, ${initials}`
} 

console.log(nome('Isaac Larrubia Ferreira Pontes'))
console.log(nome('Wender Rodolfo De Queiroz'))