const Author = `
  type Author {
    id: ID!
    firstName: String
    lastName: String
    books: [Book]
  }
`
module.exports = Author