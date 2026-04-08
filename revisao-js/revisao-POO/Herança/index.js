class Property {
    constructor(area, price) {
        this.area = area;
        this.price = price;
    }

    getPricePerSquareMeter() {
        return this.price / this.area;
    }
}

class House extends Property {
    constructor(area, price, numBedrooms) {
        super(area, price);
        this.numBedrooms = numBedrooms;
    }
}

const land = new Property(1000, 50000);
const someHouse = new House(200, 150000, 3);

console.log(land)
console.log(someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof Property)

class Apartment extends Property {
    constructor(area, price, floor) {
        super(area, price);
        this.floor = floor;
    }

    getFloor() {
        return this.floor.slice(0, -2);
    }
}

const someApartment = new Apartment(80, 120000, "501");
console.log(someApartment)
console.log(someApartment.getPricePerSquareMeter())
console.log(someApartment.getFloor())