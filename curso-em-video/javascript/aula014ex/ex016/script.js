function tabuada() {
    // Possivel erro: mudar queryselector para getelementbyid
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('result')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('ERRO! Faltam dados')
    } else {
        res.innerHTML = `<strong>Contando:</strong> <br>`

        if (passo <= 0) {
            alert('Passo inválido. Considerando passo 1')
            passo = 1
        }

        if (inicio < fim) { // Contagem crescente
            for (var resultado = inicio; resultado <= fim; resultado += passo) {
                res.innerHTML += `${resultado}, \u{1F449} ` // Lembrar do +=, fiquei um bom tempo tentando pra perceber isso.
            }
        } else { // Contagem decrescente
            for (var resultado = inicio; resultado >= fim; resultado-= passo) {
                res.innerHTML += `${resultado} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}