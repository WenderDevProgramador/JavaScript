
function mediaNota(array) {
    let notaSoma=0
    array.forEach(numero => {
        notaSoma += numero
    });

    return notaSoma / array.length
}

console.log(mediaNota([10,9,6,8,9,1,5,7]))