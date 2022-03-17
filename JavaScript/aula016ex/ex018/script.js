var numero = document.querySelector('#numero') // Eu decidi de início colocar diretamente na variável que é um numero e .value. Acredito que poderia nem precisar da verificação de se é um número, já que eu sinalizei que é um número diretamente na var, também poderia ser colocada a maxlength="100" diretamente no elemento de input.
var saida = document.querySelector('#saida')
var resultado = document.querySelector('#resultado')

// Array que guarda os valores que o usuário digita.
var valores = []

// Verificação:
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){ // Se o valor é menor que 1 ou maior que 100 será considerado inválido e retornará false.
        return true
    } else {
        return false
    }
}
function inLista(n, l){ // Se o número registrado na lista da array não for um NaN, ele receberá true na validação.
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

// Add números na array.
function adicionar(){
    // Adicionar valor vazio na section pra limpar a tela.
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))

        // Criando os itens para a saída.
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado!`
        saida.appendChild(item) // O item foi criado primeiro, após receber o texto ele é adicionado no campo de saída/output.

        resultado.innerHTML = '' // Limpar resultados
    } else {
        alert('Valor inválido ou já atribuído.')
    }
    numero.value = ''
    numero.focus()
}

function analise(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (let position in valores){
            soma += valores[position]

            media 

            if (valores[position] > maior){
                maior = valores[position]
            }
            if (valores[position] < menor){
                menor = valores[position]
            }
        }

        media = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos <strong>${total}</strong> valores cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor é <strong>${maior}</strong>.</p>`
        resultado.innerHTML += `<p>O menor valor é <strong>${menor}</strong>.</p>`
        resultado.innerHTML += `<p>Todos os valores somados resultam em <strong>${soma}</strong>.</p>`
        resultado.innerHTML += `<p>A media é <strong>${media.toFixed(0)}</strong>.</p>`
    }
}