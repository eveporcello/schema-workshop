// Create a union type called AgendaItem
// Create a Query called agenda that returns a list of AgendaItem objects

const { ApolloServer } = require("apollo-server")

const typeDefs = ``

const agendaItems = [
    { name: "Java", subject: "Computer Science", students: 12 },
    { name: "Mountain Climbers", reps: 100 },
    { name: "Poets", subject: "English 101", students: 3 },
    { name: "Calculus", subject: "Mathematics", students: 12 },
    { name: "Jump Squats", reps: 50 },
    { name: "Skaters", reps: 15 }
]

const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
