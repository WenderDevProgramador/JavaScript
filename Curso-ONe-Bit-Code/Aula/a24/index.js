function register(element) {
    const usuario = element.children.username.value
    const senha = element.children.password.value
    const confirmaSenha = element.children.passwordConfirmation.value

    if (senha === confirmaSenha) {
        alert(`Usuario ${usuario} cadastrado.`)
        usuario = element.children.username.value = ''
        senha = element.children.password.value = ''
        confirmaSenha = element.children.passwordConfirmation.value = ''

    } else {
        alert('Os dados de senha não conferem.')
    }


}