class Character {
    constructor(name, ptsvida, defesa, ataque) {
        this.name = name
        this.ptsvida = ptsvida 
        this.defesa = defesa
        this.ataque = ataque
    }

    ata(persoRecebeAtaque) {
        persoRecebeAtaque.ptsvida -= this.ataque - persoRecebeAtaque.defesa
    }
}

module.exports = Character