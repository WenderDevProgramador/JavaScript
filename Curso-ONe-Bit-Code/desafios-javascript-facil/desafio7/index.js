
function retornaEmOrdem(arr) {
    const numeros = []
    arr.forEach(list => {
        numeros.push(...list)
    });

    return numeros.sort((a,b)=> a - b)
}

console.log(retornaEmOrdem([[1,5,3],[6,19,11],[47,128,5],[1,93,57,42,103]]))