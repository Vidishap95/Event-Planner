import { gql } from '@apollo/client';

export const VIEW_EVENTS = gql`
query ViewEvents {
  viewEvents {
    _id
    eventDate
    eventDescription
    eventName
    eventTime
    location
  }
}
`;

export const VIEW_PROFILE = gql`
query ViewProfile {
  viewProfile {
    _id
    name
    email
    password
    event {
      _id
      eventName
      eventDate
      eventDescription
      eventTime
      location
    }
  }
}
`