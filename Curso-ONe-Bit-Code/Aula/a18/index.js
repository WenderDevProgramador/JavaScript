//forEach() é uma estrutura de loop interada para varrer arrays.


const users = [3,43,5,6,8,9,6,25,4,3,2,1,0,7,8,9,10]

users.forEach((valoratual, indice) => {
    if (valoratual < 6) {
    console.log(`O valor na posição ${indice} é  ${valoratual} é menor que 6`)}}) 


    const carros = [
        {
            marca: 'Toyota',
            modelo: 'Corolla',
            ano: 2020,
            cor: 'Prata',
            preco: 80000
        },
        {
            marca: 'Honda',
            modelo: 'Civic',
            ano: 2019,
            cor: 'Preto',
            preco: 90000
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            ano: 2021,
            cor: 'Vermelho',
            preco: 250000
        },
        {
            marca: 'Chevrolet',
            modelo: 'Onix',
            ano: 2022,
            cor: 'Branco',
            preco: 70000
        },
        {
            marca: 'Volkswagen',
            modelo: 'Golf',
            ano: 2018,
            cor: 'Azul',
            preco: 85000
        }
    ];
    

carros.forEach((produto,numero) => {
    if (produto.preco < 100000) {
    console.log(`O carro de nº${numero} é ${produto.modelo} e o seu valor de mercado é ${produto.preco}`)
}})
    
