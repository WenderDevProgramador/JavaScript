
function parOrdenado(array) {
    let result = []

    for(let i =0; i <= array[0]; i++) {
        for(let j =0 ; j <= array[1] ; j++) {
            result.push([i,j])
        }
    }

    return result
}

console.log(parOrdenado([2,2]))
console.log(parOrdenado([2,7]))
console.log(parOrdenado([7,6]))
console.log(parOrdenado([2,2]))
console.log(parOrdenado([-3,-3]))