const sum = function(number1, number2){
    let total = number1 + number2; /*
    Use sempre let ou const dentro de functions.
    Pode ser feito return = number1 + number2;
    */

    // O parâmetro return dentro da função permite o valor ser visto fora do escopo.
    return total;
};

/*
sum(2, 3);
- Para executar esse tipo de função, é chamado o nome da variável como o nome da própria function.
- Os valores passados aqui se chamam arguments/argumentos.
*/

let number1 = 50;
let number2 = 100;

console.log(`O primeiro número é ${number1}`);
console.log(`O segundo número é ${number2}`);
console.log(`O resultado da soma é ${sum(number1, number2)}`); // O retorno vem dos parâmetros que estão na função.
