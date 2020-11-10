import { RESET_THEME, SET_NEW_THEME, TOGGLE_MENU_VISIBLE, TOGGLE_TODOS_VIEW } from '../actions/app';
import { getTheme } from '../../utils/localStorage';

const initialState = {
	isMenuVisible: true,
	todosView: 'table',
	colorsName: [
		{ name: 'primary', text: 'Primary' },
		{ name: 'secondary', text: 'Secondary' },
		{ name: 'textPrimary', text: 'Text primary' },
		{ name: 'textSecondary', text: 'Text secondary' },
		{ name: 'contrastTextPrimary', text: 'Contrast text 1' },
		{ name: 'contrastTextSecondary', text: 'Contrast text 2' },
	],
	colors: getTheme() || {
		primary: null,
		secondary: null,
		textPrimary: null,
		textSecondary: null,
		contrastTextPrimary: null,
		contrastTextSecondary: null,
	},
};

const todos = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_MENU_VISIBLE:
			return {
				...state,
				isMenuVisible: !state.isMenuVisible,
			};

		case TOGGLE_TODOS_VIEW:
			return {
				...state,
				todosView: action.view,
			};

		case SET_NEW_THEME:
			return {
				...state,
				colors: {
					...state.colors,
					[action.themePart]: action.color,
				},
			};

		case RESET_THEME:
			return {
				...state,
				colors: {
					...state.colors,
					primary: null,
					secondary: null,
					textPrimary: null,
					textSecondary: null,
					contrastTextPrimary: null,
					contrastTextSecondary: null,
				},
			};

		default:
			return state;
	}
};

export default todos;
