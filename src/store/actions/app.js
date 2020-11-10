export const TOGGLE_MENU_VISIBLE = 'TOGGLE_MENU_VISIBLE';
export const TOGGLE_TODOS_VIEW = 'TOGGLE_TODOS_VIEW';
export const SET_NEW_THEME = 'SET_NEW_THEME';
export const RESET_THEME = 'RESET_THEME';

export const toggleMenu = () => ({
  type: TOGGLE_MENU_VISIBLE,
});

export const toggleView = (view) => ({
  type: TOGGLE_TODOS_VIEW,
  view,
});

export const setNewTheme = (themePart, color) => ({
  type: SET_NEW_THEME,
  themePart,
  color,
});

export const resetTheme = () => ({
  type: RESET_THEME,
});
