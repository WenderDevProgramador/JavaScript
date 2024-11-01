const Database = require("./Database.js")
const Author = require("./entities/Author.js")
const User = require("./entities/User.js")
const Book = require("./entities/Book.js")
const Poster = require("./entities/Poster.js")
const Order = require("./entities/Order.js")

module.exports = class App {
    static #database = new Database()

    createUser(name,email,password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthor() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title,synopsis,genre,pages,author,description,price,inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster( name, description, height, width, price, inStock) {
        const poster = new Poster(name,height, width,description,price,inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }

    getorders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }

} 