function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.querySelector('input#data_nascimento')
    var res = document.querySelector('div#res')
    
    if (form_ano.value.length == 0 || form_ano.value > ano) { // Nesse ponto, haverá uma validação de dados feito por essa estrutura condicional.
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex') // Não coloca o valor de qual elemento é, assim vai ser pego o valor de um dos dois botões (no caso, o quê for selecionado).
        var idade = ano - Number(form_ano.value)
        var gênero = '' // A variável começa vazia por padrão.
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'um Homem'

            if (idade >= 0 && idade < 10) {
                // Bebê
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 15) {
                // Criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'uma Mulher'

            if (idade >= 0 && idade < 8) {
                // Bebê
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 15) {
                // Criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center' // Isso irá centralizar o texto apenas na hora de apresentar o resultado.
        res.innerHTML = `Você é <strong>${gênero}</strong> de <strong>${idade}</strong> anos.`
        res.appendChild(img) // Exibindo a imagem
    }
}