import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

//importing style.css file
import './components/style.css';


import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import MyEvents from "./components/MyEvents";
import CreateEvent from "./components/CreateEvents";
import AllEvents from "./components/AllEvents";
import UpdateEvent from "./components/UpdateEvents";


// import logo from './logo.svg';
// import './App.css';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  //get auth token from local storage 
  const token = localStorage.getItem("id_token");

  // return the headers to the context so httplink can read
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
     <ApolloProvider client={client}>
     <Router>
       <div className="flex-column justify-center align-center min-100-vh">
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/myEvents" element={<MyEvents />} />
           <Route path="/createEvent" element={<CreateEvent />} />
           <Route path="/allEvents" element={<AllEvents />} />
           <Route path="/updateEvent/:eventId" element={<UpdateEvent />} />
           <Route
             path="*"
             element={<h1 className="display-2">Wrong page!</h1>}
           />
         </Routes>
         <Footer />
       </div>
     </Router>
   </ApolloProvider>
  );
}

export default App;
