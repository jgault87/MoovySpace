const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
		savedMovies: [Movie]!
	}

	type Movie {
		movieId: Int
		title: String
		description: String
		image: String
		trailer: String
	}

	input inputMovie {
		movieId: Int
		title: String
		description: String
		image: String
		trailer: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		user(username: String!): User
		movies(username: String): [Movie]
		movie(movieId: String!): Movie
		me: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveMovie(movie: inputMovie!): User
		removeMovie(movieId: Int!): User
	}
`;

module.exports = typeDefs;
