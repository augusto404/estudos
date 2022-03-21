var agora = new Date() // Pegando a data do sistema
var diaSem = agora.getDay() // Colocando a data em uma variável

// Dias em javascript são contados a partir do zero.
// As datas precisam receber nomes, ou o JS irá colocar apenas os números referentes a cada dia.

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Error')
        break
}