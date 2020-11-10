import { connect } from 'react-redux';

import TodosList from './TodosList';
import { deleteTodo, editTodo, toggleCompleted, updateTodo } from '../../../store/actions/todos';
import { routes } from '../../App/App';

function searchTodos(todos, search) {
	return todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
}

function filterTodos(todos, option, category) {
  if (option === routes.activeTodos) {
    return todos.filter((todo) => !todo.completed && todo.category === category);
  }
  if (option === routes.completedTodos) {
    return todos.filter((todo) => todo.completed && todo.category === category);
  }

  return todos.filter(todo => todo.category === category);
}

const mapStateToProps = (state) => ({
	view: state.app.todosView,
	todos: state.filter.text
		? searchTodos(state.todos.items, state.filter.text)
		: filterTodos(state.todos.items, state.filter.filterOption, state.filter.category),
});

const mapDispatchToProps = { deleteTodo, editTodo, updateTodo, toggleCompleted };

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
