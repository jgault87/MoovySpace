import React from "react";
import { useState, useEffect } from "react";
// Import search method
import search from "../../utils/API";

const SearchResults = () => {
  // Declare a new state variable called "results"
  const [results, setResults] = useState([]);

  // Get search results and set state
  const searchMovie = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  // Run this method as component loads so we can render results right away
  useEffect(() => {
    searchMovie("12 Pound Balls");
  }, []);

  return <div>SearchResults</div>;
};

export default SearchResults;
