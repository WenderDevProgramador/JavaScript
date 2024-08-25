

//Função anonima fica dentro de uma constante.
// const exp = function (num1,num2) {};

//arrow funcion é uma fusão de function anonima com nomidada.

//const exp = (num1,num2) => {}

//every() retorna se a entrada é igual a todos elementos do array

const personagensDBZ = [
    {
        nome: "Goku",
        tecnicas: ["Kamehameha", "Genki Dama", "Kaioken"],
        poderLuta: 1500000000,
        raca: "Saiyajin",
        sexo: "Masculino",
        idade: 37,
        poderesAtaque: ["Kamehameha", "Genki Dama"]
    },
    {
        nome: "Vegeta",
        tecnicas: ["Galick Gun", "Big Bang Attack", "Final Flash"],
        poderLuta: 1400000000,
        raca: "Saiyajin",
        sexo: "Masculino",
        idade: 38,
        poderesAtaque: ["Final Flash", "Big Bang Attack"]
    },
    {
        nome: "Gohan",
        tecnicas: ["Masenko", "Kamehameha", "Explosão de Ki"],
        poderLuta: 1200000000,
        raca: "Mestiço (Saiyajin/Terráqueo)",
        sexo: "Masculino",
        idade: 23,
        poderesAtaque: ["Masenko", "Kamehameha"]
    },
    {
        nome: "Trunks",
        tecnicas: ["Quebra Galáxia", "Canhão Ardente", "Super Saiyajin"],
        poderLuta: 1100000000,
        raca: "Mestiço (Saiyajin/Terráqueo)",
        sexo: "Masculino",
        idade: 17,
        poderesAtaque: ["Quebra Galáxia", "Canhão Ardente"]
    },
    {
        nome: "Piccolo",
        tecnicas: ["Makankosappo", "Explosão Demoníaca", "Regeneração"],
        poderLuta: 800000000,
        raca: "Namekuseijin",
        sexo: "Masculino",
        idade: 30,
        poderesAtaque: ["Makankosappo", "Explosão Demoníaca"]
    },
    {
        nome: "Frieza",
        tecnicas: ["Supernova", "Corte Mortal", "Explosão de Ki"],
        poderLuta: 1200000000,
        raca: "Alienígena Mutante",
        sexo: "Masculino",
        idade: 70,
        poderesAtaque: ["Supernova", "Corte Mortal"]
    },
    {
        nome: "Cell",
        tecnicas: ["Kamehameha", "Absorção", "Regeneração"],
        poderLuta: 1300000000,
        raca: "Bio-Android",
        sexo: "Masculino",
        idade: 5,
        poderesAtaque: ["Kamehameha", "Absorção"]
    },
    {
        nome: "Majin Buu",
        tecnicas: ["Explosão Planetária", "Regeneração", "Transformação"],
        poderLuta: 1500000000,
        raca: "Majin",
        sexo: "Masculino",
        idade: "Indeterminado",
        poderesAtaque: ["Explosão Planetária", "Transformação"]
    },
    {
        nome: "Krillin",
        tecnicas: ["Kienzan", "Kamehameha", "Golpe Solar"],
        poderLuta: 500000,
        raca: "Terráqueo",
        sexo: "Masculino",
        idade: 34,
        poderesAtaque: ["Kienzan", "Kamehameha"]
    },
    {
        nome: "Yamcha",
        tecnicas: ["Rogafufuken", "Kamehameha", "Golpe do Lobo"],
        poderLuta: 300000,
        raca: "Terráqueo",
        sexo: "Masculino",
        idade: 36,
        poderesAtaque: ["Golpe do Lobo", "Kamehameha"]
    },
    {
        nome: "Tien Shinhan",
        tecnicas: ["Kikoho", "Shin Kikoho", "Golpe de Quatro Braços"],
        poderLuta: 400000,
        raca: "Terráqueo",
        sexo: "Masculino",
        idade: 36,
        poderesAtaque: ["Kikoho", "Shin Kikoho"]
    },
    {
        nome: "Chiaotzu",
        tecnicas: ["Telecinese", "Autodestruição", "Dodompa"],
        poderLuta: 150000,
        raca: "Terráqueo",
        sexo: "Masculino",
        idade: 34,
        poderesAtaque: ["Telecinese", "Dodompa"]
    },
    {
        nome: "Goten",
        tecnicas: ["Kamehameha", "Super Saiyajin", "Explosão de Ki"],
        poderLuta: 900000000,
        raca: "Mestiço (Saiyajin/Terráqueo)",
        sexo: "Masculino",
        idade: 7,
        poderesAtaque: ["Kamehameha", "Explosão de Ki"]
    },
    {
        nome: "Bulma",
        tecnicas: ["Inteligência", "Invenções", "Tecnologia"],
        poderLuta: 0,
        raca: "Terráquea",
        sexo: "Feminino",
        idade: 38,
        poderesAtaque: ["Inteligência", "Invenções"]
    },
    {
        nome: "Videl",
        tecnicas: ["Voo", "Explosão de Ki", "Artes Marciais"],
        poderLuta: 200000,
        raca: "Terráquea",
        sexo: "Feminino",
        idade: 20,
        poderesAtaque: ["Voo", "Artes Marciais"]
    },
    {
        nome: "Android 18",
        tecnicas: ["Explosão de Ki", "Força Sobrenatural", "Resistência"],
        poderLuta: 1000000000,
        raca: "Android",
        sexo: "Feminino",
        idade: "Desconhecida",
        poderesAtaque: ["Explosão de Ki", "Força Sobrenatural"]
    },
    {
        nome: "Android 17",
        tecnicas: ["Explosão de Ki", "Força Sobrenatural", "Barreira de Energia"],
        poderLuta: 1000000000,
        raca: "Android",
        sexo: "Masculino",
        idade: "Desconhecida",
        poderesAtaque: ["Explosão de Ki", "Barreira de Energia"]
    },
    {
        nome: "Bardock",
        tecnicas: ["Espírito Saiyajin", "Explosão de Ki", "Lâmina de Ki"],
        poderLuta: 1000000,
        raca: "Saiyajin",
        sexo: "Masculino",
        idade: 40,
        poderesAtaque: ["Espírito Saiyajin", "Lâmina de Ki"]
    },
    {
        nome: "Raditz",
        tecnicas: ["Explosão de Ki", "Voo", "Ataque Duplo"],
        poderLuta: 1500,
        raca: "Saiyajin",
        sexo: "Masculino",
        idade: 35,
        poderesAtaque: ["Explosão de Ki", "Ataque Duplo"]
    },
    {
        nome: "Nappa",
        tecnicas: ["Explosão de Ki", "Voo", "Ataque Gigante"],
        poderLuta: 4000,
        raca: "Saiyajin",
        sexo: "Masculino",
        idade: 50,
        poderesAtaque: ["Explosão de Ki", "Ataque Gigante"]
    }
];


