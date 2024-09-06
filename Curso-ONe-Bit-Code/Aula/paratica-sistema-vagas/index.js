// Inicializando o array de vagas a partir do localStorage
let vagas = JSON.parse(localStorage.getItem('vagas')) || [];

function listarVagas() {
    if (vagas.length === 0) {
        alert('Não há vagas disponíveis no momento!');
        return;
    } else {
        // Mostra as vagas formatadas
        let listaVagas = vagas.map((vaga, index) => {
            return `Índice: ${index}\nNome: ${vaga.nomeVaga}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`;
        }).join('\n\n');
        alert(listaVagas);
    }
}

function criarVaga() {
    const nomeVaga = prompt('Nome da vaga:');
    const descricao = prompt('Descrição da vaga:');
    const dataLimite = prompt('Data limite para vaga [dd/mm/aa]:');

    const objVaga = { nomeVaga, descricao, dataLimite };

    vagas.push(objVaga);

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
                alert('Inscrever candidato!');
                break;
            case 4:
                alert('Visualizar vaga!');
                break;
            case 5:
                alert('Excluir vaga!');
                break;
            case 6:
                alert('Saindo!');
                break;
            default:
                alert('Opção inválida!');
        }
    } while (opc !== 6);
}

executar();
