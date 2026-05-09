// Escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos: 
// Nome, Sobre nome, Data de Nascimento, Licença de Voo(deve iniciar sempre como falso).
// Além disso a classe deve conter um método para criar uma licença caso a pessoa não possua uma. A licença deve ser uma string seguindo o seguinte padrão: 
// Os primeiros 5 caracteres do sobrenome em letras maiúsculas( completado com 9's caso possua menos de cinco)
// O 6º caractere é um traço -
// O 7º caractere é o algarismo da década (penultimo) do ano de nascimento
// O 8º e 9º caracteres são o mês de nascimento
// O 10º caractere é o algarismo do ano (último) do ano de nascimento
// O 11º caractere é um ponto .
// 12º caractere é a primeira letra do primeiro nome (minúscula)


class Pilot {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthDate = new Date(birthDate)
        this.flightLicense = false
    }

    generateFlightLicense() {
        

        if(!this.flightLicense) {
            let license = ''
            const lastName = this.lastName.toUpperCase()

            for (let i = 0; i < 5; i++) {
                license += lastName[i] || '9'
            }

            license += '-'
            const birthYear = this.birthDate.getFullYear().toString()[2] 

            license += birthYear

            const birtMonth = this.birthDate.getMonth() < 9 ? '0' + (this.birthDate.getMonth() + 1) : (this.birthDate.getMonth() + 1)

            license += birtMonth

            const birthYearLastDigit = this.birthDate.getFullYear().toString()[3]
            
            license += birthYearLastDigit
            license += '.'
            license += this.firstName[0].toLowerCase()
            this.flightLicense = license

            return this.flightLicense
        } else {
            return this.flightLicense
        }

        
    }
}







const pilot1 = new Pilot("John", "Doe", "05-25-1977")
const pilot2 = new Pilot("Alice", "Johnson", "09-02-1995")
const pilot3 = new Pilot("Bob", "Lee", "03-30-1992")
const pilot4 = new Pilot("Wender", "Queiroz", "06-11-1995")

console.log(pilot1)
console.log(pilot2)
console.log(pilot3)
console.log(pilot4)

pilot1.generateFlightLicense()
pilot2.generateFlightLicense()
pilot3.generateFlightLicense()
pilot4.generateFlightLicense()

console.log(pilot1)
console.log(pilot2)
console.log(pilot3)
console.log(pilot4)