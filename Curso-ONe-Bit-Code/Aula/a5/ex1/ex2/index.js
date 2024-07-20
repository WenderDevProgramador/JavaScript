let saldo = parseFloat(prompt('informe o seu saldo inicial:'))

let opção = 0

do {
    opção = parseFloat(prompt(`Escolha uma das opões para ver a conta:
        1 - Saldo
        2 - Depositar
        3 - Sacar
        4 - Encerrar`))
    switch (opção) {
        case 1:
            alert(`Saldo: R$ ${parseFloat(saldo)}`)
            break
        case 2:
            let deposito = parseFloat(prompt(`Qual o valor a ser depositado ?`))
            saldo += deposito
            break
        case 3:
            let saque = parseFloat(prompt(`Qual o valor a ser sacado ?`))
            saldo -= saque
            break
        case 4:
            alert('Encerrando!!')
            break
        default:
            alert('opção invalida!')
    }
} while (opção !== 4)
