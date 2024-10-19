class Account {
    #password
    #balance = 0
    constructor (user) {
        this.email = user.email
        this.#password = user.password
        
    }
    getBalance(email, password)  {
        if (this.#authenticate(email,password)) {
            return this.#balance
        } else {
            return null
        }
    }
    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "wendermengo@email.br",
    password: 'ZéNaldo321'
}

const myAccount = new Account(user)

console.log(myAccount)

myAccount.password = '78685891'
myAccount.balance = 5689

console.log(myAccount.getBalance('wendermengo@email.br','ZéNaldo321'))