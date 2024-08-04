
function letraBig (str) {
    let lowCase = str.toLowerCase();
    let strArray = lowCase.split('');
    let posição = strArray.sort();
    return posição[posição.length - 1];
}

maior = 'Lorem ipsum dolore sec avanti'

console.log(`A maior letra de acordo com sua posição é // ${letraBig(maior)} //`)