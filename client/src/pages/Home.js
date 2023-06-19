import React from 'react'
import EventPage from '../components/EventPage/EventPage'
import EventList from '../components/EventList'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center min-h-full container mx-auto'>
            {/* Grid */}
            <div className='grid lg:grid-cols-3 md:grid-col-2 gap-20'>
                {/* Cards */}
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-bold mt-3 transition-transform duration-500 text-yellow-100 '>Event Title </h5>
                        <p className='text-lg mt-3 text-yellow-100'> Description</p>
                        <button className='text-center text-white rounded-lg font-semibold mt-4 bg-yellow-700'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-bold mt-3 transition-transform duration-500 text-yellow-100 '>Event Title </h5>
                        <p className='text-lg mt-3 text-yellow-100'> Description</p>
                        <button className='text-center text-white rounded-lg font-semibold mt-4 bg-yellow-700'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-bold mt-3 transition-transform duration-500 text-yellow-100 '>Event Title </h5>
                        <p className='text-lg mt-3 text-yellow-100'> Description</p>
                        <button className='text-center text-white rounded-lg font-semibold mt-4 bg-yellow-700'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-bold mt-3 transition-transform duration-500 text-yellow-100 '>Event Title </h5>
                        <p className='text-lg mt-3 text-yellow-100'> Description</p>
                        <button className='text-center text-white rounded-lg font-semibold mt-4 bg-yellow-700'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-bold mt-3 transition-transform duration-500 text-yellow-100 '>Event Title </h5>
                        <p className='text-lg mt-3 text-yellow-100'> Description</p>
                        <button className='text-center text-white rounded-lg font-semibold mt-4 bg-yellow-700'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-bold mt-3 transition-transform duration-500 text-yellow-100 '>Event Title </h5>
                        <p className='text-lg mt-3 text-yellow-100'> Description</p>
                        <button className='text-center text-white rounded-lg font-semibold mt-4 bg-yellow-700'> Update Me </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home