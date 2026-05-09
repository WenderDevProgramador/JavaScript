// Escreva uma função que recebe um número e verifica se ele é um código de identificação válido. A criação do digito verificador funciona da seguinte forma:
// Some os dígitos das posições pares(ímpares se estiver contando a partir de 1)
// Multiplique esse resultado por 3
// Some os dígitos das posições ímpares(pares se estiver contando a partir de 1)
// Some os resultados dos passos 2 e 3
// Encontre o resto da divisão do resultado do passo anterior por 10
// Se o resultado for 0, o dígito verificador é 0. Caso o digito verificador é 10 - resto

// Entrada: (547020743789) => saida: true
// Entrada: (301354030348) => saida: true
// Entrada: (301354030349) => saida: false


const digitVerify = (num) => {
    const str = num.toString().split('')
    const step1 = str.reduce((acc, curr, index) => index === 0 || index % 2 === 0 ? acc + Number(curr) : acc, 0);
    const step2 = step1 * 3;
    const step3 = str.reduce((acc, curr, index) => index % 2 !== 0 ? acc + Number(curr) : acc, 0);
    const step4 = step2 + step3;
    const step5 = step4 % 10;
    const digitVerifier = step5 === 0 ? 0 : 10 - step5;
    return digitVerifier === Number(str[str.length - 1]);
    

}

console.log(digitVerify(547020743789)) // true
console.log(digitVerify(301354030348)) // true
console.log(digitVerify(301354030349)) // false
