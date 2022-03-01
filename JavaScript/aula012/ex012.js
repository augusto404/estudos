var agora = new Date() // Pegando a hora do sistema.
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.lof(`Boa tarde!`)
} else if (hora >= 1 && hora < 5) {
    console.log(`Boa madrugada!`)
} else {
    console.log(`Boa noite!`)
}