// Trabalhando módulos CommonJS  --> Não é suportado no navegador. Essa é a forma padrão usada para trablhar no node. Será usado eventualmente.

// Usamos dentro de cada arquivo oque queremos exportar.
// ex: module.exports = render
// Na pagina atual vamos importar da seguinte forma como mostra o ex abaixo:

const render = require("./render.js");
const store = require("./store.js");

console.log('Aplicação iniciada.');
render();
store();
console.log('Aplicação finalizada.');
