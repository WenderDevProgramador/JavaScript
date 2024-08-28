//Elementos que seram ultilizados.

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultinput = document.getElementById('result')

//Função para que as teclas funcionem em conjunto como o mouse

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click',()=> {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click',() => {
    input.value = ''
    input.focus()
})

document.getElementById('equal').addEventListener('click',calculete)


//Valores das teclas da calculadora
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
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

//Função que calcula o resultado
function calculete() {
    const result = eval(input.value)
    resultinput.value = result

}


