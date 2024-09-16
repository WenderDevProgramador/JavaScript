
function alteraOrdem(frase) {
    const inverte = frase.split(' ').map(palavra => palavra.split('').reverse().join('')); 
    return inverte.join(' ').toLowerCase();   
}

console.log(alteraOrdem('Lorem ipsum dolore sec avanti'));
