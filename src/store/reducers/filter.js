import { SEARCH_TODO, SET_CATEGORY_OPTION, SET_DATE_OPTION, SET_FILTER_OPTION } from '../actions/filter';
import { filterTodos } from '../../variables';

const initialState = {
	text: '',
	filterOption: null,
	category: filterTodos.category.all,
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

		case SET_DATE_OPTION:
			return {
				...state,
				dateOption: action.option,
			};

		default:
			return state;
	}
};

export default filter;
