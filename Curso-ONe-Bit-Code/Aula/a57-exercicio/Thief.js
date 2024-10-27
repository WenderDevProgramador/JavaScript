const Character = require("./Character.js");

class Thief extends Character {
    ataque(persoRecebeAtaque) {
        persoRecebeAtaque.ptsvida -= (this.ataque - persoRecebeAtaque.defesa) * 2
    }
}

module.exports = Thief