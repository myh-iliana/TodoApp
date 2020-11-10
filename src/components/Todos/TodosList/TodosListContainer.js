import { connect } from 'react-redux';
import moment from 'moment';

import TodosList from './TodosList';
import { deleteTodo, editTodo, toggleCompleted, updateTodo } from '../../../store/actions/todos';
import { setCurrentPage } from '../../../store/actions/pagination';
import { routes } from '../../App/App';

function searchTodos(todos, search) {
	return todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
}

function filterByDate(todos, dateOption) {
	if (dateOption === 'today') {
		const startOfDay = moment().startOf('day').valueOf();
		return todos.filter(todo => moment(todo.createdAt, 'DD.MM.YYYY').valueOf() >= startOfDay);
	}
	if (dateOption === 'week') {
		const startOfWeek = moment().startOf('isoWeek').valueOf();
		return todos.filter(todo => moment(todo.createdAt, 'DD.MM.YYYY').valueOf() >= startOfWeek);
	}
	if (dateOption === 'month') {
		const startOfMonth = moment().startOf('month').valueOf();
		return todos.filter(todo => moment(todo.createdAt, 'DD.MM.YYYY').valueOf() >= startOfMonth);
	}

	return todos;
}

function filterByCategory(todos, category) {
	const categoryOption = category === 'All' ? null : category;

	if (categoryOption) {
		return todos.filter(todo => todo.category === categoryOption);
	}

	return todos;
}

function filterTodos(todos, option) {
  if (option === routes.activeTodos) {
    return todos.filter((todo) => !todo.completed);
  }

  if (option === routes.completedTodos) {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

const mapStateToProps = (state) => ({
	view: state.app.todosView,
	pageSize: state.pagination.pageSize,
	currentPage: state.pagination.currentPage,
	todos: state.filter.text
		? searchTodos(state.todos.items, state.filter.text)
		: filterTodos(
			filterByCategory(
				filterByDate(
					state.todos.items,
					state.filter.dateOption
				),
				state.filter.category
			),
			state.filter.filterOption
		),
});

const mapDispatchToProps = { deleteTodo, editTodo, updateTodo, toggleCompleted, setCurrentPage };

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
