class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age; // Usamos "_" para indicar uma propriedade "privada"
    }

    // Getter para retornar o nome da pessoa
    get name() {
        return this._name;
    }

    // Getter para retornar a idade da pessoa
    get age() {
        return this._age;
    }
}

// Criando uma instância da classe
const person1 = new Person("Ana", 28);
console.log(person1.name); // "Ana" - acessa usando o método get name
console.log(person1.age);  // 28 - acessa usando o método get age

