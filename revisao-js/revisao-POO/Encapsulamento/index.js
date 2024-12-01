class Account {
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
        
        
    }

    getBalance(email, password) {
        if (this.#authenticate(email,password)) {
            return this.#password
        } else {
            return 'Dados incorretos!'
        }
    }

    #authenticate (email, password) {
        return email === this.email && password === this.#password
    }
}

const user =  {
    email: 'ze@email.com',
    password: '123456'
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance('ze@email.com','123456'))