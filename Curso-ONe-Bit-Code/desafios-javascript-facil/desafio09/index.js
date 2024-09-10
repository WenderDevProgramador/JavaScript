function compararStr (str) {
    const arquivo = {}
    str = str.toLowerCase()

    for(let i = 0; i < str.length; i++) {
        const letra = str[i]
        arquivo[letra] = arquivo[letra] ? arquivo[letra] + 1 : 1        
    }

    return Object.values(arquivo).every((letra,index,array) => index !== 0 ? letra === array[index -1] : true)
}


console.log(compararStr('This is Thee'))
console.log(compararStr('ssd'))
console.log(compararStr('Lorem ipsum'))
