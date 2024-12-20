document.getElementById('form-confirmacao').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
        // Enviar confirmação pelo EmailJS
        enviarMensagem(nome, email);

        alert('Confirmação enviada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function enviarMensagem(nome, email) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_name: nome,
        to_email: email,
    })
        .then(() => console.log('Mensagem enviada!'))
        .catch(err => console.error('Erro ao enviar mensagem:', err));
}

const linkWhatsApp = `https://api.whatsapp.com/send?phone=5561993578692&text=Olá, confirmo minha presença no Chá de Casa Nova!`;
window.open(linkWhatsApp, '_blank');

