let vagas = []

function excluirVaga() {
    const indice = prompt('Informe o índice da vaga que desejá excluir:')
    const vaga = vagas[indice]

    // Verificação se o índice é válido
    if (vaga) {
        const confirmacao = confirm(`Tem certeza que desejá excluir a vaga ${indice}?
        Nome: ${vaga.nome} 
        Descrição: ${vaga.descricao} 
        Data limite: ${vaga.dataLimite}`)

        if (confirmacao) {
            vagas.splice(indice, 1)
            alert('Vaga excluída!')
        }
    } else {
        alert('Índice inválido!')
    }
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do candidato(a):')
    const indice = prompt('Informe o índice para a vaga a qual o candidato desejá se cadastrar:')
    const vaga = vagas[indice]

    // Verificação se o índice é válido
    if (vaga) {
        const confirmacao = confirm(`Desejá inscrever o candidato ${candidato} na vaga ${indice}?
        Nome: ${vaga.nome} 
        Descrição: ${vaga.descricao} 
        Data limite: ${vaga.dataLimite}`)

        if (confirmacao) {
            // Corrigido para adicionar o candidato na lista de candidatos da vaga
            vaga.candidatos.push(candidato)
            alert('Inscrição finalizada!')
        }
    } else {
        alert('Índice inválido!')
    }
}

function exibirVaga() {
    const indice = prompt('Informe o índice da vaga para exibir:')
    const vaga = vagas[indice]

    // Verificação se o índice é válido
    if (vaga) {
        const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
            return textoFinal + '\n - ' + candidato
        }, '')

        alert(`Vaga nº ${indice}
        Nome: ${vaga.nome}
        Descrição: ${vaga.descricao}
        Quantidade de candidatos: ${vaga.candidatos.length}
        Candidatos inscritos: ${candidatosEmTexto}`)
    } else {
        alert('Índice inválido!')
    }
}

function criarVaga() {
    const nome = prompt('Informe um nome para a vaga:')
    const descricao = prompt('Informe uma descrição para a vaga:')
    const dataLimite = prompt('Informe uma data limite para a vaga (dd/mm/aaaa):')

    const confirmacao = confirm(`Desejá criar uma nova vaga com essas informações?
    Nome: ${nome}
    Descrição: ${descricao}
    Data Limite: ${dataLimite}`)

    if (confirmacao) {
        // Correção na criação de um novo objeto vaga
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert('Vaga criada!')
    }
}

function listarVagas() {
    if (vagas.length === 0) {
        alert('Ainda não temos vagas cadastradas')
    } else {
        const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
            textoFinal += indice + '. '
            textoFinal += vaga.nome
            textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
            return textoFinal
        }, '')
        alert(vagasEmTexto)
    }
}

function exibirMenu() {
    // Correção da grafia e organização do menu
    const opcao = parseFloat(prompt(`== Sistema de Vagas de Emprego ==

        Escolha uma das opções:
        1 - Vagas disponíveis.
        2 - Criar nova vaga.
        3 - Visualizar uma vaga.
        4 - Inscrever candidato para vaga.
        5 - Excluir uma vaga.
        6 - Sair.`))

    return opcao
}

function executar() {
    let opcao

    // Mover a chamada ao menu para dentro do loop para garantir que o menu seja exibido repetidamente
    do {
        opcao = exibirMenu()

        switch(opcao) {
            case 1:
                listarVagas()
                break
            case 2:
                criarVaga()
                break
            case 3:
                exibirVaga()
                break
            case 4:
                inscreverCandidato()
                break
            case 5:
                excluirVaga()
                break
            case 6:
                alert('Saindo...')
                break
            default:
                alert('Opção inválida!')
        }

    } while(opcao !== 6) // Correção para verificar a opção dentro do loop
}

executar()
