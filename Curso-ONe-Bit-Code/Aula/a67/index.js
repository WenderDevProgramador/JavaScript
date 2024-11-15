function somaComAtraso(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000); 
    });
}

function multiplicaComAtraso(num, fator) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * fator);
        }, 3000); 
    });
}

// Encadeando as Promises
somaComAtraso(5, 3)
    .then((resultadoSoma) => {
        console.log("Resultado da soma:", resultadoSoma);
        return multiplicaComAtraso(resultadoSoma, 2);
    })
    .then((resultadoMultiplicacao) => {
        console.log("Resultado da multiplicação:", resultadoMultiplicacao);
    })
    .catch((erro) => {
        console.error("Ocorreu um erro:", erro);
    });
