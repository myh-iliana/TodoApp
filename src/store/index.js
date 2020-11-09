import { combineReducers, createStore } from 'redux';

import todos from './reducers/todos';
import app from './reducers/app';

const rootReducer = combineReducers({
  app,
  todos,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
