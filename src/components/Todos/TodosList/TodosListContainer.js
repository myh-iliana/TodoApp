import { connect } from 'react-redux';

import TodosList from './TodosList';
import { deleteTodo, editTodo, toggleCompleted, updateTodo } from '../../../store/actions/todos';
import { setCurrentPage } from '../../../store/actions/pagination';
import { routes } from '../../App/App';

function searchTodos(todos, search) {
	return todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
}

function filterTodos(todos, option, category) {
	const categoryOption = category === 'All' ? null : category;

  if (option === routes.activeTodos) {
    return todos.filter((todo) => {
    	if (categoryOption) {
				return !todo.completed && todo.category === categoryOption;
			}

			return !todo.completed;
		});
  }
  if (option === routes.completedTodos) {
    return todos.filter((todo) => {
    	if (categoryOption) {
				return todo.completed && todo.category === categoryOption;
			}

			return todo.completed;
		});
  }

  return todos.filter(todo => {
  	if (categoryOption) {
			return todo.category === category;
		}

  	return true;
	});
}

const mapStateToProps = (state) => ({
	view: state.app.todosView,
	pageSize: state.pagination.pageSize,
	currentPage: state.pagination.currentPage,
	todos: state.filter.text
		? searchTodos(state.todos.items, state.filter.text)
		: filterTodos(state.todos.items, state.filter.filterOption, state.filter.category),
});

const mapDispatchToProps = { deleteTodo, editTodo, updateTodo, toggleCompleted, setCurrentPage };

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
