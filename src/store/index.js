import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import todos from './reducers/todos';
import app from './reducers/app';
import { setCategories, setTodos } from '../utils/localStorage';
import { ADD_CATEGORY } from './actions/todos';

const rootReducer = combineReducers({
  app,
  todos,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveTodos = store => next => action => {
  if (action.type.includes('TODO')) {
    const result = next(action);
    setTodos(store.getState().todos.items);
    return result;
  }

  if (action.type === ADD_CATEGORY) {
    const result = next(action);
    setCategories([...store.getState().todos.categories]);
    return result;
  }

  return next(action);
};

const middlewareEnhancer = applyMiddleware(saveTodos);

const store = createStore(
  rootReducer,
  composeEnhancers(middlewareEnhancer),
);

export default store;
