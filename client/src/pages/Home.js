import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { VIEW_EVENTS } from '../utils/queries'
import auth from "../utils/auth"

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
            {auth.loggedIn() ?
                (
                    <div className='grid lg:grid-cols-3 md:grid-col-2 gap-20'>
                        {
                            events.map((event) => {
                                return (
                                    <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                                        <div className='p-5 flex flex-col text-center'>
                                            <h5 className='text-2xl md:text-3xl font-bold mt-3 text-yellow-100'> {event.eventName} </h5>
                                            <p className='text-lg mt-3 text-yellow-100'> {event.eventDescription}</p>
                                            <Link to='/Events' as="button" className=' bg-yellow-700 text-center text-white rounded-lg mt-4'> View Me </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div className='flex justify-center text-center'>
                        <h2 className=' text-2xl text-yellow-100 mx-auto'> Please Login first!</h2>
                    </div>
                )

            }
        </div>
    )
}

export default Home