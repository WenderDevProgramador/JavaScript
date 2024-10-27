class Counter {
    // Atributo estático
    static instanceCount = 0;

    constructor() {
        // Incrementa o contador de instâncias sempre que um novo objeto é criado
        Counter.instanceCount++;
    }

    // Método estático para acessar o número total de instâncias
    static getInstanceCount() {
        return Counter.instanceCount;
    }
}

// Criando instâncias
const obj1 = new Counter();
const obj2 = new Counter();
const obj3 = new Counter();

// Acessando o método estático para contar instâncias
console.log(Counter.getInstanceCount()); // 3 - três instâncias foram criadas


class Converter {
    // Método estático para converter quilômetros para milhas
    static kilometersToMiles(kilometers) {
        return kilometers * 0.621371;
    }

    // Método estático para converter milhas para quilômetros
    static milesToKilometers(miles) {
        return miles / 0.621371;
    }
}

// Usando os métodos estáticos diretamente na classe
console.log(Converter.kilometersToMiles(10)); // 6.21371
console.log(Converter.milesToKilometers(6.21371)); // 10
