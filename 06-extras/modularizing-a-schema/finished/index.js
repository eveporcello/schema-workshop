const { ApolloServer } = require('apollo-server')

const Author = require('./schema/Author')
const Book = require('./schema/Book')

const Query = `
  type Query {
    author(name: String): Author
    book(name: String): Book
  }
`

const server = new ApolloServer({
    typeDefs: [Query, Author, Book],
    mocks: true
})

server.listen().then(() => console.log("stuff"))