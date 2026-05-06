// Escreva uma função que recebe um valor inteiro e retorne a quantidade de cada moeda para se chegar ao valor. Dever sempre priorizar as moedas de maior valor. As moedas disponíveis são: 1, 100,  10, 25 e 500 centavos.

// Entrada: (478) => Saída: { 500: 0, 100: 4, 25: 3, 10: 0, 1: 3 }

// Entrada: (384) => Saída: { 500: 0, 100: 3, 25: 3, 10: 0, 1: 4 }


const calcMoedas = (valor ) => {
    const moedas = { 
        '500': 0, 
        '100': 0, 
        '25': 0, 
        '10': 0, 
        '1': 0 
    };

    let rest = valor;

    moedas['500'] = Math.floor(rest / 500);
    // Esse metodo arredonda para baixo e pega somente o inteiro, ou seja, a quantidade de moedas de 500 centavos que cabem no valor.

    rest = rest % 500;
    // O operador % retorna o resto da divisão, ou seja, o valor que sobra depois de retirar as moedas de 500 centavos.

    moedas['100'] = Math.floor(rest / 100);
    rest = rest % 100;

    moedas['25'] = Math.floor(rest / 25);
    rest = rest % 25;

    moedas['10'] = Math.floor(rest / 10);
    rest = rest % 10;

    moedas['1'] = Math.floor(rest / 1);

    return moedas;
}

console.log(calcMoedas(478)); // Saída: { 500: 0, 100: 4, 25: 3, 10: 0, 1: 3 }
console.log(calcMoedas(384)); // Saída: { 500: 0, 100: 3, 25: 3, 10: 0, 1: 4 }