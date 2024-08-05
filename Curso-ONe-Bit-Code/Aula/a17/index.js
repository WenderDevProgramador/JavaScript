
let vagas = []

function excluirVaga () {
    const indice = prompt('Informe o indice da vaga que desejá excluir:')
    const vaga = vagas[indice]

    const confirmação = confirm(`Tem certeza que desejá excluir vaga ${indice}?
    Nome: ${vaga.nome} 
    Descrição: ${vaga.descrição} 
    Data limite: ${vaga.dataLimite}`)

    if (confirmação) {
        vagas.splice(indice,1)
        alert('Vaga excluida!')
    }
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do candidato(a):')
    const indice = prompt('Informe o indice para a vaga a qual o candidato desejá se cadastrar:')
    const vaga = vagas[indice]

    const confirmação = confirm(`Desejá inscrever o candidato ${candidato} na vaga ${indice} ?
    Nome: ${vaga.nome} 
    Descrição: ${vaga.descrição} 
    Data limite: ${vaga.dataLimite}`)

    if (confirmação) {
        vagas.candidatos.push(candidato)
        alert('Inscrição finalizada!')
    }
}

function exibirVaga () {
    const indice = prompt('Informe o indice da vaga para exibir:')
    const vaga = vaga[indice]

    const candidatoEmtexto = vaga.candidatos.reduce((textofinal, candidato) => {
        return textofinal + '\n - ' + candidato
    },'')

    alert(`Vaga nº ${indice}
    Nome: ${vaga.nome}
    Descrição: ${vaga.descrição}
    Quantidade de candidatos: ${vaga.candidatos.length}
    Candidato inscritos: ${candidatoEmtexto}`)
}

function criarVaga () {
    const nome = prompt('Informe um nome para a vaga:')
    const descrição = prompt('Informe uma descrição para a vaga:')
    const dataLimite = prompt('Informe uma data limite para a vaga (dd/mm/aaaa):')

    const confirmação = confirm(`Desejá criar uma nova vaga com essas informações? 
    Nome: ${nome}
    Descrição: ${descrição}
    Data Limite: ${dataLimite}`)

    if (confirmação) {
        const novaVaga = {nome,descrição,dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('Vaga criada!')
    }
}

function ListarVagas() {
    const vagasEmtexto = vagas.reduce((textofinal,vaga, indice) => {
        textofinal += indice + '. '
        textofinal += vaga.nome
        textofinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        return textofinal
    },'')
    alert(vagasEmtexto)
}

function exibirMenu() {
     
    const opção = parseFloat(prompt(`==   Sistema de Vagas de Emprego   ==

        Escolha uma das opções:
        
        1 - Vagas disponiveis.
        2 - Criar nova vaga.
        3 - Vizualizar uma vaga.
        4 - Inscrever candidato p/vaga.
        5 - Excluir uma vaga.
        6 - Sair.    `))

        return opção

        }