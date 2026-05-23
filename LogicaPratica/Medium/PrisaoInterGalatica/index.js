// Escreva uma função que recebe uma lista embaralhada de números únicos de 1 até n no formato "0001", verifique se há elementos faltando e , caso hajam, retorne os elementos que faltam.
// Entrada: ['0004','0002','0005','0003'] => Saída: ['0001']
// Entrada: ['0003','0002','0001'] => Saída: []
// Entrada: ['0002','0001','0004'] => Saída: ['0003']
// Entrada: ['0001','0002','0003','0004','0012'] => Saída: ['0005','0006','0007','0008','0009','0010','0011']

const verifyPrison = (list) => {
    const totalList = list.reduce((acc, num , index) => +num > acc ? num : acc, 0);
    const missingNumbers = [];
    for (let i = 1; i <= totalList; i++) {
        if (!list.includes(i > 9 ? '00' + i : '000' + i)) {  
            missingNumbers.push(i > 9 ? '00' + i : '000' + i);
        }
    }

    return missingNumbers;
}

console.log(verifyPrison(['0004','0002','0005','0003'])); // ['0001']
console.log(verifyPrison(['0003','0002','0001'])); // []
console.log(verifyPrison(['0002','0001','0004'])); // ['0003']
console.log(verifyPrison(['0001','0002','0003','0004','0012']));
console.log(verifyPrison(['0090','0001'])); 