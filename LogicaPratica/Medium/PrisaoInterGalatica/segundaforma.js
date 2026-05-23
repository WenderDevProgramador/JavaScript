
function missingPrisoners(arr) {
    const sorted = arr.slice(0).sort((a, b) => a - b);
    const total = Number(sorted[sorted.length - 1]);
    const allPrisoners = [];
    const missingPrisoner = [];

    for (let i = 1; i < total; i++) {
        const prisioner = i ;

        allPrisoners.push(prisioner.toString().padStart(4, '0'));
    }

    allPrisoners.forEach(prisioner => {
        if (!sorted.includes(prisioner)) {
            missingPrisoner.push(prisioner);
        }
    })

    return missingPrisoner;
}





console.log(missingPrisoners(['0004', '0002', '0005', '0003'])); // ['0001']
console.log(missingPrisoners(['0003', '0002', '0001'])); // []
console.log(missingPrisoners(['0002', '0001', '0004'])); // ['0003']      
console.log(missingPrisoners(['0001', '0002', '0003', '0004', '0012'])); // ['0005','0006','0007','0008','0009','0010','0011']
