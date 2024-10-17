const Address = require("./Address.js")
const Person = require("./Person.js")

const addr = new Address('7 de Setembro',99,'Centro','São Francisco','RJ')
const john = new Person('john Doe',addr)

console.log(john)
console.log(john.address.fullAddress())