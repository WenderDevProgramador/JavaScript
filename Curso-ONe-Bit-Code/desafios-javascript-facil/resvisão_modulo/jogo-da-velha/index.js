
const boardRegions = document.querySelectorAll('#gameBoard span');
let vBoard = [];
let currentPlayer = '';

// Atualiza o título com o nome do jogador da vez
function updateTitle() {
    const playerInput = document.getElementById(currentPlayer);
    document.getElementById('turnPlayer').innerText = playerInput.value;
}

// Inicializa ou reinicia o jogo
function initializeGame() {
    vBoard = Array.from({ length: 3 }, () => ['', '', '']);
    currentPlayer = 'player1';
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>';
    updateTitle();
    
    boardRegions.forEach((region) => {
        region.classList.remove('win');
        region.innerText = '';
        region.classList.add('cursor-pointer');
        region.addEventListener('click', handleBoardClick);
    });
}

// Desabilita uma região do tabuleiro para impedir cliques
function disableRegion(region) {
    region.classList.remove('cursor-pointer');
    region.removeEventListener('click', handleBoardClick);
}

// Verifica se há uma condição de vitória e retorna as regiões vencedoras, se houver
function getWinningRegions() {
    const winPatterns = [
        ['0.0', '0.1', '0.2'], // Linha 1
        ['1.0', '1.1', '1.2'], // Linha 2
        ['2.0', '2.1', '2.2'], // Linha 3
        ['0.0', '1.0', '2.0'], // Coluna 1
        ['0.1', '1.1', '2.1'], // Coluna 2
        ['0.2', '1.2', '2.2'], // Coluna 3
        ['0.0', '1.1', '2.2'], // Diagonal principal
        ['0.2', '1.1', '2.0']  // Diagonal secundária
    ];
    
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        const [rowA, colA] = a.split('.');
        const [rowB, colB] = b.split('.');
        const [rowC, colC] = c.split('.');
        
        if (vBoard[rowA][colA] && vBoard[rowA][colA] === vBoard[rowB][colB] && vBoard[rowA][colA] === vBoard[rowC][colC]) {
            return pattern;
        }
    }
    return [];
}

// Exibe a mensagem de vitória e destaca as regiões vencedoras
function handleWin(regions) {
    regions.forEach((region) => {
        document.querySelector(`[data-region="${region}"]`).classList.add('win');
    });
    const playerName = document.getElementById(currentPlayer).value;
    document.querySelector('h2').innerHTML = `${playerName} VENCEU!!!`;
}

// Lida com o clique nas regiões do tabuleiro
function handleBoardClick(event) {
    const span = event.currentTarget;
    const region = span.dataset.region;
    const [row, column] = region.split('.');

    // Atualiza o tabuleiro visual e lógico com o símbolo do jogador
    span.innerText = currentPlayer === 'player1' ? 'X' : 'O';
    vBoard[row][column] = span.innerText;
    
    console.clear();
    console.table(vBoard);

    disableRegion(span);

    // Verifica se alguém venceu ou se houve empate
    const winRegions = getWinningRegions();
    if (winRegions.length > 0) {
        handleWin(winRegions);
    } else if (vBoard.flat().includes('')) { // Checa se ainda há jogadas disponíveis
        currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
        updateTitle();
    } else {
        document.querySelector('h2').innerHTML = 'EMPATE!';
    }
}

// Inicia o jogo ao clicar no botão de início
document.getElementById('start').addEventListener('click', initializeGame);
