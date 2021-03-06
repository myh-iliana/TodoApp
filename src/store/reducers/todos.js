import { ADD_CATEGORY, ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETED_TODO, UPDATE_TODO } from '../actions/todos';
import { getCategories, getTodos } from '../../utils/localStorage';
import { filterTodos } from '../../variables';

const initialState = {
  items: getTodos() || [],
  categories: new Set(getCategories() || [filterTodos.category.all]),
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        text: action.text,
        category: action.category,
        createdAt: action.createdAt,
        updatedAt: null,
        editMode: false,
        completed: false,
      };

      return {
        ...state,
        items: [newTodo, ...state.items],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: state.categories.add(action.category),
      };

    case TOGGLE_COMPLETED_TODO:
      return {
        ...state,
        items: state.items.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };

    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }

          return {
            ...todo,
            editMode: true,
          };
        }),
      };

    case UPDATE_TODO:
      return {
        ...state,
        items: state.items.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }

          return {
            ...todo,
            text: action.text,
            updatedAt: action.updatedAt,
            editMode: false,
          };
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };

    default:
      return state;
  }
};

export default todos;
