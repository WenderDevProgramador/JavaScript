class User {
    constructor (nome,email,password) {
        this.nome = nome
        this.email = email 
        this.password = password
    }

    login(email,senha) {
        if (this.email === email && this.password === senha) {
            console.log('Login efetuado com sucesso!')
        } else {
            console.log('Os dados não conferem. Login não efetuado!!')
        }
    }
}

module.exports = User