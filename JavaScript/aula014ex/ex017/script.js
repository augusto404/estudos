function tabuada() {
    var numero = Number(document.querySelector('input#numero'))
    var saida = document.querySelector('output#saida')

    var res = numero * cont

    for (var cont = 1; cont <= 10; cont++) {
        saida.innerHTML = numero + 'x' + cont + '=' + res
    }
}