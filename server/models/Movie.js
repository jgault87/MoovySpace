const { Schema } = require('mongoose');

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
	}
});

module.exports = movieSchema;
