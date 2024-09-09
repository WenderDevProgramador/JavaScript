
function organizarNumeros(arrey) {
    let nova = arrey.flat();
    return nova.sort((a,b) => a-b);

};

console.log(organizarNumeros([[1,5,3],[6,19,11],[47,128,5],[1,93,57,42,103]]))

console.log(organizarNumeros([[1,3],[4,8],[7,5],[2,6]]))

