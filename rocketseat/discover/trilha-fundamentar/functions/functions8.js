/* Usei a própria variável para armazenar os valores. */

let phrase = "Eu gosto de pizza.";
phrase = phrase.split(" "); // O argumento dentro dos parênteses é o modo pelo qual a string será separada.
phrase = phrase.join("_"); // O método .join numa array adiciona o argumento após cada item da mesma.
console.log(phrase.toLowerCase()); // Colocando em minúsculas.