console.log('Inicio da aplicação');

const avaliacao1 = 4;
const avaliacao2 = 3;
let avaliacaoOptativa = 9; // Foi criado um let nesse ponto pois o valor dessa variável será alterado no próximo bloco de código.
const notaMinima = 7 // Isso deve ser adicionado abaixo da variáveis das notas.

if (avaliacaoOptativa == undefined) {
		avaliacaoOptativa = -1;
		console.log(avaliacaoOptativa);
}

function calcularMedia(nota1, nota2, notaOptativa) { // Os parâmetros foram criados para receber os valores das variáveis e trabalhar com eles internamente sem influenciar o quê acontece fora da função.

    if (notaOptativa >= notaMinima) {
		if (nota1 < notaMinima) { // Se a nota1 for menor que notaMinima, nota1 recebe a notaOpitativa.
				nota1 = notaOptativa;
		} else if (nota2 < notaMinima) { // Se a nota2 for menor que a notaMinima, nota2 recebe a notaOptativa.
				nota2 = notaOptativa;
		}
    }

		console.log(nota1, nota2, notaOptativa);
}

calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa);