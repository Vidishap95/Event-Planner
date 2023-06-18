// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Profile {
//     _id: ID
//     name: String
//     email: String
//     # There is now a field to store the user's password
//     password: String
//     events: [Event]
//   }

//   type Event {
//     id: ID!
//     title: String!
//     description: String!
//     location: String!
//     profile: Profile
//     date: String
//   }

//   # Set up an Auth type to handle returning data from a profile creating or user login
//   type Auth {
//     token: ID!
//     profile: Profile
//     events: [Event]!
//     event(id: ID!): Event
//   }

//   type Query {
//     profiles: [Profile]!
//     profile(profileId: ID!): Profile
//     events: [Event]!
//     event(eventId: ID!): Event
//     viewEvents: Event

//   }

//   type Mutation {
//     # Set up mutations to handle creating a profile or logging into a profile and return Auth type
//     createProfile(name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth

//     addEvent(
//         title: String!
//         description: String!
//         location: String!
//         profile: ID!
//         date: String!
//       ): Event
//       updateEvent(
//         id: ID!
//         title: String
//         description: String
//         location: String
//         date: String
//       ): Event
//       deleteEvent(id: ID!): Boolean
//     }

//     schema {
//       query: Query
//       mutation: Mutation
//   }
// `;

// module.exports = typeDefs;

const { gql } = require('apollo-server-express');
const Event = require('../models');
const typeDefs = gql`
    type Event {
        _id: ID
        eventName: String
        eventDescription: String
        eventDate: String
        eventTime: String
        location: String
    }
    type Profile {
            _id: ID
        name: String
        email: String
        # There is now a field to store the user's password
        password: String
        events: [Event]
        }
    type Query {
        viewEvents: [Event]
    }
    type Auth {
        token: ID!
        profile: Profile
        }
    type Mutation {
        addEvent(eventName: String!, eventDescription: String!, eventDate: String!, eventTime: String!, location: String!): Event
        addProfile(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateEvent(
            eventId: ID!
            eventName: String
            eventDescription: String
            eventDate: String
            eventTime: String
            location: String
        ): Event
        deleteEvent(eventId: ID!): Event
    }
`;
module.exports = typeDefs;