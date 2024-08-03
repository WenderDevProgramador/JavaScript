
const listaUm = [0,9,6,8,9,1,5,7]
const listaDois = ['Oh','Hi','Mark']
const listaTres = [false,true,true,true]


function reversao(...array) {
    
    let novaLista = []
    for (let i = 0; i < array.length; i++) {
        novaLista[i] = array[array.length - 1 - i] 
    }
    return novaLista
}



console.log(reversao(0,9,6,8,9,1,5,7))