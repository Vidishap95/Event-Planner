import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../../utils/mutations';
import { VIEW_EVENTS } from '../../utils/queries';
import dayjs from "dayjs";

const EventForm = () => {
    const [eventInfo, setEventInfo] = useState({
        eventName: '',
        eventDescription: '',
        eventTime: '',
        eventDate: '',
        location: ''
    });
    const [mutateEvents, { error }] = useMutation(ADD_EVENT);
    const [updateEvent] = useMutation(UPDATE_EVENT);
    const [deleteEvent] = useMutation(DELETE_EVENT);
    const [submittedEventInfo, setSubmittedEventInfo] = useState(null);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventInfo({ ...eventInfo, [name]: value });
    };
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setEventInfo({ ...eventInfo, eventDate: selectedDate });
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (submittedEventInfo) {
                // Update existing event
                console.log(eventInfo);
                const { data } = await updateEvent({
                    variables: {
                        eventId: submittedEventInfo._id,
                        ...eventInfo
                    }
                });
                setSubmittedEventInfo(data.updateEvent);
            } else {
                // Create new event
                const { data } = await mutateEvents({
                    variables: {
                        ...eventInfo
                    }
                });
                setSubmittedEventInfo(data.addEvent);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteEvent({
                variables: {
                    eventId
                }
            });
            if (submittedEventInfo?._id === eventId) {
                setSubmittedEventInfo(null);
                setEventInfo({
                    eventName: '',
                    eventDescription: '',
                    eventTime: '',
                    eventDate: '',
                    location: ''
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
    //   const handleUpdateEvent = (event) => {
    //     setEventInfo(event);
    //   };
    const handleUpdateEvent = (event) => {
        setSubmittedEventInfo(event);
        setEventInfo({
            eventName: event.eventName,
            eventDescription: event.eventDescription,
            eventTime: event.eventTime,
            eventDate: event.eventDate,
            location: event.location
        });
    };
    // Fetch existing events from the database
    const { loading, data } = useQuery(VIEW_EVENTS);
    const events = data?.viewEvents || [];
    return (
        <section className="container ">
            <div className="row bg-orange-200">
                <form onSubmit={handleFormSubmit} className="p-8 bg-cyan-100 rounded-lg shadow-md">
                    {/* Form inputs */}
                    <h2 className="text-5xl font-bold mb-4">Add Event</h2>
                    {/* Form inputs */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Event Name */}
                        <div>
                            <label htmlFor="eventName" className="block text-2xl font-medium text-gray-700 mb-1">
                                Event Name
                            </label>
                            <input
                                type="text"
                                id="eventName"
                                className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl px-3 py-2"
                                placeholder="Enter event name"
                                name="eventName"
                                value={eventInfo.eventName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/* Event Description */}
                        <div>
                            <label htmlFor="eventDescription" className="block text-2xl font-medium text-gray-700 mb-1">
                                Event Description
                            </label>
                            <input
                                type="text"
                                id="eventDescription"
                                className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg px-3 py-2"
                                placeholder="Enter event description"
                                name="eventDescription"
                                value={eventInfo.eventDescription}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/* Event Date */}
                        <div>
                            <label htmlFor="eventDate" className="block text-2xl font-medium text-gray-700 mb-1">
                                Event Date
                            </label>
                            <input
                                type="date"
                                id="eventDate"
                                className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg px-3 py-2"
                                placeholder="Select event date"
                                name="eventDate"
                                value={eventInfo.eventDate || ""}
                                onChange={handleDateChange}
                                required
                            />
                        </div>
                        {/* Event Time */}
                        <div>
                            <label htmlFor="eventTime" className="block text-2xl font-medium text-gray-700 mb-1">
                                Event Time
                            </label>
                            <input
                                type="text"
                                id="eventTime"
                                className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg px-3 py-2"
                                placeholder="Enter event time"
                                name="eventTime"
                                value={eventInfo.eventTime}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/* Location */}
                        <div>
                            <label htmlFor="location" className="block text-2xl font-medium text-gray-700 mb-1">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg px-3 py-2"
                                placeholder="Enter event location"
                                name="location"
                                value={eventInfo.location}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    {/* Form submission */}
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-lg px-6 py-3"
                        >
                            Submit
                        </button>
                    </div>
                    {/* Rest of the form code */}
                </form>
                {/* Display existing events */}
                <div className="mt-8 bg-cyan-100">
                    <h2 className="text-3xl font-bold mb-4">Existing Events</h2>
                    {loading ? (
                        <div>Loading events...</div>
                    ) : (
                        <div>
                            {console.log(events)}
                            {events.map((event) => (
                                <div key={event._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                                    <p>
                                        <strong>Event Name:</strong> {event.eventName}
                                    </p>
                                    <p>
                                        <strong>Event Description:</strong> {event.eventDescription}
                                    </p>
                                    <p>
                                        <strong>Event Date:</strong> {event.eventDate}
                                    </p>
                                    <p>
                                        <strong>Event Time:</strong> {event.eventTime}
                                    </p>
                                    <p>
                                        <strong>Location:</strong> {event.location}
                                    </p>
                                    <div className="flex justify-center mt-4">
                                        <button
                                            onClick={() => handleUpdateEvent(event)}
                                            className="bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 text-white font-medium rounded-lg text-lg px-6 py-3"
                                        >
                                            Update Event
                                        </button>
                                        <button
                                            onClick={() => handleDeleteEvent(event._id)}
                                            className="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 text-white font-medium rounded-lg text-lg px-6 py-3 ml-4"
                                        >
                                            Delete Event
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
export default EventForm;