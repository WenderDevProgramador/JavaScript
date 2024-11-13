function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo resolvida.')
        setTimeout(() => {
            if (true) {
                reject('A promise foi rejeitada.')
            } else {
                console.log('Resolvendo a promise...')
                resolve(42)
            }

        }, 2000)
    })
}

const p = execute()

p.then((result) => {
    console.log(`A promise foi resolvida o resultado é ${result}`)
}).catch((reject) => {
    console.log(`A promise foi rejeitada! Motivo: ${reject}`)
}).finally(() => {
    console.log('Processo finalizado.')
})

