import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../App';
import { useMutation } from '@apollo/client';
import { ADD_USER, FAVORITE_MOVIE } from '../../utils/mutations';

import { useAnimation, motion } from 'framer-motion';

import leftSpotLight from '../../images/leftSpotLight.png';
import rightSpotLight from '../../images/rightSpotLight.png';

import Auth from '../../utils/auth';
import './Signup.css';

export default function Signup() {
	//Grabbing the ID's of each input field to check if the user filled it out before the animation
	const userName = document.getElementById('userName');
	const password = document.getElementById('password');
	const email = document.getElementById('email');

	const [formState, setFormState] = useState({
		username: '',
		email: '',
		password: '',
		firstFavMovie: '',
		secondFavMovie: '',
		thirdFavMovie: ''
	});

	const [addUser, { error, data }] = useMutation(ADD_USER);
	const [favoriteMovie] = useMutation(FAVORITE_MOVIE);

	const searchContext = useContext(AppContext);
	let posterImage = 'https://image.tmdb.org/t/p/w500' + searchContext.details.poster_path;
	let movieBackdrop = 'https://image.tmdb.org/t/p/w500' + searchContext.details.backdrop_path;

	const movieId = searchContext.details.id;
	const movieTitle = searchContext.details.original_title;
	const movieDescription = searchContext.details.overview;
	const moviePoster = searchContext.details.poster_path;
	const movieTrailer = searchContext.trailer;

	const movieData = {
		movieId: movieId,
		title: movieTitle,
		description: movieDescription,
		image: moviePoster,
		backdrop: movieBackdrop,
		trailer: movieTrailer
	};

	const handleFavoriteMovie = async () => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			await favoriteMovie({
				variables: { movie: movieData }
			});
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value
		});
		searchContext.searchMovie(formState.firstFavMovie);
		handleFavoriteMovie(searchContext);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addUser({
				variables: { ...formState }
			});

			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	//Giving each function the animation state
	const leftSpotLightAnimation = useAnimation();
	const rightSpotLightAnimation = useAnimation();

	//Initialize the animation to be off the screen
	const startLeftSpotLight = {
		hidden: {
			x: '-100vw'
		}
	};
	const startRightSpotLight = {
		hidden: {
			x: '100vw'
		}
	};

	//Functions for the animation
	async function leftSequence() {
		await leftSpotLightAnimation.start({
			x: '-20vw',
			transition: {
				//different types can be applied such as 'tween' or 'inertia'
				type: 'spring',
				stiffness: '40'
			}
		});
	}

	async function rightSequence() {
		await rightSpotLightAnimation.start({
			//Changing the x value will change the position of the spot light
			x: '10vw',
			transition: {
				//Stiffness will change how much 'springiness' is applied
				type: 'spring',
				stiffness: '40'
			}
		});
	}

	if (userName && userName.value && email.value && password.value) {
		leftSequence();
		rightSequence();
		console.log('Success');
	}

	return (
		<main className="form">
			<h4>User Information</h4>
			<div>
				{data ? (
					<p>
						Success! You may now head <Link to="/">back to the homepage.</Link>
					</p>
				) : (
					<form onSubmit={handleFormSubmit}>
						<div className="userInfoForm">
							{/* Set each div to their variant and call the animations when called */}
							{/* Each div will have a starting position and end position with the animation being handled by the framer motion library */}
							<motion.div variants={startLeftSpotLight} animate={leftSpotLightAnimation} initial="hidden">
								<img id="leftSpotLight" src={leftSpotLight} alt={leftSpotLight} />
							</motion.div>
							<motion.div variants={startRightSpotLight} animate={rightSpotLightAnimation} initial="hidden">
								<img id="rightSpotLight" src={rightSpotLight} alt={rightSpotLight} />
							</motion.div>
							<input
								id="userName"
								className="form-input"
								placeholder="Your username"
								name="username"
								type="text"
								value={formState.name}
								onChange={handleChange}
							/>
							<input
								id="email"
								className="form-input"
								placeholder="Your email"
								name="email"
								type="email"
								value={formState.email}
								onChange={handleChange}
							/>
							<input
								id="password"
								className="form-input"
								placeholder="******"
								name="password"
								type="password"
								value={formState.password}
								onChange={handleChange}
							/>
						</div>
						<h4>Tells us your top 3 favorite movies!</h4>
						<div className="userInfoForm">
							<input
								className="form-input"
								placeholder="Ex: The Other Guys"
								name="firstFavMovie"
								type="text"
								value={formState.firstFavMovie}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="Ex: Forst Gump"
								name="secondFavMovie"
								type="text"
								value={formState.secondFavMovie}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="Ex: Cars"
								name="thirdFavMovie"
								type="text"
								value={formState.thirdFavMovie}
								onChange={handleChange}
							/>
						</div>
						<div className="signUp">
							<button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} type="submit">
								Action! 🎥
							</button>
						</div>
					</form>
				)}

				{error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
			</div>
		</main>
	);
}
