/*Escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos: 
- Nome
- Sobrenome
- Data de Nascimento
Licença de Voo (que deve iniciar sempre como falso)

Além disso a classe deve possuir um método para criar uma lincença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguinte padrão:

- Os primeiros cinco caracteres do sobrenome em letras maiúsculas (completado com 9's caso possua menos de cinco)
- O 6º caractere é um traço (-)
- O 7º caractere é o algarismo da década (penúltimo) do ano de Nascimento
- O 8º e 9º caracteres são o mês de Nascimento
- O 10º caractere é o algarismo do ano (último) do ano de nascimento
O 11º caractere é a primeira letra do primeiro nome (minúscula)
*/


class Pilot {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = new Date(birthday)
        this.flyingLicense = false
    }

    generateFlyingLicense() {
        
    }
}




const pilot1 =new Pilot('Jhon','Doe','05-25-1977')
const pilot2 =new Pilot('Hal','Jordan','09-02-1995')
const pilot3 =new Pilot('Carol','Danvers','08-17-1968')
const pilot4 =new Pilot('Poe','Dameron','03-09-1979')

pilot1.generateFlyingLicense()
pilot2.generateFlyingLicense()
pilot3.generateFlyingLicense()
pilot4.generateFlyingLicense()

console.log(pilot1)
console.log(pilot2)
console.log(pilot3)
console.log(pilot4)