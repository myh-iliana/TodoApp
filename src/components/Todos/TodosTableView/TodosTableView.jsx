import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import s from '../TodosList/TodosList.module.scss';
import { DeleteIcon, EditIcon } from '../../elements/icons/icons';
import Input from '../Input/Input';

const TodosTableView = ({ todos, deleteTodo, editTodo, updateTodo, toggleCompleted }) => {
	const onDeleteTodo = (id) => deleteTodo(id);
	const onEditTodo = (id) => editTodo(id);
	const onToggleCompleted = (id) => toggleCompleted(id);

	return (
		<List component="nav">
			{todos.map(({ text, id, editMode, completed }) => (
				<ListItem key={id} button>
					{editMode && <Input oldText={text} updateTodo={updateTodo} id={id} />}
					{!editMode && <ListItemText className={completed && s.completed} primary={text} onDoubleClick={() => onToggleCompleted(id)} />}
					<ListItemIcon>
						<EditIcon onClick={() => onEditTodo(id)} />
						<DeleteIcon onClick={() => onDeleteTodo(id)} />
					</ListItemIcon>
				</ListItem>
			))}
		</List>
	);
};

export default TodosTableView;
