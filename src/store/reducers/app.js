import { TOGGLE_MENU_VISIBLE } from '../actions/app';

const initialState = {
  isMenuVisible: true,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU_VISIBLE:
      return {
        ...state,
        isMenuVisible: !state.isMenuVisible,
      };

    default:
      return state;
  }
};

export default todos;
