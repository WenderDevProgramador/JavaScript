const Product = require("./Product");

module.exports = class Poster extends Product {
    constructor(name, descriiption, heigth, width, price, inStock = 0) {
        super(name, descriiption, price, inStock)
        this.heigth = heigth
        this.width = width
    }
}