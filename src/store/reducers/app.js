import {TOGGLE_MENU_VISIBLE, TOGGLE_TODOS_VIEW} from '../actions/app';

const initialState = {
  isMenuVisible: true,
  todosView: 'table',
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU_VISIBLE:
      return {
        ...state,
        isMenuVisible: !state.isMenuVisible,
      };

    case TOGGLE_TODOS_VIEW:
      return {
        ...state,
        todosView: action.view,
      };

    default:
      return state;
  }
};

export default todos;
