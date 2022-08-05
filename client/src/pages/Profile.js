import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import FavoriteMovies from '../components/FavoriteMovies';
import LikedMovies from '../components/LikedMovies';
import WatchListMovies from '../components/WatchListMovies';

const Profile = () => {
	const { username: userParam } = useParams();
	const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME);
	const user = data?.me || data?.user || {};

	// navigate to personal profile page if username is yours
	if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
		return <Navigate to="/profile" />;
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
					<div className="">
						{/* <FavoriteMovies favoriteMovies={user.favoriteMovies} /> */}

						{/* <LikedMovies likedMovies={user.likedMovies} /> */}

						<WatchListMovies savedMovies={user.savedMovies} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
