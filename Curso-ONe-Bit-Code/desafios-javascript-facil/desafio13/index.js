/*Escreva uma função que recebe um número e verifica se ele é um código de identificação válido segundo as regras de criação do dígito verificador.A criação do dígito verificador funciona da seguinte forma:

1. Some os dígitos das posições pares( ímpares se estiver contando apartir de 1).

2. Multiplique esse resultado por 3.

3. Some os dígitos das posições impares (pares se estiver começando de 1) do número original então some esse resultado ao resultado do passo anterior.

4. Encontre o resto da divisão do passo anterior por 10.

5. Se o resto da divisão for 0, 0 dígito verificador é 0, do contrário o dígito verificador é 10 - resto.

*/


function codValido (arry) {
    const valor = arry
    let stap1 = 0
    let stap2 = 0

    for(let i = 0; i < valor.length; i++) {
        if(valor[i] % 2 === 0){
            stap1 += valor[i]
        } else {
            stap2 += valor[i]
        }
    }

    stap1 = stap1 * 3
    let result = stap2 + stap1

    const final = result % 10 !== 0? 10 - result % 10 : 0

    return final === 0 ? true : false
    
}


console.log(codValido([547020743789]))
console.log(codValido([301354030348]))
console.log(codValido([301354030349]))
console.log(codValido([123456789872]))


//Rever esse código sem sentido nenhum.
