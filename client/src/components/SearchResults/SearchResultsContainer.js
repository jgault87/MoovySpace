import React from "react";
import { useState, useEffect } from "react";
import ResultList from "./ResultList";
// Import search method
import search from "../../utils/API";

const SearchResultsContainer = () => {
  // Declare a new state variable called "results"
  const [results, setResults] = useState([]);

  // Get search results and set state
  const searchMovie = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  // Run this method as component loads so we can render results right away
  // Probably won't need this useEffect, might delete later
  useEffect(() => {
    searchMovie("12 Pound Balls");
  }, []);

  return (
    <div>
      <ResultList results={results} />
    </div>
  );
};

export default SearchResultsContainer;
