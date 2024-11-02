const Account = require("./Account.js")

module.exports = class User {
    constructor(email, fullName) {
        this.email = email
        this.fullName = fullName
        this.account = new Account(this)
    }
}