function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo resolvida.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado.')
        }, 2000)
    })
}

const p = execute()

console.log(p)


setTimeout(() => {
    console.log(p)
},5000)