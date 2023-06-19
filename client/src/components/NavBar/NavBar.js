import React from 'react'
import { Link } from "react-router-dom"
import FFLogo from "../../assets/Fendi-Logo.png"

const NavBar = () => {
    return (

        <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex flex-wrap items-center">
                    <img src={FFLogo} className="h-8 mr-3" alt="FF Logo" />
                    <span className="self-center lg:text-3xl font-semibold whitespace-nowrap sm:text-sm text-yellow-100"> Flawless Function</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-yellow-100 rounded-lg  border-r-yellow-950 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-trans md:dark:bg-gray-900 ">
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-yellow-100 rounded hover:text-yellow-950 md:hover:bg-transparent md:border-0 md:hover:text-yellow-950 md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/Events" className="block py-2 pl-3 pr-4 text-yellow-100 rounded hover:text-yellow-950 md:hover:bg-transparent md:border-0 md:hover:text-yellow-950 md:p-0">Events</Link>
                        </li>
                        <li>
                            <Link to="/Profile" className="block py-2 pl-3 pr-4 text-yellow-100 rounded hover:text-yellow-950 md:hover:bg-transparent md:border-0 md:hover:text-yellow-950 md:p-0">Profile</Link>
                        </li>
                        <li>
                            <Link to="/Login" className="block py-2 pl-3 pr-4 text-yellow-100 rounded hover:text-yellow-950 md:hover:bg-transparent md:border-0 md:hover:text-yellow-950 md:p-0">
                                Login
                                {/* <svg className="ml-2 -mr-1 w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                            </Link>
                        </li>
                        <li>
                            <Link to="/SignUp" className="block py-2 pl-3 pr-4 text-yellow-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                {/* <svg className="mr-2 -ml-1 w-5 h-5" viewBox="0 0 20 20" ></svg> */}
                                Sign Up!
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar