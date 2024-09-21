const personagens = [
    "Goku","Vegeta","Piccolo","Gohan","Trunks","Kuririn","Bulma","Freeza","Cell","Majin Buu","Yamcha","Tenshinhan","Chaozu","Mestre Kame","Videl","Broly","Android 18","Android 17","Nappa","Raditz"
];

const numeros = Array.from({ length: 51 }, (_, i) => i);


console.log(personagens)
console.log(...personagens[0])

console.log(numeros)
console.log(...numeros)


const copyPersonagem = personagens
/*
copyPersonagem.pop()
copyPersonagem.pop()
copyPersonagem.push('Wender')
console.log(personagens,copyPersonagem)
*/
const clonePerson = [...personagens]

clonePerson.pop()
clonePerson.pop()
clonePerson.push('Wender')

console.log({personagens,copyPersonagem,clonePerson})


const objeto = {...personagens}
const novoobje = {...objeto}
novoobje.test = 'teste'
console.log(objeto)
console.log(novoobje)