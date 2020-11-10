import { connect } from 'react-redux';
import moment from 'moment';

import TodosList from './TodosList';
import { deleteTodo, editTodo, toggleCompleted, updateTodo } from '../../../store/actions/todos';
import { setCurrentPage } from '../../../store/actions/pagination';
import { filterTodos } from '../../../variables';

function searchTodos(todos, search) {
	return todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
}

function filterByDate(todos, dateOption) {
	if (dateOption === filterTodos.date.day) {
		const startOfDay = moment().startOf('day').valueOf();
		return todos.filter(todo => moment(todo.createdAt, 'DD.MM.YYYY').valueOf() >= startOfDay);
	}
	if (dateOption === filterTodos.date.week) {
		const startOfWeek = moment().startOf('isoWeek').valueOf();
		return todos.filter(todo => moment(todo.createdAt, 'DD.MM.YYYY').valueOf() >= startOfWeek);
	}
	if (dateOption === filterTodos.date.month) {
		const startOfMonth = moment().startOf('month').valueOf();
		return todos.filter(todo => moment(todo.createdAt, 'DD.MM.YYYY').valueOf() >= startOfMonth);
	}

	return todos;
}

function filterByCategory(todos, category) {
	const categoryOption = category === filterTodos.category.all ? null : category;

	if (categoryOption) {
		return todos.filter(todo => todo.category === categoryOption);
	}

	return todos;
}

function filterTodosByState(todos, option) {
  if (option === filterTodos.state.active) {
    return todos.filter((todo) => !todo.completed);
  }

  if (option === filterTodos.state.completed) {
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
		: filterTodosByState(
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
