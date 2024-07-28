
function calcular(a,b,operação) {
    console.log('Realizando uma operação.')
    const resultado = operação(a,b)
    return resultado
}

function somar(x,y) {
    console.log('Realizando uma soma.')
    return x + y
}

console.log(calcular(3,2,somar))
console.log(calcular(16,4,function (x,y) {
    console.log('Realizando operação')
    return x - y
}))


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]


const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

function higherOrderFunction(func) {
    return function(value) {
        return func(value);
    };
}

function greet(name) {
    return `Hello, ${name}!`;
}

const greetFunction = higherOrderFunction(greet);
console.log(greetFunction('Alice')); // Hello, Alice!



const result = numbers.map(num => num * 2);
console.log(result);







