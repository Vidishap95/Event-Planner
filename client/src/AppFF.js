import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EventPage from "./components/EventPage/EventPage";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home"
import Footer from "./components/Footer/index"

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <div>
                    <NavBar />
                    <Hero />
                    <Home />
                    <EventPage />
                </div>
                {/* <Footer /> */}
            </div>


        </ApolloProvider>

    );
}

export default App;
