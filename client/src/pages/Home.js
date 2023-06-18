import React from 'react'
import EventList from '../components/EventList'

const Home = () => {
    return (
        <div>
            Home AFTER LOGIN
            {/* continer for component */}
            {/* <div className='bg-gray-100 w-full min-h-screen gap-4 flex flex-wrap justify-center'> */}
            {/* containter for cards */}
            <div className="p-4 grid place-content-center min-h-screen">
                <div className="grid gap-4 p-4 max-w-5xl">
                    <h1> Grid layout for our events</h1>
                    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <EventList />
                    </div>
                    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        Event two
                    </div>
                    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        Event three
                    </div>
                    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        Event four
                    </div>
                    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        Event five
                    </div>

                    <button type="button" class="py-2.5 px-8 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add Event</button>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Home