import React, { useContext, useState } from "react";
import "./SearchBar.css";
import { AppContext } from "../../App";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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
      <form onSubmit={handleFormSubmit}>
        <input
          id="searchBar"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
        <button id="searchBtn">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
