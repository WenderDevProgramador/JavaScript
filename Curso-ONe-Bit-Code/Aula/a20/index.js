function show() {
    const contactList = document.getElementById('contact-list') 
    console.log(contactList)

    const ListElements = document.getElementsByTagName('li')
    console.log(ListElements)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)
    

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)
    

    const firsContact = document.querySelector('#contact-list > li > label')
    console.log(firsContact)
    
}