import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (text, category) => ({
  type: ADD_TODO,
  id: uuidv4(),
  text,
  category,
  createdAt: moment().format('DD.MM.YYYY'),
  updatedAt: null,
});

export const updateTodo = (text, category) => ({
  type: UPDATE_TODO,
  text,
  updatedAt: moment().format('DD.MM.YYYY'),
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});