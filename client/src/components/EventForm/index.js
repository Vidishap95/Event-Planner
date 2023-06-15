//================================================
//add event to the database through the event form
//===============================================
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';

const EventForm = () => {

    const [eventInfo, setEventInfo] = useState({
        eventName: '',
        eventDescription: '',
        eventTime: '',
        eventDate: '',
        location: ''

    });

    const [mutateEvents, { error }] = useMutation(ADD_EVENT);

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        console.log("Did the state update?", eventInfo)
        //add event from the given input
        setEventInfo({ ...eventInfo, [name]: value });
    }

    //Trigger event when the user click submit button
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await mutateEvents({
                variables: {
                    ...eventInfo
                }
            })
            window.location.reload();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    //Design the form
    return (
        <section className="container">
            <div className="row bg-orange-200">
                <form onSubmit={handleFormSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">eventName</label>
                            <input type="text" id="eventName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter event name"
                                name="eventName"
                                value={eventInfo.eventName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">eventDescription</label>
                            <input type="text" id="eventDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter event description"
                                name="eventDescription"
                                value={eventInfo.eventDescription}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EventDate</label>
                            <input type="text" id="eventDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter event date"
                                name="eventDate"
                                value={eventInfo.eventDate}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EventTime</label>
                            <input type="text" id="eventTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter event time"
                                name="eventTime"
                                value={eventInfo.eventTime}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">location</label>
                            <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="event location"
                                name="location"
                                value={eventInfo.location}
                                onChange={handleInputChange}
                                required />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};


export default EventForm;