import React, { useState, useEffect } from "react";
import SearchResults from "./ResultList";
// Import search method
import { searchDetails, searchTrailer } from "../../utils/API";
import axios from "axios";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SearchResultsContainer = () => {
  // Declare a new state variable called "results"
  const [details, setDetails] = useState([]);
  const [trailer, setTrailer] = useState([]);

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
            setTrailer(details); // firstData is still an empty Object here for some reason
          });
      });
  };

  // Get search results and set state
  // const searchMovie = async (query) => {
  //   const response = await searchDetails(query);
  //   setDetails(response.data.data);
  // How do I async line 14 for line 17's await???
  // const trailer = await searchTrailer(response.id);
  // setTrailer(trailer.results[0].key);
  // };

  // Run this method as component loads so we can render results right away
  // Probably won't need this useEffect, might delete later
  useEffect(() => {
    searchMovie("12 Pound Balls");
  }, []);

  return (
    <div>
      <SearchResults details={details} trailer={trailer} />
    </div>
  );
};

export default SearchResultsContainer;
