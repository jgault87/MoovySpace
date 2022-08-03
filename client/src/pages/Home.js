import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { App, AppContext } from '../App';
import './mainPage.css';
import Trailer from '../components/Trailer/Trailer.js';
import LikedMovies from '../components/LikedMovies';
import { SAVE_MOVIE } from '../utils/mutations';
import Auth from '../utils/auth';
import { saveMovieIds, getSavedMovieIds } from '../utils/localStorage';

const Home = () => {
	const [saveMovie] = useMutation(SAVE_MOVIE);
	const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

	const searchContext = useContext(AppContext);
	let posterImage = 'https://image.tmdb.org/t/p/w500' + searchContext.details.poster_path;
	// console.log(searchContext);

	const movieId = searchContext.details.id;
	const movieTitle = searchContext.details.original_title;
	const movieDescription = searchContext.details.overview;
	const moviePoster = `https://image.tmdb.org/t/p/w500${searchContext.details.poster_path}`;
	const movieBackdrop = `https://image.tmdb.org/t/p/w500${searchContext.details.backdrop_path}`;
	const movieTrailer = `https://www.youtube.com/watch?v=${searchContext.trailer.key}`;

	const movieData = {
		movieId: movieId,
		title: movieTitle,
		description: movieDescription,
		image: moviePoster,
		backdrop: movieBackdrop,
		trailer: movieTrailer
	};

	const handleSaveMovie = async () => {
		// console.log(movieData);

		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			await saveMovie({
				variables: { movie: movieData }
			});
			console.log('Movie Saved');
			// window.alert('Movie added to your watch list!');
			setSavedMovieIds([...savedMovieIds, movieData.movieId]);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<main className="movieContainer">
			<div id="moviePoster">
				<img src={posterImage} alt="Movie Poster" />
			</div>
			<div className="movieDetails">
				<h1>{searchContext.details.title}</h1>
				<p>{searchContext.details.overview}</p>
				<div className="trailerContainer">
					<Trailer className="trailer" embedId={searchContext.trailer.key} />
				</div>
				{Auth.loggedIn() && (
					<button
						disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movieData.movieId)}
						onClick={handleSaveMovie}
						className="btn btn-primary"
					>
						{savedMovieIds?.some((savedMovieId) => savedMovieId === movieData.movieId)
							? 'This movie has been add to your Watch List!'
							: 'Add to Watch List'}
					</button>
				)}
			</div>
		</main>
	);
};

export default Home;
