function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { usuario: "Wender", idade: 30 };
            const sucesso = false;

            if (sucesso) {
                resolve(dados);
            } else {
                reject("Erro ao buscar dados");
            }
        }, 2000); // Simulando uma espera de 2 segundos
    });
}

buscarDados()
    .then((dados) => console.log("Dados recebidos:", dados))
    .catch((erro) => console.error(erro));
