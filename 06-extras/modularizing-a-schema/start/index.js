const { ApolloServer } = require('apollo-server')

const typeDefs = `
  type Query {
    author(id: ID!): Author
    book(id: ID!): Book
  }
  type Author {
    id: ID!
    firstName: String
    lastName: String
    books: [Book]
  }
  type Book {
    id: ID!
    title: String
    author: Author
  }
`

const server = new ApolloServer({
    typeDefs,
    mocks: true
})

server.listen().then(() => console.log('server running on port 4000'))