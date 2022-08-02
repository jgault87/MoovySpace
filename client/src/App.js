import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import Header from "./components/Header/index";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Welcome from "./components/HomePage/HomePage";
import LikedMovies from "./components/LikedMovies"

import axios from "axios";
export const AppContext = React.createContext();
const API_KEY = "e1decf0f5993931acf6f27eec0827ce6";
// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function App() {
  // Declare a new state variable called "results"
  const [details, setDetails] = useState([]);
  const [trailer, setTrailer] = useState([]);

  // Get movie & trailer data from API
  const searchMovie = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        setDetails(response.data.results[0]);
        return response.data;
      })
      .then((response) => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${response.results[0].id}/videos?api_key=${API_KEY}&language=en-US`
          )
          .then((responseTwo) => {
            setTrailer(responseTwo.data.results[0]);
          });
      });
  };

  useEffect(() => {
    searchMovie("Kill Bill");
  }, []);

  const globalState = {
    details: details,
    trailer: trailer,
    searchMovie,
  };

  return (
    <AppContext.Provider value={globalState}>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route path="/feed" element={<Feed />} />
            <Route path="/me" element={<Profile />} />
            <Route path="/profiles/:username" element={<Profile />} />
            <Route path="/likedMovies" element={<LikedMovies />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </AppContext.Provider>
  );
}
