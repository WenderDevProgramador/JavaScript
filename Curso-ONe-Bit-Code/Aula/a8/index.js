let fila = []
let menu = 0

do {
    menu = parseFloat(prompt(`== Fila de pacientes ==
        Escolha uma opção:
        1 - Ver a fila.
        2 - Consultar paciente.
        3 - Adicionar paciente a fila.
        4 - Encerrar.`))
    let paciente = ''

    for (let p = 0; p < fila.length; p++) {
        paciente += `${p + 1}º - ${fila[p]}\n`
    }

    

    switch (menu) {
        case 1:

            if (fila.length > 0) {
                alert(paciente)
            } else {
                alert('A fila está vazia!')
            }
            break
        case 2:

            if (fila.length > 0) {
                fila.shift()
            } else {
                alert('A fila está vazia!')
            }
            break
        case 3:
            fila.push(prompt(`Qual o nome do paciente a ser adicionado a fila de espera?`))

            break
        case 4:
            alert('Encerrando....')
            break
        default:
            alert('Opção invalida!')
    }

} while (menu !== 4)