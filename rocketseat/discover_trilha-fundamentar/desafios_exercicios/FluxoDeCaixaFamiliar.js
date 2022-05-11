/* Fluxo de caixa familiar. */

let gastos = {
    receitas: [500, 1200.50, 348.20],
    despesas: [300, 1000.20]
};

function somarValoresArray(array){
    let total = 0;

    for (let valor of array){
        total += valor;
    }

    return total;
}

function totalReceitasDespesas(receitas, despesas) {
    const saldoTotal = receitas - despesas;
    let situação;

    receitas >= despesas ? situação = "POSITIVO" : situação = "NEGATIVO";

    return `A sua receita foi de ${receitas}, e sua despesa foi de ${despesas}. O seu saldo é de ${saldoTotal.toFixed(2)} e está ${situação}.`;
};

console.log(
    totalReceitasDespesas(
        somarValoresArray(gastos.receitas), 
        somarValoresArray(gastos.despesas)
));