function claro() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor ='#f1f5f9'
    
}

function escuro() {
    document.body.style.color ='#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

document.getElementById("lightBtn").addEventListener('click',claro)

document.getElementById('darkBtn').addEventListener('click',escuro)



function trocarTema() {
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-light')
}

document.getElementById('switchBtn').addEventListener('click',trocarTema)