const veiculo1 = prompt('Informe o nome do primeiro veiculo:')

const velocidade1 = parseFloat(prompt('Informe a velocidade do veículo:'))

const veiculo2 = prompt('Informe o nome do segundo veículo:')

const velocidade2 = parseFloat(prompt('Informe a velocidade do veículo:'))

if (velocidade1 > velocidade2) {
    alert(`O veículo ${veiculo1} é mais rapido que o veículo ${veiculo2}!!`) 
} else if (velocidade1 < velocidade2) {
    alert(`O veículo ${veiculo2} é mais rapido que o veículo ${veiculo1}`)
} else {
    alert('A velocidade dos dois veiculos são iguais!!')
}