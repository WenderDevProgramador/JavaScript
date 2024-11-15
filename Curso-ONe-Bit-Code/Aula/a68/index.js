function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Esperou ${ms}ms`), ms);
    });
}

function calcularQuadrado(num) {
    return new Promise((resolve) => {
        resolve(num * num);
    });
}

function verificarParidade(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`${num} é par`);
        } else {
            reject(`${num} é ímpar`);
        }
    });
}

function buscarItem(id) {
    return new Promise((resolve, reject) => {
        const itens = [
            { id: 1, nome: "Teclado" },
            { id: 2, nome: "Mouse" },
            { id: 3, nome: "Monitor" },
        ];

        const item = itens.find((i) => i.id === id);

        setTimeout(() => {
            if (item) {
                resolve(item);
            } else {
                reject("Item não encontrado");
            }
        }, 1000);
    });
}

function somaComAtraso(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 500);
    });
}


const quadradoResult = calcularQuadrado(10)
const stop = esperar(5000)
const soma = somaComAtraso(quadradoResult,55)
const pariedadeNum = verificarParidade(soma)
const arr =  [quadradoResult,stop, soma, pariedadeNum]


Promise.all(arr)
    .then((results) => {
        console.log("Resultados do Promise.all:", results);
    })
    .catch((err) => {
        console.error("Erro no Promise.all:", err);
    });