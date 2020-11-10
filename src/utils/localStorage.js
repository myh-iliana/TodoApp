
export const setTodos = (todos) => localStorage.setItem('todoApp', JSON.stringify({ todos }));
export const getTodos = () => JSON.parse(localStorage.getItem('todoApp')).todos;