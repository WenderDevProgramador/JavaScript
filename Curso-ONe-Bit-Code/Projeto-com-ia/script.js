let vagas = JSON.parse(localStorage.getItem('vagas')) || []

// Função para renderizar a lista de vagas
function listarVagas() {
    const vagasUl = document.getElementById('vagas')
    vagasUl.innerHTML = ''

    vagas.forEach((vaga, index) => {
        const vagaLi = document.createElement('li')
        vagaLi.innerHTML = `
            <strong>Nome:</strong> ${vaga.nome}<br>
            <strong>Descrição:</strong> ${vaga.descricao}<br>
            <strong>Data Limite:</strong> ${vaga.dataLimite}<br>
            <strong>Candidatos:</strong> ${vaga.candidatos.length}
            <button onclick="exibirDetalhes(${index})">Ver Detalhes</button>
            <button onclick="excluirVaga(${index})">Excluir</button>
        `
        vagasUl.appendChild(vagaLi)
    })
}

// Função para exibir detalhes de uma vaga diretamente no DOM
function exibirDetalhes(indice) {
    const vaga = vagas[indice]
    const detalhesDiv = document.getElementById('detalhesVaga')
    const candidatos = vaga.candidatos.length ? vaga.candidatos.join(', ') : 'Nenhum candidato inscrito'
    detalhesDiv.innerHTML = `
        <h3>Detalhes da Vaga</h3>
        <p><strong>Nome:</strong> ${vaga.nome}</p>
        <p><strong>Descrição:</strong> ${vaga.descricao}</p>
        <p><strong>Data Limite:</strong> ${vaga.dataLimite}</p>
        <p><strong>Candidatos:</strong> ${candidatos}</p>
    `
}

// Função para criar uma nova vaga
document.getElementById('form-criar-vaga').addEventListener('submit', function(event) {
    event.preventDefault()
    
    const nome = document.getElementById('nome').value
    const descricao = document.getElementById('descricao').value
    const dataLimite = document.getElementById('dataLimite').value

    const confirmacao = confirm(`Deseja realmente criar a vaga com as seguintes informações?\nNome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`)

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        localStorage.setItem('vagas', JSON.stringify(vagas))
        listarVagas()

        this.reset() // Limpa o formulário
    }
})

// Função para inscrever candidato em uma vaga
document.getElementById('form-inscrever-candidato').addEventListener('submit', function(event) {
    event.preventDefault()
    
    const nomeCandidato = document.getElementById('nomeCandidato').value
    const indiceVaga = document.getElementById('indiceVaga').value

    if (vagas[indiceVaga]) {
        vagas[indiceVaga].candidatos.push(nomeCandidato)
        localStorage.setItem('vagas', JSON.stringify(vagas))
        listarVagas()
        exibirDetalhes(indiceVaga) // Atualiza os detalhes da vaga diretamente no DOM
        this.reset()
    } else {
        alert('Índice de vaga inválido!')
    }
})

// Função para excluir uma vaga
function excluirVaga(indice) {
    const confirmacao = confirm(`Deseja realmente excluir a vaga "${vagas[indice].nome}"?`)
    
    if (confirmacao) {
        vagas.splice(indice, 1)
        localStorage.setItem('vagas', JSON.stringify(vagas))
        listarVagas()
        document.getElementById('detalhesVaga').innerHTML = '' // Limpa os detalhes após exclusão
    }
}

// Função para limpar todos os dados
document.getElementById('btn-limpar').addEventListener('click', function() {
    const confirmacao = confirm('Tem certeza que deseja limpar todos os dados?')
    
    if (confirmacao) {
        localStorage.clear()
        vagas = []
        listarVagas()
        document.getElementById('detalhesVaga').innerHTML = '' // Limpa os detalhes
    }
})

// Função para alternar entre seções
const linksMenu = document.querySelectorAll('nav a')
const secoes = document.querySelectorAll('.secao')

linksMenu.forEach(link => {
    link.addEventListener('click', function() {
        const alvo = this.getAttribute('data-target')

        secoes.forEach(secao => {
            if (secao.id === alvo) {
                secao.classList.add('secao-ativa')
            } else {
                secao.classList.remove('secao-ativa')
            }
        })

        if (alvo === 'vagas-listagem') {
            listarVagas()
        }
    })
})

// Exibir a listagem de vagas por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-target="vagas-listagem"]').click()
})
