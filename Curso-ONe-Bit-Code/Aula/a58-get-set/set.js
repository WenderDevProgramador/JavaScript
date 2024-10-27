
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    // Setter para atualizar o nome da pessoa
    set name(newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Nome inválido!");
        }
    }

    // Setter para atualizar a idade da pessoa
    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.log("Idade inválida!");
        }
    }
}

// Criando uma instância da classe
const person2 = new Person("João", 30);
console.log(person2.name); // "João"
person2.name = "Carlos";   // atualiza o nome para "Carlos"
console.log(person2.name);  // "Carlos"
person2.age = -5;           // "Idade inválida!" - valor não é atualizado
