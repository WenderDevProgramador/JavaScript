function addContact() {
    const contactSection = document.querySelector('#contacts-List')
    

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"

    const ul = document.createElement('ul')

    const nameli = document.createElement('li')
    nameli.innerText = 'Nome: '

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.placeholder = 'Digite o nome'
    nameInput.name = 'fullName'

    nameli.appendChild(nameInput)
    ul.appendChild(nameli)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.placeholder = 'Telefone'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'address'
    adressInput.id = 'address'
    adressInput.placeholder = 'Digite o Endereço'
    addressLi.appendChild(adressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3,ul)

}

function removeContact() {
    const contactSection = document.querySelector('#contacts-List')
    const title = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(title[title.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}