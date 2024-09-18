
function validadorEntrada(num) {
    const valor = num.toString().split('').map(Number)
    const valores = valor.slice(0,-1)
    const par = valores.reduce((novo,antigo,pos) => pos === 0 || pos % 2 === 0? novo + antigo : novo,0)
    const impar = valores.reduce((novo,antigo,pos) => pos % 2 !== 0? novo + antigo : novo, 0)

    let step1 = par * 3
    let step2 = impar + step1

    const result =  step2 % 10 !==0 ? 10 - step2 % 10 : 0

    return result === valor[valor.length - 1]
}

console.log(validadorEntrada(547020743789))
console.log(validadorEntrada(301354030348))
console.log(validadorEntrada(301354030349))
console.log(validadorEntrada(123456789872))