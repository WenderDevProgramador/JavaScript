// some() retorna se a entrada tem dentro do array 

//every() retorna se a entrada é igual a todos elementos do array

//find() procura dentro do array se a entrada existe no array e retorna a entrada como elemento se tiver dentro do array.

//filter() faz a mesma coisa que o find porém tras mais de um elemento casa tenha dentro do array

//sort() ordena os elementos do array

//foreach() ele pega cada elento de um array e faz alguma coisa que ordenamos. E retorna um array com novos valores.

//map() Transforma todos os elementos do array e cria um novo array com os novos elementos.

//reduce() faz uma redução dos elementos dentro do array a apenas um elemento. 


//Função anonima fica dentro de uma constante.
// const exp = function (num1,num2) {};

//arrow funcion é uma fusão de function anonima com nomidada.

//const exp = (num1,num2) => {}


    const personagensDBZ = [
        {
            nome: "Goku",
            tecnicas: ["Kamehameha", "Genki Dama", "Kaioken"],
            poderLuta: 1500000000,
            raca: "Saiyajin",
            sexo: "Masculino"
        },
        {
            nome: "Vegeta",
            tecnicas: ["Galick Gun", "Big Bang Attack", "Final Flash"],
            poderLuta: 1400000000,
            raca: "Saiyajin",
            sexo: "Masculino"
        },
        {
            nome: "Gohan",
            tecnicas: ["Masenko", "Kamehameha", "Explosão de Ki"],
            poderLuta: 1200000000,
            raca: "Mestiço (Saiyajin/Terráqueo)",
            sexo: "Masculino"
        },
        {
            nome: "Trunks",
            tecnicas: ["Quebra Galáxia", "Canhão Ardente", "Super Saiyajin"],
            poderLuta: 1100000000,
            raca: "Mestiço (Saiyajin/Terráqueo)",
            sexo: "Masculino"
        },
        {
            nome: "Piccolo",
            tecnicas: ["Makankosappo", "Explosão Demoníaca", "Regeneração"],
            poderLuta: 800000000,
            raca: "Namekuseijin",
            sexo: "Masculino"
        },
        {
            nome: "Frieza",
            tecnicas: ["Supernova", "Corte Mortal", "Explosão de Ki"],
            poderLuta: 1200000000,
            raca: "Alienígena Mutante",
            sexo: "Masculino"
        },
        {
            nome: "Cell",
            tecnicas: ["Kamehameha", "Absorção", "Regeneração"],
            poderLuta: 1300000000,
            raca: "Bio-Android",
            sexo: "Masculino"
        },
        {
            nome: "Majin Buu",
            tecnicas: ["Explosão Planetária", "Regeneração", "Transformação"],
            poderLuta: 1500000000,
            raca: "Majin",
            sexo: "Masculino"
        },
        {
            nome: "Krillin",
            tecnicas: ["Kienzan", "Kamehameha", "Golpe Solar"],
            poderLuta: 500000,
            raca: "Terráqueo",
            sexo: "Masculino"
        },
        {
            nome: "Yamcha",
            tecnicas: ["Rogafufuken", "Kamehameha", "Golpe do Lobo"],
            poderLuta: 300000,
            raca: "Terráqueo",
            sexo: "Masculino"
        },
        {
            nome: "Tien Shinhan",
            tecnicas: ["Kikoho", "Shin Kikoho", "Golpe de Quatro Braços"],
            poderLuta: 400000,
            raca: "Terráqueo",
            sexo: "Masculino"
        },
        {
            nome: "Chiaotzu",
            tecnicas: ["Telecinese", "Autodestruição", "Dodompa"],
            poderLuta: 150000,
            raca: "Terráqueo",
            sexo: "Masculino"
        },
        {
            nome: "Goten",
            tecnicas: ["Kamehameha", "Super Saiyajin", "Explosão de Ki"],
            poderLuta: 900000000,
            raca: "Mestiço (Saiyajin/Terráqueo)",
            sexo: "Masculino"
        },
        {
            nome: "Bulma",
            tecnicas: ["Inteligência", "Invenções", "Tecnologia"],
            poderLuta: 0,
            raca: "Terráquea",
            sexo: "Feminino"
        },
        {
            nome: "Videl",
            tecnicas: ["Voo", "Explosão de Ki", "Artes Marciais"],
            poderLuta: 200000,
            raca: "Terráquea",
            sexo: "Feminino"
        },
        {
            nome: "Android 18",
            tecnicas: ["Explosão de Ki", "Força Sobrenatural", "Resistência"],
            poderLuta: 1000000000,
            raca: "Android",
            sexo: "Feminino"
        },
        {
            nome: "Android 17",
            tecnicas: ["Explosão de Ki", "Força Sobrenatural", "Barreira de Energia"],
            poderLuta: 1000000000,
            raca: "Android",
            sexo: "Masculino"
        },
        {
            nome: "Bardock",
            tecnicas: ["Espírito Saiyajin", "Explosão de Ki", "Lâmina de Ki"],
            poderLuta: 1000000,
            raca: "Saiyajin",
            sexo: "Masculino"
        },
        {
            nome: "Raditz",
            tecnicas: ["Explosão de Ki", "Voo", "Ataque Duplo"],
            poderLuta: 1500,
            raca: "Saiyajin",
            sexo: "Masculino"
        },
        {
            nome: "Nappa",
            tecnicas: ["Explosão de Ki", "Voo", "Ataque Gigante"],
            poderLuta: 4000,
            raca: "Saiyajin",
            sexo: "Masculino"
        }
    ];


    
personagensDBZ.forEach((personagem) => {
    
    return console.log(`DBZ - ${personagem.nome} - Poder de luta: ${personagem.poderLuta}`)
})

