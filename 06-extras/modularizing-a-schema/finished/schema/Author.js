const Author = `
  type Author {
    id: ID!
    firstName: String
    lastName: String
    books: [Book]
  }

  extend type Query {
    author(name: String): Author
  }
`
module.exports = Author