const palavra = prompt('Digite uma palavra para identificamos se é um palindromo:')

let palavraReversa = ''

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraReversa += palavra[i]
}

if (palavra === palavraReversa) {
    alert(`É um palindromo!! 
        ${palavra} == ${palavraReversa}`)
} else {
    alert(`Não é um palindromo!!
    ${palavra} != ${palavraReversa}`)
}