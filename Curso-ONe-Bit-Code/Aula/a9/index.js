let baralho = []
let menu = 0

do {
    menu = parseFloat(prompt(`== Jogo De Cartas == 
    Quantidade atual de cartas = ${baralho.length}
    
    Escolha uma opção:
    
    1 - Adicionar uma carta.
    2 - Puxar uma carta.
    3 - Sair.`))

    switch (menu) {
        case 1:
            let cartaAdicionada = ''
            cartaAdicionada = prompt(`Qual carta desejá adicionar ao baralho ?`)
            baralho.unshift(cartaAdicionada)
            alert(`Você adicionou ao baralho a carta ${cartaAdicionada}`)
            break
        case 2:
            if (baralho.length > 0) {
            cartaPuxada = baralho.shift()
            alert(`Você puxou do baralho a carta ${cartaPuxada}`) } else {
                alert('O baralho está vazio suas cartas acabaram!')
            }
            break

        case 3:
            alert('Saindo ...')
            break
        default:
            alert('Opção invalida!')
    }
} while (menu !== 3)