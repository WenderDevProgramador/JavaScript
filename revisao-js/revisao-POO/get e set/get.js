class Wallet {
    #amount 

    constructor() {
        this.#amount = 100.99 * 100
    }

    get amount () {
        return this.#amount / 100
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)