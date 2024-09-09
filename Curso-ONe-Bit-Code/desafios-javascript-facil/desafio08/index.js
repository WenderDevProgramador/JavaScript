
function alterarNome(nome) {
    let separa = nome.split(' ')
    let iniciais = ''
    for(let i= 0; i < separa.length - 1; i++) {
        iniciais += ` ${separa[i][0].toUpperCase()}.`
    }

    return `${separa[separa.length - 1].toUpperCase()},${iniciais}`
}

console.log(alterarNome('Isaac Larrubia Ferreira Pontes'))
