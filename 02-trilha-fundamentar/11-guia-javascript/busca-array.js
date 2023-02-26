










const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];

const totalCategories = booksByCategory.length
console.log(totalCategories)
for(let category of booksByCategory){
  console.log('total de livros da categoria: ', category.category)
  console.log(category.books.length)
}


function countAuthors(){
  let authors = []

  for(let category of booksByCategory){
    for(book of category.books){
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
    }
  }
  console.log('total de autores: ' + authors.length)
}

function booksOfAuthor(author){
  let books = []

  for(let category of booksByCategory){
    for(book of category.books){
      if(book.author == author){
        books.push(book.title)
      }
    }
  }
  console.log(`livros do autor ${author}: ${books.join(', ')}`)
}

 countAuthors()
 booksOfAuthor('Augusto Cury')
