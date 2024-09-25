//moda:

const mode = (...num) => {
    const quantites = num.map((ele) => [ele,num.filter((n) => ele === n).length])
    quantites.sort((a,b) => b[1] - a[1])
    return quantites[0][0]
}

console.log(`A moda é: ${mode(1,1,1,1,1,1,5,4,9,7,4,3,5,2,4,0,4)}`)