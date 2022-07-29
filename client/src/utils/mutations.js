import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const SAVE_MOVIE = gql`
	mutation saveMovie($movie: inputMovie!) {
		saveMovie(movie: $movie) {
			username
			email
			savedMovies {
				movieId
				title
				description
				image
				trailer
			}
		}
	}
`;

export const REMOVE_MOVIE = gql`
	mutation removeMovie($movieId: Int!) {
		removeMovie(movieId: $movieId) {
			username
			email
			savedMovies {
				movieId
				title
				description
				image
				trailer
			}
		}
	}
`;
