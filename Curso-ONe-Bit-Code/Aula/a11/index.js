let imoveis = []
let opção = 0


do {
    opção = parseFloat(prompt(`==  Cadastro de imoveis  ==
    Imoveis já cadastrados = ${imoveis.length}
    
    Digite a opção:
    
    1 - Cadastra um novo imovel.
    2 - Ver imoveis cadastrados.
    3 - Sair.`))

    switch (opção) {
        case 1:
            let cadast = {}
            cadast.proprietario = prompt('Qual o nome do propietario?')
            cadast.quartos = prompt('Quantidade de quartos ?')
            cadast.banheiros = prompt('Quantidade de banheiros?')
            cadast.garagem = prompt('Possui garagem ? [sim/não]')

            const confirmação = confirm(`Dados recebidos:
            Nome : ${cadast.proprietario}
            Quartos : ${cadast.quartos}
            Banheiros: ${cadast.banheiros}
            Garagem: ${cadast.garagem}
            
            Você confirma os dados ?`)

            if (confirmação) {   
                imoveis.push(cadast)
                alert('Dados salvos com sucesso!')
            } else {
                alert('Dados não salvos, retornando ao menu.')
            }
            break
        case 2:
            if (imoveis.length === 0) {
                alert('Ainda não há imoveis cadastrados')
            } else {
            for (let i = 0; i < imoveis.length; i++) {
                alert(`Imovel ${i+1}
                Propietario: ${imoveis[i].proprietario}
                Número de quartos: ${imoveis[i].quartos}
                Número de banheiros: ${imoveis[i].banheiros}
                Possui garagem ? ${imoveis[i].garagem}`) }
            }
            break
        case 3:
            alert('Saindo !!')
            break
        default:
            alert('Opção invalida!!')
    }
} while(opção !== 3)