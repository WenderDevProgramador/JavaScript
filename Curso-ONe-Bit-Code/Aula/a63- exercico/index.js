/*
    Construa uma página HTML contendo um formulário de registro com os campos nome, email e senha onde , ao submeter o formulário, deverá ser feita uma validação para verificar se o email é um email válido e se a senha atende as regras mínimas de segurança.

    Para que o email sejá válido ele deve possuir: 

    @ texto antes do @ pelo menos 2 caracteres, números ou_

    Texto após o @ com pelo menos 2 caracteres

    Um ponto seguido de mais texto pelo menos 2 caracteres após o text após o @ 

    ex: xx@xx.xx


    Para que o senha sejá válido ele deve possuir:

    1 minúscula
    1 maiúscula
    1 número 
    1 Caractere especial
    8 caracteres


    Validações em funções separadas , apresentando mensagens apropriadas e evitando que o erro apareça no console do navegador.
*/

function validateEmail(email) {
    if (!email.match(/^\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/)) {
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password) {
    if (
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/\d/) ||
        !password.match(/[^a-zA-Z\s0-9]/)
    ) {
        const err = new Error('Senha invalida')
        err.input = 'senha'
        throw err
    }
}


function resetFormStyles(inputs) {
    Object.entries(inputs).forEach(([key, element]) => {
        if (element) {
            element.classList.remove('success', 'error')
        }
        const errorElement = document.querySelector(`#${key}-error`)
        if (errorElement) {
            errorElement.textContent = ''
        }
    })
}

const userInputs = {
    name: document.querySelector('#nome'),
    email: document.querySelector('#email'),
    senha: document.querySelector('#senha')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles(userInputs)

    try {
        if (!userInputs.name.value.trim()) {
            const err = new Error('Nome é obrigatório.')
            err.input = 'name'
            throw err
        }
        userInputs.name.classList.add('success')

        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')

        validatePassword(userInputs.senha.value)
        userInputs.senha.classList.add('success')

        if (userInputs.senha.value.length < 6) {
            const err = new Error('A senha deve ter pelo menos 6 caracteres.')
            err.input = 'senha'
            throw err
        }
        userInputs.senha.classList.add('success')

    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})
