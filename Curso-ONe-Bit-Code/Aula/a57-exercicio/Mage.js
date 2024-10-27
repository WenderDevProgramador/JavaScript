const Character = require("./Character.js");

class Mage extends Character {
    constructor (name, ptsvida, defesa, ataque,magia) {
        super(name, ptsvida, defesa, ataque)
        this.magia = magia
    }

    ataque(persoRecebeAtaque) {
        
        persoRecebeAtaque.ptsvida -= (this.ataque + this.magia) - persoRecebeAtaque.defesa
    }

    cura(persoRecebe) {
        persoRecebe.ptsvida += this.magia * 2
    }
}

module.exports = Mage