class Account {
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
        
    }

    getBalance(email, password) {
        
    }
}

const user =  {
    email: 'ze@email.com',
    password: '123456'
}

const myAccount = new Account(user)

console.log(myAccount)