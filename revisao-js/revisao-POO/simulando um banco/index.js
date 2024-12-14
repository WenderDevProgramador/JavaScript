const App = require("./App")

App.createUser("wender@email.com")
App.createUser("sileide@email.com")
App.createUser("galego@email.com")

App.deposit('wender@email.com', 150)
App.transfer('wender@email.com','sileide@email.com',80)

App.changeLoanFee(10)
App.takeLoan('galego@email.com',50000,150)

console.log(App.findUser('wender@email.com'))
console.log(App.findUser('wender@email.com').account)
console.log(App.findUser('sileide@email.com'))
console.log(App.findUser('sileide@email.com').account)
console.log(App.findUser('galego@email.com'))
console.log(App.findUser('galego@email.com').account.loans[0].installments)
