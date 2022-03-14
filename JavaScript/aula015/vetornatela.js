var valores = [8, 7, 3, 8, 8, 3, 4, 9, 8, 5, 9, 6, 5]
valores.sort()

/*
for (let position = 0; position < valores.length; position++){
    console.log(`A posição ${position} tem o valor ${valores[position]}`)
}
*/
for (let position in valores){
    console.log(`A posição ${position} apresenta o valor ${valores[position]}`)
}