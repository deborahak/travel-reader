import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { BookReducer } from './reducer_books';

const rootReducer = combineReducers({
	// state: (state= {}) => state,
	form: formReducer
});

export default rootReducer;
