class Account {
    #password
    #balance=0

    constructor(user) {
        this.email = user.email;
        this.#password = user.password;
        
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance;
        }
        return null;
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password;
    }

}


const user = {
    email: 'wender@email.com',
    password: '123456'
}

const myAccont = new Account(user);

console.log(myAccont);



console.log(myAccont.getBalance('wender@email.com', '123456')); 