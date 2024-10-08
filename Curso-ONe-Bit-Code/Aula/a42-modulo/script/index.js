import { calculete } from "./function.js"
import {main,root,input,resultinput} from "./variaveis.js"


//Função para que as teclas funcionem em conjunto como o mouse

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
    const copiar = document.getElementById('copyToClipboard')
    const resuldado = document.getElementById('result')
    resuldado.value = ''
    copiar.innerText = 'Copy'
    copiar.classList.remove('success')
    resultinput.classList.remove('error')

})

document.getElementById('equal').addEventListener('click', calculete)


//Função que detecta o evento quando uma tecla for acionada no teclado e verifica se a tecla selecionada esta dentro do array se tiver a tecla ira aparecer dentro do input

input.addEventListener('keydown', (ev) => {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if (ev.key === 'Enter') {
        calculete()
    }
})

//Mostrar e copiar o resultado da calculadora

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultinput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

//Trocar o tema da pagina

document.getElementById('themeSwitcher').addEventListener('click', () => {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'

    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', ' #f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})


