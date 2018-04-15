import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';

const ROOT_URL = "/booksearch"
// to booksearch or to googlebooks

export function fetchBooks() {
	const request = axios.get(`${ROOT_URL}`);

	return {
		type: GET_BOOKS,
		payload: request
	};
}