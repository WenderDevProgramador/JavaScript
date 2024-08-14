

const form = document.getElementById('orderForm')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]:checked').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salada = ''

    document.querySelectorAll('input[name="salad"]:checked').forEach((item) => {
        salada += `- ${item.value} \n`
    })

    console.log({name, address, breadType, main, salada, observations})

    alert(`Pedido realizado!
    Nome cliente: ${name}
    Endereço: ${address}
    Pão: ${breadType}
    Recheio: ${main}  
    ${salada}
    Observações: ${observations} `)
})
