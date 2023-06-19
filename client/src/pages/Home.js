import React from 'react'
import EventList from '../components/EventList'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center min-h-full container mx-auto'>
            {/* Grid */}
            <div className='grid lg:grid-flow-col md:grid-col-6 gap-20'>
                {/* Cards */}
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-60 p-2 bg-blue-400 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-bold mt-3 transition-transform duration-500'>Event Title </h5>
                        <p className='text-lg mt-3'> Description</p>
                        <button className='texrt-center rounded-lg font-semibold mt-4 bg-amber-100'> Update Me </button>
                    </div>
                </div>

                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-60 p-2 bg-blue-400 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Event Title </h5>
                        <p className='text-lg mt-3'> Description</p>
                        <button className='texrt-center rounded-lg font-semibold mt-4 bg-amber-100'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-60 p-2 bg-blue-400 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Event Title </h5>
                        <p className='text-lg mt-3'> Description</p>
                        <button className='texrt-center rounded-lg font-semibold mt-4 bg-amber-100'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-60 p-2 bg-blue-400 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Event Title </h5>
                        <p className='text-lg mt-3'> Description</p>
                        <button className='texrt-center rounded-lg font-semibold mt-4 bg-amber-100'> Update Me </button>
                    </div>
                </div>
                <div className='Card hover:shadow-2xl hover:-translate-y-2 w-60 p-2 bg-blue-400 transform transition-all rounded-lg'>
                    <div className='p-5 flex flex-col text-center'>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Event Title </h5>
                        <p className='text-lg mt-3'> Description</p>
                        <button className='texrt-center rounded-lg font-semibold mt-4 bg-amber-100'> Update Me </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Home