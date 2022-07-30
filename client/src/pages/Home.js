import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { App, AppContext } from "../App";
import './mainPage.css'

// div for the movie title, placing here for format reasons
// <div>{searchContext.details.title}</div> 

const Home = () => {
  const searchContext = useContext(AppContext);

  return (
    <main className="movieContainer" >
      <div id="moviePoster">
        {/* Movie Poster Here */}
      </div>
      <div className="movieDetails">
        {/* <div>{searchContext.details.title}</div> */}
        <h1>Title Here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="trailerContainer">
          {/* Trailer Here */}
          <p>Trailer</p>
        </div>
        <button id="watchListBtn">Add to watch list</button>
      </div>
    </main>
  );
};


export default Home;
