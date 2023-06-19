import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import EventPage from '../components/EventPage/EventPage'
import EventList from '../components/EventList'
import { Link } from 'react-router-dom'
import { VIEW_EVENTS } from '../utils/queries'

const Home = () => {
    const [eventInfo, setEventInfo] = useState({
        eventName: '',
        eventDescription: '',
        eventTime: '',
        eventDate: '',
        location: ''
    });
    const { loading, data } = useQuery(VIEW_EVENTS);
    const events = data?.viewEvents || [];

    return (
        <div className='flex justify-center min-h-full container mx-auto'>
            {/* Grid */}
            <div className='grid lg:grid-cols-3 md:grid-col-2 gap-20'>
                {/* Cards */}
                {
                    events.map((event) => {
                        return (
                            <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                                <div className='p-5 flex flex-col text-center'>
                                    <h5 className='text-2xl md:text-3xl font-bold mt-3 text-yellow-100'> {event.eventName} </h5>
                                    <p className='text-lg mt-3 text-yellow-100'> Description {event.eventDescription}</p>
                                    <Link to='/Events' as="button" className=' bg-yellow-700 text-center text-white rounded-lg mt-4'> View Me </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Home