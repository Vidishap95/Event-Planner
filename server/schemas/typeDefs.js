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
        username: String
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
        signup(name: String!, email: String!, password: String!): Auth
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