
function criaRLabel(text,htmlFor){
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor
    return label
}

function criarInput(id,value,name,type='text',placeholder='') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const adicionar = document.getElementById('addTechBtn')
const form = document.getElementById('devform')
const desenvolvedores = []
let contInput = 0

adicionar.addEventListener('click',(ev)=>{
    const ul = document.getElementById('stackinputs')
    const li = document.createElement('li')
    const nomeId = contInput
    contInput++
    li.id = 'inputRow' + nomeId
    li.className = 'inputRow'
    const techLabel = criaRLabel('Nome: ','techname-' + nomeId)
    const techInput = criarInput('techname-' + nomeId,null,'techname')

    const experiencia = criaRLabel('Experiência: ')

    const id1 = 'ExpRadio' + nomeId + '.1'
    const expInput1 = criarInput(id1,'0-2 anos','techExp-' + nomeId,'radio')
    const explabel1 = criaRLabel('0-2 anos',id1)

    const id2 = 'ExpRadio' + nomeId + '.2'
    const expInput2 = criarInput(id2,'3-4 anos','techExp-' + nomeId,'radio')
    const explabel2 = criaRLabel('3-4 anos',id2)

    const id3 = 'ExpRadio' + nomeId + '.3'
    const expInput3 = criarInput(id3,'5 + anos','techExp-' + nomeId,'radio')
    const explabel3 = criaRLabel('5 + anos',id3)

    const remover = document.createElement('button')
    remover.type = 'button'
    remover.innerText = 'Remover'

    remover.addEventListener('click',(ev)=> {
        ul.removeChild(li)
    })



    li.append(techLabel,techInput,experiencia,expInput1,explabel1,expInput2,explabel2,expInput3,explabel3,remover)
    ul.append(li)
})

form.addEventListener('submit',(ev)=> {
    ev.preventDefault()

    const nomeInput = document.getElementById('fullname')
    const liTodas = document.querySelectorAll('.inputRow')

    let tecnologias = []

    liTodas.forEach((linha) => {
        const novatech = document.querySelector('#'+ linha.id + ' input[name="techname"]').value
        const tempoExp = document.querySelector('#'+ linha.id + ' input[type="radio"]:checked').value

        tecnologias.push({name:novatech,exp:tempoExp})
    })

    const newDev = {Nomecompleto: nomeInput.value,tecnologias}

    desenvolvedores.push(newDev)
    alert('Desenvolvedor cadastrado com sucesso!')


    nomeInput.value = ''
    liTodas.forEach((linha) => {
        linha.remove()
    })

    console.log(desenvolvedores)

})