const App = require("./App.js")

/*Classes para um banco digital

Você deverar construir uma aplicação em javascript que simula o funcionamento de um banco, com as funcionalidades de depósito, transferência e empréstimos em uma conta bancária. Crie as seguintes classes:
- Deposit: 
- Transfer:
- Loan:
- Installment:
- Account:
- User: 
- App: 
*/ 



App.createUser('wender@email.com', 'Wender Rodolfo De Queiroz')
App.createUser('sileide@email.com', 'Sileide Freitas')
App.createUser('moreira@email.com', 'Evilyn Moreira')

App.deposit('wender@email.com', 100)
App.transfer('wender@email.com','sileide@email.com', 20)

App.changeLoanFee(10)


App.takeLoan('moreira@email.com', 2000, 24)

console.log(App.findUser('wender@email.com'))
console.log(App.findUser('wender@email.com').account)
console.log(App.findUser('sileide@email.com'))
console.log(App.findUser('sileide@email.com').account)
console.log(App.findUser('moreira@email.com'))
console.log(App.findUser('moreira@email.com').account)
console.log(App.findUser('moreira@email.com').account.loans[0].installments)