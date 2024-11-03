/* Escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos:

- Nome, sobrenome, Data de Nascimento, Licença de Voo(que deve iniciar sempre como falso)

* A classe deve possuir um metódo para criar uma licença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguintes padrões:

- Os primeiros cinco caracteres do sobrenome em letras maiúsculas (completado com 9´s caso possua menos de cinco)

- O 6º caractere é um traço (-)

- O 7º caractere é o algorismo da década (penúltimo) do ano de Nascimento

- O 8º e 9º são o mês de Nascimento

- O 10º caractere é o algorismo do ano (último) do ano de Nascimento

- O 11º caractere é um ponto(.)

- O 12º caractere é a primeira letra do primeiro nome (minúscula)

Casos de texte:

- Pilot {
    firstName:'John',
    lastNmae: 'Doe',
    bithday: 1977-05-25t03:00:00:00.000z,
    flyingLicense: 'DOE99-7057.j
}
    */

const Licença = require("./Lincença")


const Pilot = new Licença('John', 'Doe', '1977-05-25')
Pilot.generateLicense()
console.log(Pilot)