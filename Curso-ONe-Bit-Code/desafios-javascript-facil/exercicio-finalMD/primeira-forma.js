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
    if (vagas.length === 0) {
        alert('Não há vagas para fazer inscrição.')
        return
    }

    const candidato = prompt('Nome candidato: ')
    const indice = prompt('Indice da vaga:')
    const vaga = vagas[indice]
    

    if (vaga) {
        
        const confirmação = confirm('Confirme os dados para cadastro:\n' + 
        `Inscrever ${candidato} na vaga ${indice}?
        Nome: ${vaga.nome} 
        Descrição: ${vaga.descrição} 
        Data limite: ${vaga.dataLimite}`)

        if (confirmação) {
            vaga.candidatos.push(candidato)
            alert('Inscrição finalizada!')
        } else {
            alert('Inscrição cancelada!')
        } 
    } else {
        alert('Indice invalido!')
    } 


}

function excluirVaga () {
    if (vagas.length === 0) {
        alert('Não há vagas para excluir.')
        return
    }

    const indice = prompt('Informe o indice da vaga para excluir:')
    

    if (indice >= 0 && indice < vagas.length) {
        const vaga = vagas[indice];

        const confirmacao = confirm(`Confirma a exclusão da vaga ${indice}?\n
        Nome: ${vaga.nome}\n
        `);

        if (confirmacao) {
            vagas.splice(indice, 1);
            alert('Vaga excluída!');
        } else {
            alert('Vaga mantida!');
        }
    } else {
        alert('Índice inválido!'); 
    }

}

function exibirVaga () {
    const indice = prompt('Informe o indice da vaga:')
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce((textofinal,candidato) => {
        return `${textofinal} \n - ${candidato}`
    },'')

    alert(`Vaga Nº ${indice}
    Nome: ${vaga.nome}
    Descrição: ${vaga.descrição}
    Data limite: ${vaga.dataLimite}
    Quantidade de candidados: ${vaga.candidatos.length}
    Candidatos:
    ${candidatosEmTexto}`)
}
executar ()


