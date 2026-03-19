const Address = require("./Address");

const addr = new Address("Rua das Flores", "São Paulo", "Jardim América", "SP", 123);


const Person = require("./Person");

const person = new Person("João", addr);
console.log(person.name);
console.log(person.address.fullAdress());

