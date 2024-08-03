



function calcAlgo(num) {
    let numero = num;
    let algarismos = numero.toString()
    
    let inteiro = '';

    for(let i = 0; i < algarismos.length; i++) {
        inteiro += Number(algarismos[i]) ** 2;
    };
    
    inteiro = Number(inteiro)

    return inteiro;
}

console.log(calcAlgo(3514));

