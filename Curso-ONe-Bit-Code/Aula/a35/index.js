const personagens = 
    {
        nome: "Goku",
        idade: 43,
        planetaOrigem: "Vegeta",
        raca: "Saiyajin",
        familia: [
            { nome: "Gohan", sexo: "Masculino", parentesco: "Filho", idade: 23 },
            { nome: "Goten", sexo: "Masculino", parentesco: "Filho", idade: 17 },
            { nome: "Chichi", sexo: "Feminino", parentesco: "Esposa", idade: 44 },
            { nome: "Bardock", sexo: "Masculino", parentesco: "Pai", idade: 60 },
            { nome: "Raditz", sexo: "Masculino", parentesco: "Irmão", idade: 50 }
        ]
    }

console.log(personagens?.familia?.[10]);

