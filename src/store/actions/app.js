export const TOGGLE_MENU_VISIBLE = 'TOGGLE_MENU_VISIBLE';
export const TOGGLE_TODOS_VIEW = 'TOGGLE_TODOS_VIEW';

export const toggleMenu = () => ({
  type: TOGGLE_MENU_VISIBLE,
});

export const toggleView = (view) => ({
  type: TOGGLE_TODOS_VIEW,
  view,
});
