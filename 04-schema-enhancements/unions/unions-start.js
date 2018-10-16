// Create a union type called AgendaItem
// Create a Query called agenda that returns a list of AgendaItem objects

const { ApolloServer } = require("apollo-server")

const typeDefs = ``

const agendaItems = [
    { name: "Comp Sci", subject: "Computer Science", students: 12 },
    { name: "Cardio", reps: 100 },
    { name: "Poets", subject: "English 101", students: 3 },
    { name: "Math Whiz", subject: "Mathematics", students: 12 },
    { name: "Upper Body", reps: 10 },
    { name: "Lower Body", reps: 20 }
]

const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
