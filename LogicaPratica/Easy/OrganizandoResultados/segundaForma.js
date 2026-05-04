
const flatAndSort = (arr) => {
    const numbers = []
    arr.forEach(list => {
        numbers.push(...list)
    })
    return numbers.sort((a, b) => a - b)
}

console.log(flatAndSort([[3, 2, 1], [6, 5, 4]])) // [1, 2, 3, 4, 5, 6]
console.log(flatAndSort([[1,3],[4,8],[7,5],[2,6]])) // [1, 2, 3, 4, 5, 6, 7, 8]

