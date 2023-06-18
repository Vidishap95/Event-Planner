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
`