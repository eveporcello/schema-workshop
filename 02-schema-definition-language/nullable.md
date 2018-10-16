Nullable Lesson
=====

* [Nullable vs Non-nullable - Start](https://codesandbox.io/s/p3mzqzl9nq)

### Start File

```javascript
const { ApolloServer, gql } = require("apollo-server")

const users = [
  { name: "Eve", age: null, email: "eve@moonhighway.com" },
  { name: "Alex", age: 41, email: "alex@moonhighway.com" }
]

const typeDefs = gql``

const resolvers = {
  Query: {
    allUsers: () => users
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
```

* Add types
* Non-nullable: best case scenario

```graphql

const typeDefs = gql`
  type User {
    name: String
    age: Int
    email: String
  }

  type Query {
    allUsers: [User!]!
  }
`
```

* Run this query

```graphql
query {
  allUsers {
    name
    age
    email
  }
}
```

* Make `age` non-nullable
* Run same query to see the error: Cannot return null for non-nullable field User.age.

```graphql
type User {
    name: String
    age: Int!
    email: String
  }
```

* Change Query to be a non-nullable list of nullable items
* See response - mix of data and errors

```graphql
type Query {
    allUsers: [User]!
  }
```