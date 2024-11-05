/*
Escreva uma função que recebe uma string e um número e retorne o resultado da aplicação da Cifra de Cesar para descriptografar o seu conteúdo, ou seja , que retroceda cada letra pelo número passado seguindo a ordem alfabética.

- Entrada: ('Vguvg',2)
Saída: 'Teste'

- Entrada: ('BCDYZAbcdyza',27)
Saída:'ABCXYZabcxyz'

- Entrada: ('Qaiik',60)
Saída: 'Isaac'*/ 

const descipher = (str, key) => {
    const charsArray = str.split('');
    const normalizedKey = key % 26;

    const codeArray = charsArray.map(char => {
        const currentCode = char.charCodeAt(0);

        if (currentCode >= 65 && currentCode <= 90 && currentCode - normalizedKey < 65) {
            return currentCode + 26;
        }

        if (currentCode >= 97 && currentCode <= 122 && currentCode - normalizedKey < 97) {
            return currentCode + 26;
        }

        return currentCode;
    });

    return codeArray.map(code => String.fromCharCode(code - normalizedKey)).join('');
}

console.log(descipher('Vguvg', 2)); // Saída: Teste
console.log(descipher('BCDYZAbcdyza', 27)); // Saída: ABCXYZabcxyz
console.log(descipher('Qaiik', 60)); // Saída: Mwwee
