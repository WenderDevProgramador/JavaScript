function valid() {

}
function validadorEntrada(num) {
    const valores = num.toString().split('').map(Number)
    let par = 0
    let impar = 0

    for(let i = 0; i < valores.length; i++) {
        if(valores[i] % 2 === 0) {
            par += valores[i]
        } else {
            impar += valores[i]
        }
    }

    let step1 = par * 3
    let step2 = impar + step1

    return step2 % 10 !==0 ? 10 - step2 % 10 : 0
}


console.log(validadorEntrada(547020743789))
console.log(valid(301354030348))
console.log(valid(301354030349))
console.log(valid(123456789872))