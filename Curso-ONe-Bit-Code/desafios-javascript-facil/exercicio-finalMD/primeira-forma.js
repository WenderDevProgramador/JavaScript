const vagas = []



function exibirMenu () {
    let opção
    opção = parseFloat(prompt(`== Sistema de Vagas de Emprego ==

        Escolha uma das opções:
        1 - Vagas disponíveis.
        2 - Criar nova vaga.
        3 - Visualizar uma vaga.
        4 - Inscrever candidato para vaga.
        5 - Excluir uma vaga.
        6 - Sair.`))
    
    return opção
}



function executar() {
    let opção
    do {

        opção = exibirMenu()

        switch(opção) {
            case 1:
                listarVagas()
                break
            case 2:
                criarVaga()
                break
            case 3:
                alert('3 - Visualizar uma vaga.')
                break
            case 4:
                inscreverCandidato()
                break
            case 5:
                alert('5 - Excluir vaga')
                break
            case 6:
                alert('6 - Saindo.')
                break

            default:
                alert('Opção invalida!')
        }
    } while(opção !== 6)
}


function criarVaga () {
    let nome = prompt('Nome da vaga:')
    let descrição = prompt('Descrição da vaga:')
    let data = prompt('Data limite para inscrição: [dd/mm/aaaa]')

    let confirmação = confirm(`Confirme os dados para cadastrar:
    Nome: ${nome}
    Descrição: ${descrição}
    Data limite: ${data}`)

    if (confirmação) {
        const novaVaga = {nome,descrição,data, candidatos: []}
        vagas.push(novaVaga)
        alert('Vaga adicionada!')
    } else {
        alert('Vaga não adicionada!')
    }
}

function listarVagas () {
    if (vagas.length === 0) {
        alert('No momento não há vagas!')
    } else {
        const vagasEmTexto = vagas.reduce((textofinal,vaga,indice) => {
            textofinal += `Nº ${indice} - ${vaga.nome} - Total candidatos: ${vaga.candidatos.length}\n`
        return textofinal
        },'')

        alert(vagasEmTexto)
    }
}

function inscreverCandidato () {
    const candidato = prompt('Nome candidato: ')
    const indice = prompt('Indice da vaga:')
    const vaga = vagas[indice]

    if (vaga) {
        const confirmação = confirm('Confirme os dados para cadastro:\n' + 
        `Inscrever ${candidato} na vaga ${indice}?
        Nome: ${vaga.nome} 
        Descrição: ${vaga.descricao} 
        Data limite: ${vaga.dataLimite}`)

        if (confirmação) {
            vaga.candidato.push(candidato)
            alert('Inscrição finalizada!')
        } else {
            alert('Indice invalido!')
        }
    }


}

executar ()


