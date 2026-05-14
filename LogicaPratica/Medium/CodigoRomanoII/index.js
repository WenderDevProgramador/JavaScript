// Escreva uma função que recebe uma string e um número e retorne o resultado da aplicação da cifra de cesar para descriptografar o seu conteúdo, ou seja, que retroceda cada letra pelo número passado seguindo a ordem alfabética.

// Entrada: ('Vguvg',2) => Saida: 'Teste'
// Entrada: ('BCDYZAbcdyza',27) Saída: 'ABCXYZabcxyz'

const decipher = (str, key) => {
    const charsArray = str.split('')
    const normalizedKey = key % 26

    const codeArray = charsArray.map(char => {
        const currentCode = char.charCodeAt(0)

        if (currentCode >= 65 && currentCode <= 90 && currentCode - normalizedKey < 65) {
            return currentCode + 26
        }

        if (currentCode - normalizedKey < 97 && currentCode >= 97 && currentCode <= 122) {
            return currentCode + 26
        }

        return currentCode
    })

    return codeArray.map(code => String.fromCharCode(code - normalizedKey)).join('')

}

console.log(decipher('Vguvg',2))
console.log(decipher('BCDYZAbcdyza',27))