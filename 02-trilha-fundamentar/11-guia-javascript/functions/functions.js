// callback function

function sayMyName(name) {
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar o callback')
}

sayMyName(
  ()=> {
    console.log('estou em um callback')
  }
)
