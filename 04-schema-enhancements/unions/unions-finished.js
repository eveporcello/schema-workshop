const { ApolloServer } = require("apollo-server")

const typeDefs = `

    type StudyGroup {
        name: String!
        subject: String!
        students: Int!
    }

    type Workout {
        name: String!
        reps: Int!
    }

    union AgendaItem = Workout | StudyGroup

    type Query {
        agenda: [AgendaItem!]!
    }
`

const agendaItems = [
    { name: "Comp Sci", subject: "Computer Science", students: 12 },
    { name: "Cardio", reps: 100 },
    { name: "Poets", subject: "English 101", students: 3 },
    { name: "Math Whiz", subject: "Mathematics", students: 12 },
    { name: "Upper Body", reps: 10 },
    { name: "Lower Body", reps: 20 }
]

const resolvers = {
    Query: {
        agenda: () => agendaItems
    },
    AgendaItem: {
        __resolveType: root => root.reps ? "Workout" : "StudyGroup"
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
