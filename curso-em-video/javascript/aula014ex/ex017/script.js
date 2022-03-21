function tabuada() {
    var numero = Number(document.querySelector('input#numero').value)
    var saida = document.querySelector('select#saida')

    if (numero.length == 0) {
        alert('Digite um número!')
    } else {
        saida.innerHTML = ''
        for (var cont = 1; cont <= 10; cont++) {
            // Definições do item que irá pro html.
            var item = document.createElement('option')
            item.text = `${numero} x ${cont} = ${numero*cont}`
            item.value = 'saida${cont}'
            saida.appendChild(item)
        }
    }
}