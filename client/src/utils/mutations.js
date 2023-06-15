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