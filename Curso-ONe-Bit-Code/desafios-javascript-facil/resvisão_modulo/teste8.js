
function verificarLetra(str) {
    let result = {}

    for(let i =0 ; i < str.length ; i++) {
        result[str[i]] = result[str[i]] ? result[str[i]] + 1 : 1
    }

    return Object.values(result).every((cont,index,array) => index !== 0 ? cont === array[index -1] : true)
}

console.log(verificarLetra('This is Thee'))
console.log(verificarLetra('ssd'))