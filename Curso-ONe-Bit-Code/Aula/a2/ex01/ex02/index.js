const atacante = prompt('Qual é o nome do personagem atacante?')

const poderAtaque = parseFloat(prompt('Qual é o poder de ataque do '+ atacante + '?'))

const defensor = prompt('Qual é o nome do personagem que defende ?')

let pontosVida = parseFloat(prompt('Qual é a pontuação de vida do personagem ?'))

const poderDefesa = parseFloat(prompt('Qual é o poder de defesa?'))

const possuiEscudo = prompt('Possui escudo?')

let danoCausado = 0

if (poderAtaque > poderDefesa && possuiEscudo === 'Não') {
    danoCausado = poderAtaque - poderDefesa
} else if (poderAtaque > poderDefesa && possuiEscudo === 'Sim') {
    danoCausado = (poderAtaque - poderDefesa)/2

}

pontosVida -= danoCausado

alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}
${defensor} possui ainda ${pontosVida}!`)


