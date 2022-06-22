/* Exportando módulo nativo:
const path = require("path");

console.log(path.basename(__dirname)); */

/* Exportando meus módulos: */
const myModule = require("./exports.js");
console.log(myModule);