class Vehicle {
    move() {
        console.log('O veículo está se movendo.')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo.')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O navio está navegando')
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log(`Aeronave está voando a  ${speed} KM/hora`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()
/*
delorean.move()
blackPearl.move()
epoch.move(900) */

function start(vehicle) {
    console.log('Iniciando um veículo')
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)