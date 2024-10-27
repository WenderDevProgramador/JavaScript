const Character = require("./Character.js");

class Thief extends Character {
    ata(persoRecebeAtaque) {
        persoRecebeAtaque.ptsvida -= (this.ataque - persoRecebeAtaque.defesa) * 2
    }
}

module.exports = Thief