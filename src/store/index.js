import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { setCategories, setTheme, setTodos } from '../utils/localStorage';
import { ADD_CATEGORY, ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETED_TODO, UPDATE_TODO } from './actions/todos';
import todos from './reducers/todos';
import app from './reducers/app';
import filter from './reducers/filter';
import pagination from './reducers/pagination';
import { RESET_THEME, SET_NEW_THEME } from './actions/app';

const rootReducer = combineReducers({
	app,
	todos,
	filter,
	pagination,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveTodos = (store) => (next) => (action) => {
	if (
		action.type === ADD_TODO ||
		action.type === DELETE_TODO ||
		action.type === EDIT_TODO ||
		action.type === UPDATE_TODO ||
		action.type === TOGGLE_COMPLETED_TODO
	) {
		const result = next(action);
		setTodos(store.getState().todos.items);
		return result;
	}

	if (action.type === ADD_CATEGORY) {
		const result = next(action);
		setCategories([...store.getState().todos.categories]);
		return result;
	}

	if (action.type === SET_NEW_THEME || action.type === RESET_THEME) {
		const result = next(action);
		setTheme(store.getState().app.colors);
		return result;
	}

	return next(action);
};

const middlewareEnhancer = applyMiddleware(saveTodos);

const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));

export default store;
