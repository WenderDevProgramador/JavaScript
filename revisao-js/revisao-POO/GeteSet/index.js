
// get e set na POO. 
// get é um método que tem a função de retornar um valor, ou seja, ele é utilizado para acessar o valor de uma propriedade de um objeto.
// set é um método que tem a função de definir um valor, ou seja, ele é utilizado para atribuir um valor a uma propriedade de um objeto.

class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100;

    }

    get amount() {
        return this.#amount / 100;
    }

    getAmount() {
        return this.#amount / 100;
    }

    set username(newUserName) {
        if (typeof newUserName === 'string') {
            this.#username = newUserName;
        } else {
            console.log('Username must be a string');
        }
    }

    get username() {
        return this.#username;
    }


}

const myWallet = new Wallet();

console.log(myWallet.amount); // 100.99
console.log(myWallet.getAmount()); // 100.99
myWallet.username = 'John Doe';
console.log(myWallet.username); 

// Usando o get não precisa se atribuir o () pois ele é um método, mas o get é utilizado para acessar o valor de uma propriedade de um objeto, ou seja, ele é utilizado para acessar o valor de uma propriedade de um objeto, sem precisar se atribuir o () pois ele é um método. Já o getAmount() é um método normal, ou seja, ele é utilizado para acessar o valor de uma propriedade de um objeto, mas precisa se atribuir o () pois ele é um método normal.
