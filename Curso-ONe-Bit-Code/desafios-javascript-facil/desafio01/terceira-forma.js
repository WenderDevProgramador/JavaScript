
function mediaNota(...array) {
    const notas = array.reduce((ini,fim) => ini += fim , 0)

    return notas / array.length
}


console.log(mediaNota(10,9,6,8,9,1,5,7))