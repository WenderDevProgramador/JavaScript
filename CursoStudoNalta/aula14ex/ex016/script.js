function contar() {
    var ini = window.document.getElementById('iinicio')
    var fim = window.document.getElementById('ifim')
    var pass = window.document.getElementById('ipasso')
    var res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p == 0) {
            window.alert('ERRO! Valor do passo invalido.')
            p = 1
            f = 1
        }
        if (i < f) {
            //Contagem progressiva
            for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        } else  {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
    res.innerHTML += `\u{1f3c1}`
        
        
        
    }
}