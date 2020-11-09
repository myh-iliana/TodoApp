import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (text, categoryId) => ({
  type: ADD_TODO,
  id: uuidv4(),
  text,
  categoryId,
  createdAt: moment().format('DD.MM.YYYY'),
});