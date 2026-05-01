// Escreva uma função que recebe um número qualquer e retorna a media atitimetica entre eles 

// Testes:
// - Entrada :(10,9,6,8,9,1,5,7)
// - Saída: 6.875


function media(...n) {
    let valores = n
    let soma = 0;
    for( let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    return soma / valores.length;

}


console.log(media(10,9,6,8,9,1,5,7))
console.log(media(10,0))
