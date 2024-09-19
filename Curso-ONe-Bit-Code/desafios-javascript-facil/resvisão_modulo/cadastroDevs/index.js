function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text

    return label
}

function createInput(id, value = '', name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.type = type
    input.name = name
    input.placeholder = placeholder

    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputsRows = 0

addTechBtn.addEventListener('click', (ev) => {
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputsRows
    inputsRows++

    newRow.id = 'inputsRow-' + rowIndex
    newRow.className = 'inputsRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, '', 'techName') // valor vazio ao invés de null

    const expLabel = createLabel(' Experiência: ')

    const id1 = 'expRadio-' + rowIndex + '-1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio-' + rowIndex + '-2'
    const expRadio2 = createInput(id2, '2-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('2-4 anos', id2)

    const id3 = 'expRadio-' + rowIndex + '-3'
    const expRadio3 = createInput(id3, '+ 5 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('+ 5 anos', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', () => {
        stackInputs.removeChild(newRow)
    })

    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)
    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const fullNameInput = document.getElementById('fullname')
    const inputsRow = document.querySelectorAll('.inputsRow')

    let technologies = []

    inputsRow.forEach((row) => {
        const techName = row.querySelector('input[name="techName"]').value
        const techExp = row.querySelector('input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp })
    })

    const newDev = { fullname: fullNameInput.value, technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fullNameInput.value = ''
    inputsRow.forEach((row) => {
        row.remove()
    })

    console.log(developers)
})
