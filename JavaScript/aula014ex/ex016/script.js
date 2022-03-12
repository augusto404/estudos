function tabuada() {
    // Possivel erro: mudar queryselector para getelementbyid
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('div#result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Faltam dados')
    } else {
        res.innerHTML = 'Contando: '

        for (var resultado = inicio; resultado <= fim; resultado += passo) {
            res.innerHTML = 'Contando: &3xFE0F;' + resultado + '<br>'
        }
    }
}