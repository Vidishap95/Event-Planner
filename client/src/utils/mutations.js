import { gql } from '@apollo/client';

export const ADD_EVENT = gql`
mutation mutateEvents($eventName: String!, $eventDescription: String!, $eventDate: String!, $eventTime: String!, $location: String!) {
    addEvent(eventName: $eventName, eventDescription: $eventDescription, eventDate: $eventDate, eventTime: $eventTime, location: $location) {
      eventName
      eventDescription
      eventDate
      eventTime
      location
      _id
    }
  }
  
`;

export const LOGIN_USER = gql`
mutation login($username: String!, $email: String!, $password: String!) {
  login(username: $username, email: $email, password: $password) {
    user{
      _id
      username
    }
  }
}
`
export const UPDATE_EVENT = gql`
  mutation mutateUpdateEvents( $eventId: ID!, $eventName: String!, $eventDescription: String!, $eventDate: String!, $eventTime: String!, $location: String!) {
    updateEvent( eventId: $eventId, eventName: $eventName, eventDescription: $eventDescription, eventDate: $eventDate, eventTime: $eventTime, location: $location) {
      eventName
      eventDescription
      eventDate
      eventTime
      location
      _id
    }
  }
  `;
export const DELETE_EVENT = gql`
  mutation mutateDeleteEvent($eventId: ID!) {
    deleteEvent(eventId: $eventId) {
      eventName
      eventDescription
      eventDate
      eventTime
      location
      _id
    }
  }
`;
export const GET_EVENT = gql`
query getEvent($eventId: ID!) {
  event(eventId: $eventId) {
    eventName
    eventDescription
    eventDate
    eventTime
    location
    _id
  }
}
`;
export const ADD_PROFILE = gql`
mutation profile($username: String!, $email: String!, $password: String!) {
  profile
}
`