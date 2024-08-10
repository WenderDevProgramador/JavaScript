
const vagas = [];

function exibirMenu() {
    const opção = parseFloat(prompt(`== Sistema de Vagas de Emprego ==

Escolha uma das opções:
1 - Vagas disponíveis.
2 - Criar nova vaga.
3 - Visualizar uma vaga.
4 - Inscrever candidato para vaga.
5 - Excluir uma vaga.
6 - Sair.`));

    return opção;
}

function executar() {
    let opção;
    do {
        opção = exibirMenu();

        switch (opção) {
            case 1:
                listarVagas();
                break;
            case 2:
                criarVaga();
                break;
            case 3:
                exibirVaga();
                break;
            case 4:
                inscreverCandidato();
                break;
            case 5:
                excluirVaga();
                break;
            case 6:
                alert('Saindo...');
                break;
            default:
                alert('Opção inválida!');
        }
    } while (opção !== 6);
}

function criarVaga() {
    const nome = prompt('Nome da vaga:');
    const descrição = prompt('Descrição da vaga:');
    const data = prompt('Data limite para inscrição: [dd/mm/aaaa]');

    const confirmação = confirm(`Confirme os dados para cadastrar:
Nome: ${nome}
Descrição: ${descrição}
Data limite: ${data}`);

    if (confirmação) {
        const novaVaga = { nome, descrição, data, candidatos: [] };
        vagas.push(novaVaga);
        alert('Vaga adicionada!');
    } else {
        alert('Vaga não adicionada!');
    }
}

function listarVagas() {
    if (vagas.length === 0) {
        alert('No momento não há vagas!');
    } else {
        const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
            return textoFinal += `Nº ${indice} - ${vaga.nome} - Total candidatos: ${vaga.candidatos.length}\n`;
        }, '');

        alert(vagasEmTexto);
    }
}

function inscreverCandidato() {
    if (vagas.length === 0) {
        alert('Não há vagas para fazer inscrição.');
        return;
    }

    const candidato = prompt('Nome candidato:');
    const indice = parseInt(prompt('Índice da vaga:'), 10);
    
    if (isNaN(indice) || indice < 0 || indice >= vagas.length) {
        alert('Índice inválido!');
        return;
    }

    const vaga = vagas[indice];

    const confirmação = confirm(`Confirme os dados para cadastro:
Inscrever ${candidato} na vaga ${indice}?
Nome: ${vaga.nome} 
Descrição: ${vaga.descrição} 
Data limite: ${vaga.data}`);

    if (confirmação) {
        vaga.candidatos.push(candidato);
        alert('Inscrição finalizada!');
    } else {
        alert('Inscrição cancelada!');
    }
}

function excluirVaga() {
    if (vagas.length === 0) {
        alert('Não há vagas para excluir.');
        return;
    }

    const indice = parseInt(prompt('Informe o índice da vaga para excluir:'), 10);

    if (isNaN(indice) || indice < 0 || indice >= vagas.length) {
        alert('Índice inválido!');
        return;
    }

    const vaga = vagas[indice];

    const confirmação = confirm(`Confirma a exclusão da vaga ${indice}?
Nome: ${vaga.nome}
Descrição: ${vaga.descrição}
Data limite: ${vaga.data}`);

    if (confirmação) {
        vagas.splice(indice, 1);
        alert('Vaga excluída!');
    } else {
        alert('Vaga mantida!');
    }
}

function exibirVaga() {
    if (vagas.length === 0) {
        alert('Não há vagas a serem exibidas.');
        return;
    }

    const indice = parseInt(prompt('Informe o índice da vaga:'), 10);

    if (isNaN(indice) || indice < 0 || indice >= vagas.length) {
        alert('Índice inválido!');
        return;
    }

    const vaga = vagas[indice];
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
        return `${textoFinal}\n - ${candidato}`;
    }, '');

    alert(`Vaga Nº ${indice}
Nome: ${vaga.nome}
Descrição: ${vaga.descrição}
Data limite: ${vaga.data}
Quantidade de candidatos: ${vaga.candidatos.length}
Candidatos:
${candidatosEmTexto}`);
}

executar();


