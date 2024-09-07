// Inicializando o array de vagas a partir do localStorage
let vagas = JSON.parse(localStorage.getItem('vagas')) || [];

function visualizarVaga() {
    const nVaga = parseFloat(prompt('Digite o número do índice da vaga para obter detalhes: '))



    if (nVaga < vagas.length && nVaga >= 0) {
        let cand = vagas[nVaga].candidatos.map((elementos, indice) => {
            return `Nº ${indice} - ${elementos} \n`
        }).join()

        return alert(`Detalhe da vaga:
        Nome: ${vagas[nVaga].nomeVaga}
        Descrição: ${vagas[nVaga].descricao}
        Data Limite: ${vagas[nVaga].dataLimite}
        Nº de candidatos: ${vagas[nVaga].candidatos.length}
        Candidatos: ${cand}`)



    } else {
        alert('Número do índice invalido!')
        return
    }
}


function listarVagas() {
    if (vagas.length === 0) {
        alert('Não há vagas disponíveis no momento!');
        return;
    } else {
        // Mostra as vagas formatadas
        let listaVagas = vagas.map((vaga, index) => {
            return `Índice: ${index}\nNome: ${vaga.nomeVaga}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}\n Nº Candidatos: ${vaga.candidatos.length}`;
        }).join('\n\n');
        alert(listaVagas);
    }
}

function criarVaga() {
    const nomeVaga = prompt('Nome da vaga:');
    const descricao = prompt('Descrição da vaga:');
    const dataLimite = prompt('Data limite para vaga [dd/mm/aa]:');

    const confirma = confirm(`Desajá criar uma nova vaga com essas informações? 
    ${nomeVaga},
    ${descricao},
    ${dataLimite}`)

    if (confirma) {
        const objVaga = { nomeVaga, descricao, dataLimite, candidatos: [] };

        vagas.push(objVaga);
        alert('Vaga criada!')
    } else {
        alert('Os dados não foram salvos!')
    }
    // Atualiza o localStorage após criar uma nova vaga
    localStorage.setItem('vagas', JSON.stringify(vagas));
}

function exibirMenu() {
    const opcao = parseFloat(prompt(` ==> Bem-vindo ao sistema de vagas <==
        Escolha uma opção abaixo:
        1- Vagas disponíveis.
        2- Criar nova vaga.
        3- Inscrever candidato.
        4- Visualizar vaga.
        5- Excluir vaga.
        6- Sair.`));

    return opcao;
}

function inscreverCandidato() {
    if (vagas.length > 0) {
        const nomeCandidato = prompt('Nome candidato: ')
        const nVaga = parseFloat(prompt('Digite o índice da vaga para inscrever: '))

        if (nVaga < vagas.length && nVaga >= 0) {
            const confirmação = confirm(`Confirmar candidato ${nomeCandidato} para a vaga ${vagas[nVaga].nomeVaga} ?`)

            if (confirmação) {
                vagas[nVaga].candidatos.push(nomeCandidato)

                localStorage.setItem('vagas', JSON.stringify(vagas));

                alert('Candidato inscrito!')
                return
            } else {
                alert('Candidato não inscrito!')
                return
            }
        } else {
            alert('Índice informado não é valido!')
            return
        }


    } else {
        alert('Não há vagas disponiveis no momento.')
        return
    }
}

function excluirVaga() {
    if (vagas.length === 0) {
        alert('Não há vagas a serem excluida!')
    } else {
        const nVaga = parseFloat(prompt('Qual o índice da vaga para ser excluída?'))

        if (nVaga < vagas.length && nVaga >= 0) {
            const confirmação = confirm(`Confirma a exclusão da vaga ${vagas[nVaga].nomeVaga}?`)

            if (confirmação) {
                vagas.splice(nVaga, 1)

                localStorage.setItem('vagas', JSON.stringify(vagas));

                alert('Vaga deletada!')
                return
            } else {
                alert('Vaga não deletada!')
            }
        } else {
            alert('O índice informado não é valido!')
            return
        }

    }
}

function executar() {
    let opc;

    do {
        opc = exibirMenu();
        switch (opc) {
            case 1:
                listarVagas();
                break;
            case 2:
                criarVaga();
                break;
            case 3:
                inscreverCandidato();
                break;
            case 4:
                visualizarVaga();
                break;
            case 5:
                excluirVaga();
                break;
            case 6:
                alert('Saindo!');
                break;
            default:
                alert('Opção inválida!');
        }
    } while (opc !== 6);
}


executar()