
function invertida(...n) {
    const novo = []

    for(let i = n.length -1; i >= 0; i--){
        novo.push(n[i])
    }

    return novo
}

console.log(invertida(0,9,6,8,9,1,5,7))
console.log(invertida('Oh','Hi','Mark'))