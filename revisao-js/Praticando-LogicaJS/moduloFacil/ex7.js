//Escreva uma função que recebe um número e verifica se ele é um código de identificação válido segundo as regras de criação do digito verificador. A criação do digito funcioana da seguinte forma: 

//1- Some os digitos das posições pares (ìmpares se estiver contando a partir de 1)
//2- Multiplique esse resultado por 3
// 3- Some os digitos das posições ímpares (pares se estiver contando a partir de 1) do número original e então some esse resultado ao do passo anterior.
//4- Encontre o resto da divisão do resultado do passo anterior por 10
//5 - Se o resto da divisão for 0, o dígito verificador é 0, do contrário o digito verificador é 10 - resto

//Entrada : 547020743789
//Saída: true

//Entrada : 123456789872
//Saída: false

function descodificador(num) {
    const arr = num.toString().split('');
    const digitoInformado = Number(arr.pop()); // remove e guarda o dígito verificador

    const par = arr.reduce((acumm, num, index) => {
        if (index % 2 === 0) acumm += +num;
        return acumm;
    }, 0);

    const resultPar = par * 3;

    const resultImp = arr.reduce((acumm, num, index) => {
        if (index % 2 !== 0) acumm += +num;
        return acumm;
    }, 0);

    const resultSomaAmbos = resultPar + resultImp;
    const restoDiv = resultSomaAmbos % 10;
    const digitoCalculado = restoDiv === 0 ? 0 : 10 - restoDiv;

    return digitoCalculado === digitoInformado;
}

console.log(descodificador(547020743789)); // true ✅
console.log(descodificador(123456789872)); // false ✅


