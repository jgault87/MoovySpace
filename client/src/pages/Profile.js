import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
	// const [savedMovies, setSavedMovies] = useState([])

	const { username: userParam } = useParams();

	const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME);

	const user = data?.me || data?.user || {};

	// console.log(user);

	// const movieData = user.savedMovies.map((movie) => ({
	// 	movieId: movie.movieId,
	// 	title: movie.title,
	// 	description: movie.description,
	// 	image: `https://image.tmdb.org/t/p/w500${movie.image}`,
	// 	trailer: movie.trailer
	// }));

	// setSavedMovies(movieData)

	// console.log(movieData);

	// navigate to personal profile page if username is yours
	if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
		return <Navigate to="/me" />;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user?.username) {
		return <h4>You need to be logged in to see this. Use the navigation links above to sign up or log in!</h4>;
	}

	


	return (
		<div>
			<div className="flex-row justify-center mb-3">
				<h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
					Viewing {userParam ? `${user.username}'s` : 'your'} profile.
				</h2>

				<div className="col-12 col-md-10 mb-5"></div>
				{!userParam && (
					<div className="profileContainer">
						<div className="sidebar">
							<Link to="/likedMovies">Liked Movies</Link>
							<button>Saved Movies</button>
							<button>Recommended Movies</button>
						</div>
						<div className="carousel">
							{user.savedMovies.map((movie) => {
								return (
									<div className="movieCard">
										<div className="moviePoster">
											<img
												alt="movie poster"
												src={`https://image.tmdb.org/t/p/w500${movie.image}`}
												width="200px"
											/>
										</div>
										<h1 className="movieTitle">{movie.title}</h1>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
