/*
Escreva uma função que recebe uma lista embaralhada de números únicos de 1 até n no formato "0001" (string com zeros à esquerda), verifique se hà elementos faltando (onde n nunca estará faltando) e, caso hajam, retorne os elementos que faltam.

- Entrada: (['0004','0002','0005','0003'])
- Saída: ['0001']
*/

function missingPrisoners(arr) {

    const sorted = arr.slice(0).sort((a,b) => a-b)
    const total = Number(sorted[sorted.length-1])

    const allPrisoners = []

    for (let i = 0; i < total; i++) {
        const  prisoner = i + 1
        allPrisoners.push(prisoner.toString().padStart(4, '0'))
        
    }

    const missingPrisoners = []

    allPrisoners.forEach(prisoner => {
        if (!sorted.includes(prisoner)) {
            missingPrisoners.push(prisoner)
        }
    })

    return missingPrisoners


}


console.log(missingPrisoners(['0004','0002','0005','0003']))