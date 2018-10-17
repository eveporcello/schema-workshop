const Book = `
  type Book {
    id: ID!
    title: String
    author: Author
  }
  
  extend type Query {
    book(name: String): Book
  }
`

module.exports = Book