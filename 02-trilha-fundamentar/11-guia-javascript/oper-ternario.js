let pao = true
let queijo = true

let niceBreakFast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakFast)

pao = true
queijo = false
niceBreakFast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakFast)

// Maior de 18
let age = 16
let canDrive = age >= 18 ? 'can drive' : 'cant drive'
console.log(canDrive)
