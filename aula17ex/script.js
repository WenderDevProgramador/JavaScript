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
        window.alert('Tudo ok')
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
} 
}
