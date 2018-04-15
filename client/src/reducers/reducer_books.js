import { GET_BOOKS } from '../actions/index';

const inititalState = {
	all: []
};

export default function(state = inititalState, action) {
	if (state === {
		form: {

		}
	}) { console.log('Holy Cow!');
}
	else { console.log('nope');
};

	switch(action.type) {
		case GET_BOOKS:
			return { ...state, all: action.payload.data };
		default: return state;
	}
}