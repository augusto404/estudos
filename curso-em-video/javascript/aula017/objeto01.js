let amigo = {nome: 'José', sexo: 'M', tamanho: 1.72, altura(a=0){
    console.log(`ALtura`)
    this.altura += a
}}

amigo.altura(2)

console.log(`${amigo.nome} tem a altura de ${amigo.tamanho}m.`)