//map() Transforma todos os elementos do array e cria um novo array com os novos elementos. Parecido como o forEach porém não altera o array inicial tras um array novo.

function informação() {
    return personagensDBZ.map((personagem) => `${personagem.nome} - ${personagem.tecnicas}`)
}
console.log(informação())

//reduce() faz uma redução dos elementos dentro do array a apenas um elemento e retorna um novo array com os dados reduzidos.

function especiesNome (){
    return personagensDBZ.reduce((antigo,novo) => {
        return [...antigo, ` ${novo.nome} - ${novo.raca}`]
    },['Personagens de dragonball Z'])
}

console.log(especiesNome())

// some() retorna se o elemento  tem dentro do array e retorna true ou false

function temPerso(entrada) {
    if (personagensDBZ.some((raça) => raça.raca === entrada) === true) {
        return personagensDBZ.filter((personagem) => personagem.raca === entrada)
    } else {
        return 'Não temos a raça em nosso array'
    }
}
console.log(temPerso('Terráqueo'))

function temPers(entrada) {
    return personagensDBZ.some((raça) => raça.raca === entrada)
}
console.log(temPers('Terráqueo'))

//sort() ordena os elementos do array

const ordenar = personagensDBZ.sort((a, b) => a.nome.localeCompare(b.nome))

console.log(ordenar)


//find() procura dentro do array se a entrada existe no array e retorna a entrada como elemento se tiver dentro do array.

function buscarElemento(elemento) {
    return personagensDBZ.find((eleme) => eleme.nome === elemento)
}

console.log(buscarElemento('Gohan'))



//filter() faz a mesma coisa que o find porém tras mais de um elemento casa tenha dentro do array
function filtrarSexo(sexo) {
    if (sexo === 'Masculino' || sexo === 'Feminino') {
        return personagensDBZ.filter((personagem) => personagem.sexo === sexo).length;
    } else {
        return 'Sexo invalido! Escreva "Masculino ou Feminino"'
    }
}

console.log(filtrarSexo('Feminino'))


//foreach() ele pega cada elento de um array e faz alguma coisa que ordenamos. E retorna um array com novos valores.

personagensDBZ.forEach((personagem) => {

    return console.log(`DBZ - ${personagem.nome} - Poder de luta: ${personagem.poderLuta}`)
})

