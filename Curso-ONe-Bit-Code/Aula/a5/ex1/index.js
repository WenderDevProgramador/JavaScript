let opções = ''

do {
    opções = prompt(`Escolha uma das opções a baixo:
    1 - Opc
    2 - Opc
    3 - Opc
    4 - Opc
    5 - Encerrar    `)
    switch (opções) {
        case '1':
            alert('Bem vido a pagina 1')
            break
        case '2':
            alert('Bem vido a pagina 2')
            break
        case '3':
            alert('Bem vido a pagina 3')
            break
        case '4':
            alert('Bem vindo a pagina 4')
            break
        case '5':
            alert('Encerrando')
            break
        default:
            alert('Opção invalida!!')


    }
} while (opções !== '5')