function escalarJogador() {

    let lista = document.getElementById('lista')
    let ul = document.getElementById('ul')

    let nome = document.getElementById('nome')
    let camisa = document.getElementById('camisa')
    let posição = document.getElementById('posição')

    const confirmação = confirm(`Confirma escalação do atleta ${nome.value}, posição ${posição.value} e camisa Nº ${camisa.value}?`)

    if (confirmação) {

        let newLi = document.createElement('li')
        newLi.id = `camisa-${camisa.value}`  // Atribui o número da camisa como parte do id
        newLi.innerText = `${posição.value}   Nº ${camisa.value} - ${nome.value}`

        ul.appendChild(newLi)
    } else {
        alert('Jogador não escalado!')
    }

    nome.value = ''
    camisa.value = ''
    posição.value = ''



    nome = document.getElementById('nome').value = ''
    camisa = document.getElementById('camisa').value = ''
    posição = document.getElementById('posição').value = ''

}
function removePlayer() {
    const number = document.getElementById("remove").value
    const playerToRemove = document.getElementById(`camisa-${number}`)  // Seleciona o li com o id correspondente ao número da camisa

    if (playerToRemove) {
        const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

        if (confirmation) {
            playerToRemove.remove()  // Remove o elemento li correspondente
            document.getElementById("remove").value = ""
        }
    } else {
        alert("Jogador não encontrado!")
    }
}
