class Product {
    constructor(name,description,price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock (quant) {
        this.inStock += quant
    }

    calculateDiscount (desconto) {
        return this.price - (this.price * desconto / 100);
    }
}

module.exports = Product