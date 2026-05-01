const mediaAritimetica = (...numeros) => {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
}

console.log(mediaAritimetica(10,9,6,8,9,1,5,7))
console.log(mediaAritimetica(10,0))

