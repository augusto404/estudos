/*
var nome = 'Pedro'
var idade = 17
var ocupação = 'Programador'
var país = 'Brasil'

alert(`${nome}, com ${idade} anos, é ${ocupação} e mora em ${país}.`)
*/

/*
var lista = ['maçã', 'pêra', 'laranja']

lista.push('kiwi')
lista.pop()

console.log(lista.join(" - "))
*/

/*
var fruta = [{nome:'laranja', cor:'cor de laranja', sabor:'gosto de laranja'}]
console.log(fruta[0].nome)
console.log(fruta[0].cor)
*/

/**/
function func(){
    document.querySelector('#resultado').innerHTML = 'Clicou!'
}

function redirect(){
    open('https://github.com/augusto404')
}

function mousemove(element){
    element.innerHTML = 'Você passou o mouse aqui'
}

function mouseout(element){
    element.innerHTML = 'Você tirou o mouse daqui'
}

function load(){
    alert('Página carregada.')
}

function change(elemento){
    alert(elemento.value)
}