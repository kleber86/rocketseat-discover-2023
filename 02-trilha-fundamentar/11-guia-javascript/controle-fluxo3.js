function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log('depois do erro')
}

try {
  sayMyName('')
} catch (error) {
  console.log(error)
}
