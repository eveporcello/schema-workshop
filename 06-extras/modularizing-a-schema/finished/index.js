const { ApolloServer, gql } = require('apollo-server')

const Author = require('./schema/Author')
const Book = require('./schema/Book')

const Query = gql`
  type Query {
    _empty: String
  }
`

const server = new ApolloServer({
  typeDefs: [Query, Author, Book],
  mocks: true
})

server.listen().then(() => console.log(`Server Running on Port 4000`))