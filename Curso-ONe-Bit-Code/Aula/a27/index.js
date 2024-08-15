function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id,value,name,type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addaddTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devform')
const developers = []
let inputRows = 0
addaddTechBtn.addEventListener('click',(ev) => {
    const stackinputs = document.getElementById('stackinputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows ++ 
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'
    const techNameLabel = createLabel('Nome: ', 'techname- ' + rowIndex)
    const technameInput = createInput('techName-'+ rowIndex, null, 'techName')

    newRow.append(
        techNameLabel, technameInput
    )

    stackinputs.append(newRow)
})
