import React from 'react'
import { Link } from "react-router-dom";
// import Login from "../../pages/Login"

const Hero = () => {
    return (
        <section className="bg-wyellow-600">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl text-yellow-100">Welcome to Flawless Function</h1>
                <p class="mb-8 text-lg font-normal text-yellow-100 lg:text-xl sm:px-16 xl:px-48">Flawlessly planning all your functions</p>
                {/* <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                </div> */}
            </div>
        </section>
    )
}

export default Hero