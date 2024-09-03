
document.getElementById('sessionBtn').addEventListener('click', () => {
    const input = document.getElementById('session')
    sessionStorage.setItem('informação',input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', () => {
    const info = sessionStorage.getItem('informação')
    alert(info)
})

document.getElementById('localBtn').addEventListener('click', () => {
    const input = document.getElementById('local')
    localStorage.setItem('info',input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click',() => {
    const info = localStorage.getItem('info')
    alert(info)
})

document.getElementById('cookieBtn').addEventListener('click',() => {
    const input = document.getElementById('cookie')
    //cookieName=value; expires=UTCStringDate; path/;
    const cookie = 'info=' + input.value + ';'
    const expires = 'expires=' + new Date(2024,8,30) + ';'
    const path = 'path=/;'
    //cookieName=value; expires=UTCStringDate; path/;
    const cookie1 = document.cookie = cookie + expires + path
    input.value = ''
    console.log(cookie1)
})


document.getElementById('cookie2Btn').addEventListener('click',() => {
    const input = document.getElementById('cookie2')
    //cookieName=value; expires=UTCStringDate; path/;
    const cookie = 'info2=' + input.value + ';'
    const expires = 'expires=' + new Date(2024,8,30) + ';'
    const path = 'path=/;'
    //cookieName=value; expires=UTCStringDate; path/;
    const cookie2 = document.cookie = cookie + expires + path
    input.value = ''
    console.log(cookie2)
})