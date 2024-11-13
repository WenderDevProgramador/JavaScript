// Promises

const p = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    
    setTimeout(() => {
        if(true) {
            reject(false)
        }
        console.log('Resolvendo a promise...')
        resolve(true)
    },2000)
})
 
console.log(p)
setTimeout(() => {
    console.log(p)
    
},4000)
