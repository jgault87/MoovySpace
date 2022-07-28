import { useState, useEffect } from "react";
import SearchResults from "./ResultList";
// Import search method
import search from "../../utils/API";
import searchTrailer from "../../utils/TrailerAPI";

const SearchResultsContainer = () => {
  // Declare a new state variable called "results"
  const [results, setResults] = useState([]);
  const [trailer, setTrailer] = useState([]);

  // Get search results and set state
  const searchMovie = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
    // How do I async line 14 for line 17's await???
    const trailer = await searchTrailer(response.id);
    setTrailer(trailer.results[0].key);
  };

  // Run this method as component loads so we can render results right away
  // Probably won't need this useEffect, might delete later
  useEffect(() => {
    searchMovie("12 Pound Balls");
  }, []);

  return (
    <div>
      <SearchResults results={results} trailer={trailer} />
    </div>
  );
};

export default SearchResultsContainer;
