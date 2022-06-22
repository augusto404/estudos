// Exemplo para por no terminal:
// node greetings.js --name "Purple Avocado" --greeting "Prazer em conhece-lo(a)!"

const flag = require("./getFlag");
console.log(`Olá ${flag("--name")}. ${flag("--greeting")}`);