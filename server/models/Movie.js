const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const movieSchema = new Schema({
	movieId: {
		type: Number,
		required: true
	},

	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	backdrop: {
		type: String,
		required: true
	},
	trailer: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (timestamp) => dateFormat(timestamp)
	}
});

module.exports = movieSchema;
