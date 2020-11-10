import React from 'react';

import styles from './TodosList.module.scss';
import TodosTableView from '../TodosTableView/TodosTableView';
import TodosGridView from '../TodosGridView/TodosGridView';
import Pagination from '../Pagination/Pagination';
import { todosView } from '../../../variables';

const TodosList = ({ view, todos, deleteTodo, editTodo, updateTodo, toggleCompleted, pageSize, setCurrentPage, currentPage }) => {

	const pagination = (items, currentPage, pageSize) => {
		return items.slice((pageSize * currentPage) - pageSize, pageSize * currentPage);
	};

	const todosToRender = pagination(todos, currentPage, pageSize);

	if (todos.length === 0) {
		return <div className={styles.noTodos}>No todos yet...</div>;
	}

	return (
		<>
			{view === todosView.table && (
				<TodosTableView
					todos={todosToRender}
					toggleCompleted={toggleCompleted}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
					updateTodo={updateTodo}
				/>
			)}
			{view === todosView.grid && (
				<TodosGridView
					todos={todosToRender}
					toggleCompleted={toggleCompleted}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
					updateTodo={updateTodo}
				/>
			)}
			<Pagination setCurrentPage={setCurrentPage} totalCount={todos.length} pageSize={pageSize} />
		</>
	);
};

export default TodosList;
