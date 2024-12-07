class Vehicle {
    move() {
        console.log('Veiculo está se movendo!')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo!')
    }
}

class Ship extends Vehicle {
    move() {
        console.log( 'O navio está navegando!')
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log('O avião está voando! ' + speed + 'km por hora')
    }
}

const delorean = new Car ()
const blackPearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackPearl.move()
epoch.move(800)


const start = (vehicle) => {
    console.log('Iniciando o Veiculo....')
    vehicle.move()

}

start(delorean)
start(blackPearl)
start(epoch)