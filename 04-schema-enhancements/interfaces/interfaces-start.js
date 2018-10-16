//
//   Interfaces Lab!
// 

// Based on the events data, create an interface type 
// Create 3 implementations of your interface type
// Create query for allEvents
// Create query for eventById(id: "3")
// Resolve types

// Extra Credit: Look at the data and consider another object type to create.

const { ApolloServer } = require("apollo-server")

const typeDefs = ``
const resolvers = {}

const events = [
    {
        id: "1",
        name: "LCD Soundsystem",
        startsAt: 22,
        endsAt: 24,
        venue: "Bowery Ballroom",
        attendanceLimit: 575
    },
    {
        id: "2",
        name: "Austin City Limits",
        startsAt: 12,
        endsAt: 23,
        venue: "Zilker Park",
        totalConcerts: 50
    },
    {
        id: "3",
        name: "Lollapalooza",
        startsAt: 12,
        endsAt: 22,
        venue: "Grant Park",
        totalConcerts: 83
    },
    {
        id: "4",
        name: "Cher",
        startsAt: 21,
        endsAt: 23,
        venue: "Bellagio",
        attendanceLimit: 1400
    },
    {
        id: "5",
        name: "React Rally",
        startsAt: 9,
        endsAt: 5,
        venue: "Sheraton",
        speakers: 22
    },
    {
        id: "6",
        name: "GraphQL Summit",
        startsAt: 9,
        endsAt: 5,
        venue: "Regency Center",
        speakers: 25
    },
    {
        id: "7",
        name: "Flaming Lips",
        startsAt: 21,
        endsAt: 23,
        venue: "Riviera Theater",
        speakers: 2500
    },
    {
        id: "8",
        name: "Chance the Rapper",
        startsAt: 20,
        endsAt: 22,
        venue: "Millennium Park",
        attendanceLimit: 1800
    },
    {
        id: "9",
        name: "Outside Lands",
        startsAt: 12,
        endsAt: 23,
        venue: "Golden Gate Park",
        totalConcerts: 70
    }
]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
