
function dobro(x) {
    alert('O dobro de ' + x +  'é'  + (x * 2))
}


//dobro(20)

function dizerOla(nome = 'Sem Nome') {
    alert(`Olá, ${nome}!!`)
}

//dizerOla('Wender')

function soma(a,b){
    alert(`A soma entre ${a} e ${b} é ${a + b}`)
}

//soma(5,23)

function criarUsuario(nome, email, senha , tipo='admin') {
    const usuario = {
        nome,
        email,
        senha,
        tipo 
    }

    console.log(usuario)
}



//criarUsuario('Wender','wender.dev@outlook.com','peido')

function muitosParametros(nome,tel,end,aniv) {
    console.log(nome,tel,end,aniv)
}

//muitosParametros('nome','telefone','endereço','aniversario')

function objetoComoParametro(usuario) {
    usuario.nome
    usuario.tel
    usuario.ende
    console.log(usuario)

}

const dadosDoUsuario = {
    nome: '',
    tel: '',
    ende: ''
}

//objetoComoParametro(dadosDoUsuario)

function calcularMedia(a,b) {
    const media = (a + b) /2
    return media
}

const resultado = calcularMedia(7,2)

console.log(resultado)

function criarProduto(nome,preço) {
    const produto = {
    nome,
    preço,
    estoque:1
    }
    return produto
}

const notebook = criarProduto('Notebook Intel Core i5 8GB',3500)

console.log(notebook)

function maiorIdade(idade) {
    if (idade>=18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(maiorIdade(29))
console.log(maiorIdade(12))