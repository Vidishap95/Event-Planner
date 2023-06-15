import { gql } from '@apollo/client';

export const VIEW_EVENTS = gql`
query ViewEvents {
    viewEvents {
      _id
      eventName
      eventDescription
      eventDate
      eventTime
      location
    }
  }
  
`