const sumValue = (accum, atual, index, array) => atual < array[index + 1] ? accum - atual : accum + atual ;

const traductor = (str) => {
    const nroman = str.toString().toUpperCase().split('')
    const numeralRoman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const valueCorres = nroman.map((valor) => numeralRoman[valor])

    const result = valueCorres.reduceRight(sumValue)
        return result;
}

console.log(traductor('xlvii'))
console.log(traductor('CDXXXVIII'))