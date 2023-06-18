//==================================
//view events after login page
//==================================
import { VIEW_EVENTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import dayjs from "dayjs";

// Component
const Events = () => {
    const { loading, data } = useQuery(VIEW_EVENTS);
    const events = data?.viewEvents || [];
    console.log(events)
    return (
        <div>

            {loading ?
                <div> Events have not yet been fetched yet! </div>
                : <div>
                    {events.map((event, i) => {
                        return (
                            <div key={i}>
                                {event.eventName}
                                {event.eventDescription}
                                {dayjs(event.eventDate).format("MM/DD/YYYY")}
                                {event.location}

                            </div>
                        )

                    })}
                </div>
            }
        </div>
    )
}


export default Events;