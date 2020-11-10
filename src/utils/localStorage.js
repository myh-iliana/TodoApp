
export const setTodos = (todos) => localStorage.setItem('todoAppTodos', JSON.stringify(todos));
export const getTodos = () => JSON.parse(localStorage.getItem('todoAppTodos'));

export const setCategories = (categories) => localStorage.setItem('todoAppCategories', JSON.stringify(categories));
export const getCategories = () => JSON.parse(localStorage.getItem('todoAppCategories'));

export const setTheme = (theme) => localStorage.setItem('todoAppTheme', JSON.stringify(theme));
export const getTheme = () => JSON.parse(localStorage.getItem('todoAppTheme'));