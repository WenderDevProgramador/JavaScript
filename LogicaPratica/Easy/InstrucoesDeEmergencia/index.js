// Esscreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe e retorna true caso tenha e false caso não tenha.

// Entrada: ("This is Thee") -> Saída: true
// Entrada: ("ssd") -> Saída: false

const checkLetra = (str) => {
    const letras = {};
    for (let i = 0; i < str.length; i++) {
        const letra = str[i].toLowerCase();

        if (letras[letra]) {
            letras[letra]++;
        } else {
            letras[letra] = 1;
        }

    }

    return Object.values(letras).every(count => count === Object.values(letras)[0]);

    // Object.values(letras) retorna um array com os valores do objeto letras, ou seja, as contagens de cada letra. O método every() é usado para verificar se todos os valores no array são iguais ao primeiro valor (Object.values(letras)[0]). Se todos os valores forem iguais, a função retorna true; caso contrário, retorna false.
}

console.log(checkLetra("This is Thee"));
console.log(checkLetra("ssd"));