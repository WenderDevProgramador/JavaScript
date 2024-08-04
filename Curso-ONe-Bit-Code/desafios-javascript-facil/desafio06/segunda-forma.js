
function fraseInvestida(str) {
    return str
        .split(' ')
        .map(palavra => palavra.split('').reverse().join(''))
        .join(' ')
        .toLowerCase();
}

console.log(fraseInvestida("Lorem ipsum dolore sec avanti")); 

