

function romanNumeral (str) {
    const numeralArray = str.toUpperCase().split('');
    const decimalsArray = numeralArray.map(numeral => {
        switch (numeral) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default: 
                return 0;
        }
    });

    return decimalsArray.reduceRight((acc, curr, index) => {
        if (curr < decimalsArray[index + 1]) {
            return acc - curr;
        } else {
            return acc + curr;
        }    }, 0);
}

console.log(romanNumeral('xlvii'));
console.log(romanNumeral('iv'));
console.log(romanNumeral('xxi'));