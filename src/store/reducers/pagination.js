import { SET_CURRENT_PAGE } from '../actions/pagination';

const initialState = {
	pageSize: 3,
	currentPage: 1,
};

const filter = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.page,
			};

		default:
			return state;
	}
};

export default filter;
