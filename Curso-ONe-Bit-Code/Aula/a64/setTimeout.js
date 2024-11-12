console.log('Programa iniciado!')

const timeoutId = setTimeout(() => {
    console.log('3 Segundos se passaram após o programa ser iniciado.')
}, 3000 ) 

clearTimeout(timeoutId) // cancela o temporisador  