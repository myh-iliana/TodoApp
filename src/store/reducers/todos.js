import { ADD_TODO } from '../actions/todos';

const initialState = {
  items: [],
  categories: [
    {
      id: 'all-category',
      name: 'All',
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        text: action.text,
        categoryId: action.categoryId,
        createdAt: action.createdAt,
      };

      return {
        ...state,
        items: [newTodo, ...state.items],
      };

    default:
      return state;
  }
};

export default todos;
