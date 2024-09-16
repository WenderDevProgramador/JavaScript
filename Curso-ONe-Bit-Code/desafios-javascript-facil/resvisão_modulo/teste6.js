
function ajustarOrdem (array) {
    let n = array.flat()
    return n.sort((a,b)=> a - b)
}


console.log(ajustarOrdem([[1,5,3],[6,19,11],[47,128,5],[1,93,57,42,103]]))