class veiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }

    mover(){
        console.log(`O ${this.tipo} está se movendo`)
    }
}

class carro extends veiculo {


    mover() {
        console.log(`O carro está se movendo`)
    }

}

class aviao extends veiculo {

    mover(velociadade) {
        console.log(`O avião está voando a uma velocidade de ${velociadade} km/h`)
    }   
}

class barco extends veiculo {

    mover() {
        console.log(`O barco está navegando`)
    }
}

const meuCarro = new carro('carro');
const meuAviao = new aviao('avião');
const meuBarco = new barco('barco');

meuCarro.mover(); // O carro está se movendo
meuAviao.mover(800); // O avião está voando
meuBarco.mover(); // O barco está navegando

