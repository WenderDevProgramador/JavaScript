function register (ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const userName = sectionElement.children.username.value
    const senha = sectionElement.children.password.value
    const confirmaSenha = sectionElement.children.passwordConfirmation.value

    if(senha === confirmaSenha) {
        alert('Usuario: ' + userName + ' registrado')
    } else {
        alert('Senhas não conferem!')
    }

    
}


const button = document.getElementById('register-button')

button.addEventListener('click', register)


function removeEvent(){
    button.removeEventListener('click',register)
    alert('Evento removido.')
}


button.addEventListener('mouseover', (ev) => {
    console.log(ev.currentTarget)
})