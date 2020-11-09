import { ADD_TODO, DELETE_TODO } from '../actions/todos';

const initialState = {
  items: [],
  categories: new Set(['All']),
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        text: action.text,
        category: action.category,
        createdAt: action.createdAt,
        updatedAt: action.updatedAt,
      };

      return {
        ...state,
        items: [newTodo, ...state.items],
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
