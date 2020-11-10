import { SEARCH_TODO, SET_CATEGORY_OPTION, SET_FILTER_OPTION } from '../actions/filter';

const initialState = {
	text: '',
	filterOption: null,
	category: 'All',
	dateOption: null,
};

const filter = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_TODO:
			return {
				...state,
				text: action.text,
			};

		case SET_FILTER_OPTION:
			return {
				...state,
				filterOption: action.option,
			};

		case SET_CATEGORY_OPTION:
			return {
				...state,
				category: action.category,
			};

		default:
			return state;
	}
};

export default filter;
