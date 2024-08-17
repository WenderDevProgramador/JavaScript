
function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor
    return label
}

function createInput(id, value, name, type = "text", placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devform')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', (ev) => {
    const stackinputs = document.getElementById('stackinputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techname-' + rowIndex)
    const techinput = createInput('techName-' + rowIndex, null, 'techName')

    const experiencia = createLabel('Experiência: ')

    const id1 = 'expRadio' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('0-2 anos', id2)

    const id3 = 'expRadio' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('0-2 anos', id3)

    const removeRowBnt = document.createElement('button')
    removeRowBnt.type = 'button'
    removeRowBnt.innerText = 'Remover'
    removeRowBnt.addEventListener('click', () => {
        stackinputs.removeChild(newRow)
    })




    newRow.append(techNameLabel, techinput, experiencia, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBnt)

    stackinputs.append(newRow)
})

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const fullNameInput = document.getElementById('fullname')
    const inputsRow = document.querySelectorAll('.inputRow')

    let technnologies = []

    inputRows.forEach((row) => {
        const techName = document.querySelector('#' + row.id + 'input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + 'input[type="radio"]:checked').value
        technnologies.push({ name: techName, exp: techExp })
    })

    const newDev = {fullname: fullNameInput.value, technnologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fullNameInput.value = ''
    inputRows.forEach((row)=> {
        row.remove()
    })

    console.log(developers)
})
