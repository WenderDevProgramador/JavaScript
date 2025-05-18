// Escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos:

//Nome , Sobre nome , Data de Nascimento, Licença de voo (oque deve iniciar sempre como falso)

// Além disso a classe deve possuir um método para criar uma licença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguinte padrão:

// - Os primeiros cinco caracteres do sobrenome em letras maiúsculas (completado com 9´s caso possua menos de cinco)
// - O 6º caracteres é um traço (-)
// - O 7º é o algarismo da década (penúltimo) do ano de nascimento
// - O 8º e 9º são o mês de nascimento
// - O 10º é o algarismo do ano (último) do ano de nascimento
// - O 11º é um ponto  .
// - O 12º é a primeira letra do primeiro nome (minúscula)

// //Saída: Pilot {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthday: 1977-05-25T03:00:00.000Z,
//     flyingLicense: 'DOE((-7057.j'
// }
// 


class Pilot {
    constructor(name, lastName, date) {
        this.name = name
        this.lastName = lastName
        this.date = new Date(date)
        this.licen = false
    }


    newLicens() {

        let license = ''

        for (let i = 0; i < 5; i++) {

            license += this.lastName[i] ? this.lastName[i].toUpperCase() : '9';

        }

        license += `-`
        license += this.date.getFullYear().toString()[2]
        const mes = this.date.getMonth().toString()
        license += mes < 9 ? `0${+mes + 1}` : `${+mes + 1}`
        license += this.date.getFullYear().toString().slice(-1)
        license += `.`
        license += this.name[0].toLowerCase()

        this.licen = license

    }




}


const pilot1 = new Pilot('John', 'Doe', '05-25-1977')
pilot1.newLicens()
console.log(pilot1)


const pilot2 = new Pilot('Hal', 'Jordan', '09-02-1995')
pilot2.newLicens()
console.log(pilot2)


const pilot3 = new Pilot('Carol', 'Danvers', '08-17-1968')
pilot3.newLicens()
console.log(pilot3)


const pilot4 = new Pilot('Wender', 'Queiroz', '06-11-1995')
pilot4.newLicens()
console.log(pilot4)
