class Wallet {
    #amount
    #userName 

    constructor() {
        this.#amount = 100.99 * 100
    }

    get amount () {
        return this.#amount / 100
    }

    set username(newUserName) {
        this.#userName = newUserName
    }

    get username() {
        return this.#userName
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username =  'Wender'
myWallet.username +=  ' Rodolfo'
console.log(myWallet.username)