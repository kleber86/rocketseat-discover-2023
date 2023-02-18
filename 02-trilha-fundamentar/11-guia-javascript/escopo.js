{
  let x = 0
  console.log(`[let] dentro do bloco ${x}`)
}

console.log(`[var][hoisting] ${globalElocal}`) // hoisting
{
  var globalElocal = 1
  console.log(`[var]dentro do bloco ${globalElocal}`)
}

//console.log(`[let] fora do bloco ${x}`) // não existe fora do bloco
console.log(`[var]fora do bloco ${globalElocal}`)
