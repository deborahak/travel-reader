import { SEARCH_BOOKS } from '../actions';

const INITIAL_STATE = {
  booksearch: [{
	id: 0,
    title: 'The Mystery of Three Quarters: the New Hercule Poirot Mystery',
    authors: [ 'Sophie Hannah' ],
    description: 'The world\'s most beloved detective, Hercule Poirot - the legendary star of Agatha Christie\'s Murder on the Orient Express and most recently The Monogram Murders and Closed Casket-returns in a stylish, diabolically clever mystery set in 1930\'s London. Returning home after lunch one day, Hercule Poirot finds an angry woman waiting outside his front door. She demands to know why Poirot has sent her a letter accusing her of the murder of Barnabas Pandy, a man she has neither heard of nor ever met. Poirot has also never heard of a Barnabas Pandy, and has accused nobody of murder. Shaken, he goes inside, only to find that he has a visitor waiting for him - a man who also claims also to have received a letter from Poirot that morning, accusing him of the murder of Barnabas Pandy... Poirot wonders how many more letters of this sort have been sent in his name. Who sent them, and why? More importantly, who is Barnabas Pandy, is he dead, and, if so, was he murdered? And can Poirot find out the answers without putting more lives in danger?',
    pageCount: 400,
    language: "en",
    link: 'https://books.google.com/books/about/The_Mystery_of_Three_Quarters_the_New_He.html?hl=&id=uPmyswEACAAJ',
    thumbnail: 'http://books.google.com/books/content?id=uPmyswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
	},
	{
	id: 1,
    title: 'Paris Spring: A Thriller',
    authors: [ 'James Naughtie' ],
    description: "A leading authority on trends",
    pageCount: 316,
    categories: [ 'Fiction' ],
    language: "en",
    link: 'https://market.android.com/details?id=book-4PnIDQAAQBAJ',
    thumbnail: 'http://books.google.com/books/content?id=4PnIDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
	id: 2,
    title: 'The Devil in Montmartre: A Mystery in Fin de Siècle Paris',
    authors: [ 'Gary Inbinder' ],
    description: 'When the mutilated corpse of a beautiful dancer is found',
    pageCount: 356,
    categories: "Fiction",
    language: "en",
    link: 'https://market.android.com/details?id=book-YhaLBQAAQBAJ',
    thumbnail: 'http://books.google.com/books/content?id=YhaLBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    }],
	advanceForm: false
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SEARCH_BOOKS:
		console.log([...state, action.payload]);
		console.log('Hurray! Payload received', [...state, action.payload]);

		return Object.assign({}, state, {
			booksearch: (action.payload)
		});

		default: 
		return state;
	}
}