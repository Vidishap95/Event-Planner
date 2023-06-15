import React from 'react'

const Home = () => {
    return (
        <div>
            Home AFTER LOGIN
            {/* continer for cards */}
            <div className='bg-gray-100 w-full min-h-screen gap-4 flex flex-wrap justify-center'>
                <div className="shadow-md shadow-gray-600 rounded-lg">
                    <div className="flex items-center justify-center">
                        <button type="button" class="py-2.5 px-8 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add Event</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home