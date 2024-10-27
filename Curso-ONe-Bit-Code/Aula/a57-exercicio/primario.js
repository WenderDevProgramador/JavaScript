const Character = require("./Character.js");
const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

/* Crie as seguintes classes:

-Uma classe Character que representa um personagem de um jogo.

Atributos:
    . Nome , pontos de vida, de ataque e defesa
Metodo:
    . Um metodo de ataque que subitrai pontos de vidas dos outros personagens alvos.

-Uma classe Thief que representa um personagem de um tipo diferente.

Atributos:
    . Nome , pontos de vida, de ataque e defesa
Metodo:
    . Um metodo de ataque que subitrai pontos de vidas dos outros personagens alvos. Aqui o calculo de ataque será 2x mais forte.


-Uma classe Mage que representa outro tipo de personagem e tambem herda de Character.

Atributos:
    . Nome, pontos de magia , pontos de vida, de ataque e defesa
Metodo:
    . Um metodo de ataque que subitrai pontos de vidas dos outros personagens alvos. Aqui o ataque irá considerar e somar pontos de margia.
    . Um metodo de curar outros personagem , aumentara os pontos de vida passando o argumento de duas vezes os pontos de magia do personagem atual.

- Uma classe Warrior que representa outro tipo de personagem e também herda de Character.
    
Atributos:
    . Nome, pontos de escudo, posição de ataque ou defesa , pontos de vida, de ataque e defesa atrelado a posição.
Metodo:
    . Um metodo de ataque que subitrai pontos de vidas dos outros personagens alvos. Um metodo para cada posição , defesa ou ataque, de defesa será atrelado aos pontos de escudo. */
// index.js


const zeNaldo = new Mage('Ze Naldo', 90, 4, 2, 14);
const joaBila = new Thief('Jõa Bila', 140, 22, 8);
const babu = new Warrior('Babu', 200, 14, 12, 4);

console.table({ zeNaldo, joaBila, babu });

// Testando ataques
joaBila.ata(zeNaldo);
console.log("Após o ataque de joaBila em zeNaldo:");
console.table({ zeNaldo, joaBila, babu });

babu.mudarPosicao();
zeNaldo.ata(babu);
console.log("Após o ataque de zeNaldo em babu:");
console.table({ zeNaldo, joaBila, babu });
