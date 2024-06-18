function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas...` 
    if (hora >= 0 && hora < 12) {
        //Bom Dia 
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F2B988'
    } else if (hora > 12 && hora < 18) {
        //Boa Tarde
        img.src = 'imagens/Tarde.png'
        document.body.style.background = '#D9D59A'
    } else {
        img.src = 'imagens/Noite.png'
        document.body.style.background = '#5F4C73'
    }
}