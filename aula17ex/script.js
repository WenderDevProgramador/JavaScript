let num = document.querySelector('input#ifnum')
let list = document.querySelector('select#iflista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inlist(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
} 
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma/tot
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} valores adicionados.</p> <br>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p> <br>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p><br>`
        res.innerHTML += `<p>A soma de todos os valores atribuidos é ${soma}</p><br>`
        res.innerHTML += `<p>A média de todos os valores atribuidos é ${media}</p><br>`
    }
}