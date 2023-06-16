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
const Events = require('../models/Events');
const typeDefs = gql`
    type Events {
        _id: ID
        eventName: String
        eventDescription: String
        eventDate: String
        eventTime: String
        location: String
    }
    type Query {
        viewEvents: [Events]
    }
    type Mutation {
        addEvent(eventName: String!, eventDescription: String!, eventDate: String!, eventTime: String!, location: String!): Events
    }
`;
module.exports = typeDefs;