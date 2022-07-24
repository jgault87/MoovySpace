// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) =>
	axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
	);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
