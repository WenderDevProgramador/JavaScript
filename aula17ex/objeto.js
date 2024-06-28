let amigo = {nome: 'Jese', sexo: 'M', peso:85.4, engorda(p=0) {
    console.log('Engordou')
    this.peso += p
} }
amigo.engorda(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

let num = 8
num**=2
console.log(num)