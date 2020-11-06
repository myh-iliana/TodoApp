import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';

const rootReducer = combineReducers({
  todos,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
