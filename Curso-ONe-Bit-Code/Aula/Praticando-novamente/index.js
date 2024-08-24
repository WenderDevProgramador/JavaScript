//Variaveis globais a serem usadas

const formulario = document.getElementById('devForm')
const addNova = document.getElementById('addTechBtn')
const desenvolverdores = []
let contIDs = 0

//Funções que serão ultilisadas

function createLabel (text,htmlFor){
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor
    return label
}

function createInput (id,name,value,type='text',placeholder=''){
    const input = document.createElement('input')
    input.id = id
    input.name= name
    input.value = value
    input.type = type
    input.placeholder = placeholder
    return input
}


//Savar dados e limpar campos prenchidos para um novo dev
addNova.addEventListener('click',(ev)=> {
    const ul = document.getElementById('stackInputs')
    const li = document.createElement('li')
    const nomeId = contIDs
    contIDs++
    li.id = 'inputRow' + nomeId
    li.className = 'inputRows'

    const novaLabel = createLabel('Tecnologia: ','techName-'+ nomeId)
    const novoInput = createInput('techName-'+ nomeId,'techName',null,'text')

    const exp = createLabel('Experiência: ')

    const id1 = 'exRadio' + nomeId + '.1'
    const expRadio1 = createInput(id1,'valueName'+ nomeId,'0-2 anos','radio')
    const expLabel1 = createLabel('0-2 anos',id1)

    const id2 = 'exRadio' + nomeId + '.2'
    const expRadio2 = createInput(id2,'valueName'+ nomeId,'2-4 anos','radio')
    const expLabel2 = createLabel('2-4 anos',id2)

    const id3 = 'exRadio' + nomeId + '.3'
    const expRadio3 = createInput(id3,'valueName'+ nomeId,'5 + anos','radio')
    const expLabel3 = createLabel('5 + anos',id3)


    

    const remover = document.createElement('button')
    remover.innerText = 'Remover'
    remover.type = 'button'
    remover.addEventListener('click',(ev)=>{
        ul.removeChild(li)
    })

    li.append(
        novaLabel,novoInput,exp,expRadio1,expLabel1,expRadio2,expLabel2,expRadio3,expLabel3,remover
    )
    ul.append(li)

})

formulario.addEventListener('submit',(ev)=> {
    ev.preventDefault()

    const nomeNoInput = document.getElementById('fullname')
    const liTodas = document.querySelectorAll('.inputRows')
    
    let tecnologias = []

    liTodas.forEach((linha) =>{
        const novaTech = document.querySelector('#' + linha.id + ' input[name="techName"]').value
        const tempoExp = document.querySelector('#' + linha.id + ' input[type="radio"]:checked').value

        tecnologias.push({nome:novaTech, Tempo:tempoExp})
    })

    const newDev = {NomeCompleto: nomeNoInput.value,tecnologias}

    desenvolverdores.push(newDev)
    alert(`Desenvolverdor ${nomeNoInput.value} cadastrado com sucesso!!`)

    nomeNoInput.value = ''
    liTodas.forEach((linha) => { linha.remove() })

    console.log(desenvolverdores)
})

