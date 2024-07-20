
const turista = prompt('Qual é o seu nome?')
let visita = prompt('Você já visitou alguma cidade ? [sim/não]')
let cidade = []
let n = 0
while (visita === 'sim') {
     cid = prompt('Qual cidade você visitou ?')
     cidade.push(cid)
     visita = prompt('Mais alguma cidade ?')
     ++n    
}

alert(`O turista ${turista} fez ${n} visitas as seguintes cidades ${cidade}`)