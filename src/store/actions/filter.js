export const SEARCH_TODO = 'SEARCH_TODO';
export const SET_FILTER_OPTION = 'SET_FILTER_OPTION';
export const SET_CATEGORY_OPTION = 'SET_CATEGORY_OPTION';
export const SET_DATE_OPTION = 'SET_DATE_OPTION';

export const searchTodos = (text) => ({
	type: SEARCH_TODO,
	text,
});

export const setFilterOption = (option) => ({
	type: SET_FILTER_OPTION,
	option,
});

export const setCategoryOption = (category) => ({
	type: SET_CATEGORY_OPTION,
	category,
});

export const setDateOption = (option) => ({
	type: SET_DATE_OPTION,
	option,
});
