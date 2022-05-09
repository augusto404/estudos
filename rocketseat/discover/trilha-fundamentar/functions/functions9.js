let techs = ["HTML", "CSS", "JS"];

// Adicionar ao fim.
techs.push("Node.js");
console.log(techs);

// Adicionar ao início.
techs.unshift("Algoritmos");
console.log(techs);

// Remover do fim.
techs.pop();
console.log(techs);

// Remover do inicio.
techs.shift();
console.log(techs);

// Mostrar um pedaço da array entre o segundo intem (a partir de zero) e o terceiro intem.
console.log(techs.slice(1, 3));
console.log(techs);

// Tirar itens especificados. O primeiro argumento é a posição do index, o segundo é a quantidade de itens a serem retirados a partir da posição do index.
techs.splice(1, 1);
console.log(techs);

// Achar o valor do index de um elemento.
console.log(techs.indexOf("JS"));