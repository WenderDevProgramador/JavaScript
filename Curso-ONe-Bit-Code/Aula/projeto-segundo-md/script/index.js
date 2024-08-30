//Elementos que seram ultilizados.
const main = document.querySelector('main')
const input = document.getElementById('input')
const root = document.querySelector(':root')
const resultInput = document.getElementById('result')

//Função para que as teclas funcionem em conjunto como o mouse

document.querySelectorAll('.charKey').forEach((charKeyBnt) => {
    charKeyBnt.addEventListener('click',() => {
        const value = charKeyBnt.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
})

document.getElementById('equal').addEventListener('click',calculate)

//Valores das teclas da calculadora

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//Função que detecta o evento quando uma tecla for acionada no teclado e verifica se a tecla selecionada esta dentro do array se tiver a tecla ira aparecer dentro do input

input.addEventListener('keydown', (ev) => {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0,-1)

    }

    if (ev.key === 'Enter') {
        calculate()
    }
})


//Função que calcula o resultado

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

//Mostrar e copiar o resultado da calculadora

document.getElementById('copyToClipboard').addEventListener('click',(ev) => {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    } else {
       button.innerText = 'Copy'
       button.classList.remove('success')
    }
})

//Trocar o tema da pagina

document.getElementById('themeSwitcher').addEventListener('click',() => {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--primary-color','#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--primary-color','#4dff91')
        main.dataset.theme = 'dark'
    }

    
})


