import React, { useState, useEffect } from "react";
import SearchResults from "./ResultList";
// import { searchDetails, searchTrailer } from "../../utils/API";
import axios from "axios";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SearchResultsContainer = () => {
  // Declare a new state variable called "results"
  const [details, setDetails] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [search, setSearch] = useState("");

  // Get movie
  const searchMovie = async (query) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        setDetails(response.data);
        return response.data;
      })
      .then(async (details) => {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${details.results.id}/videos?api_key=${API_KEY}&language=en-US`
          )
          .then((response) => {
            setTrailer(details);
          });
      });
  };

  // Run this method as component loads so we can render results right away
  // Probably won't need this useEffect, might delete later
  useEffect(() => {
    searchMovie("12 Pound Balls");
  }, []);

  // Handler for input changes to the search form
  const handleInputChange = (e) => setSearch(e.target.value);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
  };

  return (
    // Need to add the search form in here as well to display the search bar and results in same page.
    // Refer to Week 20 Assignment 20 for tips
    <div>
      <SearchResults details={details} trailer={trailer} />
    </div>
  );
};

export default SearchResultsContainer;
