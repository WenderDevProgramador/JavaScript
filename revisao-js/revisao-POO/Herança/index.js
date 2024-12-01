class Property {
    constructor(area,price) {
        this.area = area
        this.price = price
    }

    calcularMetroQuadrado() {
        return this.price / this.area
    }
}

class House extends Property { }

const land = new Property(100,50000)
const someHouse = new House(250,200000)

class Apartament extends Property {
    constructor(number , area , price) {
        super(area,price)
        this.number = number
    }

    getFloorApartament () {
        const andar = this.number.toString()[0]
        return `${andar}º andar`
    }
}

const apt = new Apartament(500,100,1600000)
console.log(apt)
console.log(apt.getFloorApartament())
console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)
console.log(someHouse.calcularMetroQuadrado())