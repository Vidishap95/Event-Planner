import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import EventPage from "./components/EventPage";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Home from "./components/Home"

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
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
