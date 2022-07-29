import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { App, AppContext } from "../../App";
import axios from "axios";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Handler for input changes to the search form
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const searchContext = useContext(AppContext);

  const handleInputChange = (e) => setSearch(e.target.value);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchContext.searchMovie(search);
  };

  return (
    <div>
      <input value={search} onChange={handleInputChange} />
      <button onClick={handleFormSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;