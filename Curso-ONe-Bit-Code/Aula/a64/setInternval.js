let seconds = 0

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos!`)
    if (seconds > 10) return clearInterval(intervalId)
    
}, 3000)