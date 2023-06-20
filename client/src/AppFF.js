import React, { Profiler } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from "./components/EventPage/EventPage";
import NavBar from "./components/NavBar/NavBar";
// import Hero from "./components/Hero/Hero";
import Home from "./pages/Home"
import Header from './components/Header';
import Footer from "./components/Footer/index"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from "./pages/Profile"
import Shopping from './components/Shopping';


const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className='bg-yellow-700 h-screen'>
                    <NavBar />
                    {/* <Hero /> */}
                    <Header />
                    <div className='Pages'>
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/Events"
                                element={<EventPage />}
                            />
                            <Route
                                path="/Login"
                                element={<Login />}
                            />
                            <Route
                                path='/SignUp'
                                element={<Signup />}
                            />
                            <Route
                                path='/Profile'
                                element={<Profile />}
                            />
                            <Route
                                path='/Shopping'
                                element={<Shopping />}
                            />
                        </Routes>

                    </div>
                    <Footer />
                </div>
            </Router>

        </ApolloProvider>

    );
}

export default App;
