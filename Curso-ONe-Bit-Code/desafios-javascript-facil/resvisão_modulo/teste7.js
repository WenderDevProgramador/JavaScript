function criarUsuario(str) {
    const fullName = str.toUpperCase().split(' ')
    let result = fullName[fullName.length - 1] + ', '
    let restoName = fullName.slice(0,-1)
    for(let i = 0; i < restoName.length;i++){
        result += ' ' + restoName[i][0] + '.'
    }

    return result.toString()
}

console.log(criarUsuario('Isaac Larrubia Ferreira pontes'))
console.log(criarUsuario('Wender Rodolfo De Queiroz'))