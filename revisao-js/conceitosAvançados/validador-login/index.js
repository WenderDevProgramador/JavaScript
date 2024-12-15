function validadorEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido!'); // Corrigir o texto do erro, se necessário
        err.input = 'email'; // Associar o campo ao erro
        throw err; // Lançar explicitamente o erro
    }
}

function validadorPassword(password) {
    if(
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/\d/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error('Senha inválida!')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles() {
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
};

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    // Limpando mensagens de erro e classes antes de validar
    Object.values(userInputs).forEach(input => {
        input.classList.remove('success', 'error');
        const errorSpan = document.querySelector(`#${input.id}-error`);
        if (errorSpan) {
            errorSpan.textContent = ''; // Remover mensagens de erro anteriores
        }
    });

    try {
        // Supondo que o nome e senha estão sempre corretos por enquanto
        userInputs.name.classList.add('success'); 
        userInputs.password.classList.add('success');

        // Validar email
        validadorEmail(userInputs.email.value);
        userInputs.email.classList.add('success');

        validadorPassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    } catch (err) {
        // Adicionar a classe de erro ao campo e exibir a mensagem
        if (err.input && userInputs[err.input]) {
            userInputs[err.input].classList.add('error');
            document.querySelector(`#${err.input}-error`).textContent = err.message;
        } else {
            console.error('Erro inesperado:', err); // Tratamento de erros desconhecidos
        }
    }
});
