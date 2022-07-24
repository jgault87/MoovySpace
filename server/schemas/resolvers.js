const { AuthenticationError } = require('apollo-server-express');
const { User, Movie } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	// Queries
	Query: {
		users: async () => {
			return User.find().populate('savedMovies');
		},
		user: async (parent, { username }) => {
			return User.findOne({ username }).populate('savedMovies');
		},
		movies: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Movie.find(params);
		},
		movie: async (parent, { movieId }) => {
			return Movie.findOne({ _id: movieId });
		},
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate('savedMovies');
			}
			throw new AuthenticationError('You need to be logged in!');
		}
	},

	// Mutations
	Mutation: {
		// Add user mutation
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
		// Log in mutation
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('No user found with this email address');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);

			return { token, user };
		},
		// Save movie mutation
		saveMovie: async (parent, { movie }, context) => {
			if (context.user) {
				return User.findOneAndUpdate(
					{ _id: context.user._id },
					{
						$addToSet: {
							savedMovies: movie
						}
					},
					{
						new: true
					}
				);
			}

			throw new AuthenticationError('You need to be logged in!');
		},
		// Remove movie mutation
		removeMovie: async (parent, { movieId }, context) => {
			if (context.user) {
				return User.findOneAndUpdate(
					{ _id: context.user._id },
					{
						$pull: { savedMovies: { movieId: movieId } }
					},
					{ new: true }
				);
			}

			throw new AuthenticationError('You need to be logged in!');
		}
	}
};

module.exports = resolvers;
