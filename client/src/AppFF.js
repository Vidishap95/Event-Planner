import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from "./components/EventPage";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Home from "./components/Home"

//import { setContext } from '@apollo/client/link/context';

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
            <div>
                <NavBar />
                <Hero />
                <Home />
                <EventPage />
            </div>

        </ApolloProvider>

    );
}

export default App;
