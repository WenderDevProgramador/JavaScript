const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',()=> {
    input.value =  'Olá mundo!' 
    input.getAttribute('value')
})

document.getElementById('type').addEventListener('click', () => {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    //input.setAttribute('type','radio')
    
})

document.getElementById('placeholder').addEventListener('click', ()=> {
    input.placeholder = 'Escreva aqui'
})

document.getElementById('disable').addEventListener('click',()=> {
    //input.setAttribute('disabled', !input.disabled)
    input.disabled = !input.disabled
})

document.getElementById('data').addEventListener('click', ()=> {
    const data = input.dataset.something
    console.log('O valor do atributo data-something:' + data)
    input.dataset.something = 'Algum outro valor' 
    console.log('Algum outro valor:' + input.dataset.something)
})