function hora_do_dia() {
    var data = new Date()
    var hora = data.getHours()
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#imagem')

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="manha_.jpg" alt="manhã">'
        document.body.style.background = '#E0884B'
    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="tarde.jpg" alt="tarde">'
        document.body.style.background = '#A5BBC8'
    } else {
        img.innerHTML = '<img src="noite.jpg" alt="noite">'
        document.body.style.background = '#013954'
    }
}