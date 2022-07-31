import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { App, AppContext } from "../App";
import "./mainPage.css";
import Trailer from "../components/Trailer/Trailer.js";

const Home = () => {
  const searchContext = useContext(AppContext);
  let posterImage =
    "https://image.tmdb.org/t/p/w500" + searchContext.details.poster_path;

  return (
    <main className="movieContainer">
      <div id="moviePoster">
        <img src={posterImage} alt="Movie Poster" />
      </div>
      <div className="movieDetails">
        <h1>{searchContext.details.title}</h1>
        <p>{searchContext.details.overview}</p>
        <div className="trailerContainer">
          <Trailer embedId={searchContext.trailer.key} />
        </div>
        <button id="watchListBtn">Add to watch list</button>
      </div>
    </main>
  );
};

export default Home;
