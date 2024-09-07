// Inicializando o array de vagas a partir do localStorage
let vagas = [];

try {
    const vagasJSON = localStorage.getItem('vagas');
    if (vagasJSON) {
        vagas = JSON.parse(vagasJSON);
        if (!Array.isArray(vagas)) {
            vagas = [];
        }
    }
} catch (error) {
    console.error('Erro ao ler o localStorage:', error);
    vagas = [];
}

// Função para listar as vagas disponíveis
function listarVagas() {
    const mostrarVagas = document.getElementById('MostrarVagas');
    mostrarVagas.innerHTML = ''; // Limpa o conteúdo da seção antes de listar as vagas

    if (vagas.length === 0) {
        alert('Não há vagas disponíveis no momento!');
        return;
    } else {
        vagas.forEach((vaga, index) => {
            // Cria a div para a vaga
            const vagaDiv = document.createElement('div');
            vagaDiv.classList.add('DivVagas');

            // Adiciona as informações da vaga
            vagaDiv.innerHTML = `
                <h3>${vaga.nomeVaga}</h3>
                <p>Descrição: ${vaga.descricao}</p>
                <p>Data Limite: ${vaga.dataLimite}</p>
                <p>Nº de Candidatos: ${vaga.candidatos.length}</p>
            `;

            // Botão para inscrever candidato
            const botaoInscrever = document.createElement('button');
            botaoInscrever.textContent = 'Inscrever Candidato';
            botaoInscrever.addEventListener('click', () => {
                const nomeCandidato = prompt('Nome do candidato:');
                if (nomeCandidato) {
                    const confirmacao = confirm(`Confirmar inscrição de ${nomeCandidato} na vaga ${vaga.nomeVaga}?`);
                    if (confirmacao) {
                        vagas[index].candidatos.push(nomeCandidato);
                        localStorage.setItem('vagas', JSON.stringify(vagas));
                        alert('Candidato inscrito!');
                        listarVagas(); // Atualiza a lista de vagas
                    }
                }
            });
            vagaDiv.appendChild(botaoInscrever);

            // Botão para ver candidatos
            const botaoVerCandidatos = document.createElement('button');
            botaoVerCandidatos.textContent = 'Ver Candidatos';
            let divCandidatos = null;

            botaoVerCandidatos.addEventListener('click', () => {
                if (divCandidatos) {
                    divCandidatos.remove(); // Fecha a div se já estiver aberta
                    divCandidatos = null;
                } else {
                    // Cria a div para mostrar os candidatos
                    divCandidatos = document.createElement('div');
                    divCandidatos.classList.add('DivCandidatos');
                    if (vaga.candidatos.length > 0) {
                        divCandidatos.innerHTML = vaga.candidatos.map((candidato, i) => `
                            <p>ID: ${i + 1} - Nome: ${candidato}</p>
                        `).join('');
                    } else {
                        divCandidatos.innerHTML = '<p>Nenhum candidato inscrito.</p>';
                    }
                    vagaDiv.appendChild(divCandidatos);
                }
            });
            vagaDiv.appendChild(botaoVerCandidatos);

            // Botão de excluir vaga, inicialmente oculto
            const botaoExcluir = document.createElement('button');
            botaoExcluir.textContent = 'Excluir Vaga';
            // Inicialmente oculto
            botaoExcluir.addEventListener('click', () => {
                const confirmacao = confirm(`Confirma a exclusão da vaga ${vaga.nomeVaga}?`);
                if (confirmacao) {
                    vagas.splice(index, 1);
                    localStorage.setItem('vagas', JSON.stringify(vagas));
                    mostrarVagas.removeChild(vagaDiv); // Remove a div do DOM
                    alert('Vaga excluída!');
                }
            });
            vagaDiv.appendChild(botaoExcluir);


            // Adiciona a div da vaga na seção
            mostrarVagas.appendChild(vagaDiv);
        });
    }
}

// Adicionando os eventos para os botões do menu
document.getElementById('Vagasdisponiveis').addEventListener('click', listarVagas);
document.getElementById('CriarVaga').addEventListener('click', criarVaga);
document.getElementById('VerVaga').addEventListener('click', visualizarVaga);
document.getElementById('inscreverCandidato').addEventListener('click', inscreverCandidato);
document.getElementById('excluirVaga').addEventListener('click', excluirVaga);

function criarVaga() {
    const nomeVaga = prompt('Nome da vaga:');
    const descricao = prompt('Descrição da vaga:');
    const dataLimite = prompt('Data limite para vaga [dd/mm/aa]:');

    const confirma = confirm(`Deseja criar uma nova vaga com essas informações? 
    ${nomeVaga},
    ${descricao},
    ${dataLimite}`);

    if (confirma) {
        const objVaga = { nomeVaga, descricao, dataLimite, candidatos: [] };

        vagas.push(objVaga);
        localStorage.setItem('vagas', JSON.stringify(vagas));
        alert('Vaga criada!');
    } else {
        alert('Os dados não foram salvos!');
    }
}

function visualizarVaga() {
    const nVaga = parseFloat(prompt('Digite o número do índice da vaga para obter detalhes: '));

    if (nVaga < vagas.length && nVaga >= 0) {
        let cand = vagas[nVaga].candidatos.map((elementos, indice) => {
            return `Nº ${indice} - ${elementos} \n`;
        }).join('');

        alert(`Detalhe da vaga:
        Nome: ${vagas[nVaga].nomeVaga}
        Descrição: ${vagas[nVaga].descricao}
        Data Limite: ${vagas[nVaga].dataLimite}
        Nº de candidatos: ${vagas[nVaga].candidatos.length}
        Candidatos: ${cand}`);
    } else {
        alert('Número do índice inválido!');
    }
}

function excluirVaga() {
    const nVaga = parseFloat(prompt('Qual o índice da vaga para ser excluída?'));

    if (nVaga < vagas.length && nVaga >= 0) {
        const confirmacao = confirm(`Confirma a exclusão da vaga ${vagas[nVaga].nomeVaga}?`);

        if (confirmacao) {
            vagas.splice(nVaga, 1);
            localStorage.setItem('vagas', JSON.stringify(vagas));
            alert('Vaga excluída com sucesso!');
        } else {
            alert('Vaga não excluída!');
        }
    } else {
        alert('Índice informado não é válido!');
    }
}
