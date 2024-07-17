function Clicou() {
    let num = window.document.getElementById('inum')
    let tabu = window.document.getElementById('itabuada')
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um número.')
    } else {
        let n = Number(num.value)
        let c = 1
        tabu.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tabu.appendChild(item)
            c = c + 1
        }
    }


}