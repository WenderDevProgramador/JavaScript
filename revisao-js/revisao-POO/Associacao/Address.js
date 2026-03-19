class Address {
    constructor(street, city, neighborhood, state, number) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.number = number;
        this.neighborhood = neighborhood;
    }

    fullAdress() {
        return `Rua ${this.street}, nº${this.number} - ${this.neighborhood}, ${this.city} - ${this.state}`;
    }
}

module.exports = Address;