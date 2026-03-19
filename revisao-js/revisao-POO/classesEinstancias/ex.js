
class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        if(this.email === email && this.password === password) {
            console.log('Login successful!');
        } else {
            console.log('Invalid email or password.');
        }
    }
}


class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity) {  
        this.inStock += quantity;
    }

    calculateDiscount(discountPercentage) {
        return this.price * (discountPercentage / 100);
    }

}