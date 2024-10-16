
class User {
    constructor (fullname,email,password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log('Login efetuado!')
        } else {
            console.log('Dados incorretos!')
        }
        
        
    }
}

const john = new User('Jhon Doe','john@email.com','1234')
john.login('john@email.com','1234')

class Product {
    constructor (name,description,price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quant) {
        this.inStock += quant
    }

    calculateDiscount(desc) {
        return this.price * ((100 - desc) / 100)
    }
}

const watch = new Product('Relógio', '...', 80)
watch.addToStock(99)
const desconto = watch.calculateDiscount(15)
console.log(desconto)
console.log(watch)