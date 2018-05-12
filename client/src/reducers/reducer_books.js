import { SEARCH_BOOKS } from '../actions';

const INITIAL_STATE = {
  booksearch: [{
	id: 0,
    title: "New York Murder Mystery!!",
    authors: "Andrew Karmen",
    description: "A leading authority on trends",
    pageCount: 316,
    categories: "History",
    language: "en",
    link: "https://market.android.com/details?id=book-LLyFvWVkXA4C",
    thumbnail: "http://books.google.com/books/content?id=LLyFvWVkXA4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
	},
	{
	id: 1,
    title: "New York Murder Mystery!!",
    authors: "Andrew Karmen",
    description: "A leading authority on trends",
    pageCount: 316,
    categories: "History",
    language: "en",
    link: "https://market.android.com/details?id=book-LLyFvWVkXA4C",
    thumbnail: "http://books.google.com/books/content?id=LLyFvWVkXA4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
	id: 2,
    title: "New York Murder Mystery!!",
    authors: "Andrew Karmen",
    description: "A leading authority on trends",
    pageCount: 316,
    categories: "History",
    language: "en",
    link: "https://market.android.com/details?id=book-LLyFvWVkXA4C",
    thumbnail: "http://books.google.com/books/content?id=LLyFvWVkXA4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    }],
	advanceForm: false
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SEARCH_BOOKS:
		console.log([...state, action.payload]);
		console.log('Hooray payload', [...state, action.payload]);

		return Object.assign({}, state, {
			booksearch: (action.payload)
		});

		default: 
		return state;
	}
}