const Character = require("./Character.js");

class Warrior extends Character {
    constructor (name, ptsvida, defesa, ataque,escudo){
        super(name, ptsvida, defesa, ataque)
        this.escudo = escudo
        this.posicao = 'ataque'
    }

    ata(persoRecebeAtaque) {
        if (this.posicao === 'ataque') {
            super.ata(persoRecebeAtaque)
        }
        
    }

    mudarPosicao() {
        if(this.posicao === 'ataque') {
            this.posicao = 'defesa'
            this.defesa += this.escudo
        } else {
            this.posicao = 'ataque'
            this.defesa -= this.escudo
        }
    }
}

module.exports = Warrior