import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import todos from './reducers/todos';
import app from './reducers/app';
import { setTodos } from '../utils/localStorage';

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

  return next(action);
};

const middlewareEnhancer = applyMiddleware(saveTodos);

const store = createStore(
  rootReducer,
  composeEnhancers(middlewareEnhancer),
);

export default store;
