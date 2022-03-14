let num = [
    7,
    4,
    5,
    6,
    8,
    9,
    'string'
]

num.push(1)
num.sort() // A ordem que esse método é colocada pode resultar em apresentação de resultados diferentes.

console.log(num)
console.log(`A array tem ${num.length} elementos. O primeiro elemento é ${num[0]}.`)

// ---

let position = num.indexOf(8)
if (position == -1){
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor está na posição ${position}`)
}