import axios from 'axios';

export const SEARCH_BOOKS = 'search_books';
export const RATE_BOOK ='rate_book';

const ROOT_URL = 'http://localhost:3001';
// to booksearch or to googlebooks
// const API_KEY = '?key=' for back end, later features

export function searchBooks(values) {
	const url = (`${ROOT_URL}/booksearch`);
	console.log(values);
	return {
		type: SEARCH_BOOKS,
		payload: new Promise((resolve, reject) => {
			axios.get(url, { params: values })
			.then(response => resolve(response.data))
		})
	}
};

export function rateBook(userRating, id, averageRating, ratingsCount) {
	const url = (`${ROOT_URL}/user_ratings`);
	console.log(userRating, id, averageRating, ratingsCount);
	return {
		type: RATE_BOOK,
		payload: new Promise((resolve, reject) => {
			// axios.post(url, { params: userRating })
			// .then(response => resolve(response.data))
		})
	}
};






