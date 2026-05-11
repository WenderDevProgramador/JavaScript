const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthr = new Mage('Arthr', 100, 20, 10, 15);
const merlin = new Thief('Merlin', 80, 25, 5, 20);
const lancelot = new Warrior('Lancelot', 90, 30, 8, 25);

console.table({arthr, merlin, lancelot});

lancelot.switchStance();
arthr.attack(lancelot);
merlin.attack(arthr);

lancelot.switchStance();
lancelot.attack(merlin);
arthr.heal(arthr);



console.table({arthr, merlin, lancelot});