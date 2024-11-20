const addButton = document.querySelector('#addJogador');
const removeButton = document.querySelector('#removerJogador');
const ul = document.querySelector('ul');

addButton.addEventListener('click', () => {
    const nome = document.querySelector('#nome').value;
    const camisa = document.querySelector('#camisa').value;
    const posicao = document.querySelector('#posição').value;

    if (!nome || !camisa || !posicao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const jogadorExistente = document.getElementById(camisa);
    if (jogadorExistente) {
        alert('Já existe um jogador com esse número de camisa!');
        return;
    }

    const li = document.createElement('li');
    li.id = camisa;
    li.innerText = `${nome} - Nº ${camisa} - ${posicao}`;

    ul.appendChild(li);

    // Limpar os campos
    document.querySelector('#nome').value = '';
    document.querySelector('#camisa').value = '';
    document.querySelector('#posição').value = '';
});

removeButton.addEventListener('click', () => {
    const idJogador = prompt('Qual o número do jogador a ser removido?');
    const jogador = document.getElementById(idJogador);

    if (!jogador) {
        alert('Jogador não encontrado!');
        return;
    }

    const confirma = confirm('Confirma remover o jogador de número: ' + idJogador);
    if (confirma) {
        ul.removeChild(jogador);
        alert('Jogador removido com sucesso!');
    } else {
        alert('Jogador não removido!');
    }
});
