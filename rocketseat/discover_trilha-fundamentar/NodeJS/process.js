/* Mostrando os processos ocorridos no Node para gerar o próprio comando:
console.log(process); */

/* Lista de argumentos: */
const FirstName = process.argv[2];
const LastName = process.argv[3];

console.log(`Seu nome é ${FirstName} ${LastName}.`);