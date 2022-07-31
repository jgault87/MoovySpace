import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { App, AppContext } from "../App";
import "./mainPage.css";

// div for the movie title, placing here for format reasons
// <div>{searchContext.details.title}</div>

const Home = () => {
  const searchContext = useContext(AppContext);
  let posterImage =
    "https://image.tmdb.org/t/p/w500" + searchContext.details.backdrop_path;
  let trailerLink =
    "https://www.youtube.com/watch?v=" + searchContext.trailer.key;

  return (
    <main className="movieContainer">
      <div id="moviePoster">
        <img src={posterImage} alt="Movie Poster" />
      </div>
      <div className="movieDetails">
        <h1>{searchContext.details.title}</h1>
        <p>{searchContext.details.overview}</p>
        <div className="trailerContainer">
          {trailerLink}
          <p>Trailer</p>
        </div>
        <button id="watchListBtn">Add to watch list</button>
      </div>
    </main>
  );
};

export default Home;
