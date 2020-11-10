import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions } from '@material-ui/core';

import styles from '../TodosList/TodosList.module.scss';
import s from './TodosGridView.module.scss';
import { DeleteIcon, EditIcon } from '../../elements/icons/icons';
import Input from '../Input/Input';

const TodosGridView = ({ todos, deleteTodo, editTodo, updateTodo, toggleCompleted }) => {
	const onDeleteTodo = (id) => deleteTodo(id);
	const onEditTodo = (id) => editTodo(id);
	const onToggleCompleted = (id) => toggleCompleted(id);

	return (
		<Grid container justify="center" spacing={2}>
			{todos.map(({ text, id, editMode, completed }) => (
				<Grid key={id} item lg={3} md={4} sm={6} xs={12}>
					<Card className={s.card} square>
						<CardContent>
							{editMode && <Input oldText={text} updateTodo={updateTodo} id={id} />}
							{!editMode && (
								<Typography className={completed && styles.completed} onDoubleClick={() => onToggleCompleted(id)} variant="body2" component="p">
									{text}
								</Typography>
							)}
						</CardContent>
						<CardActions>
							<EditIcon onClick={() => onEditTodo(id)} />
							<DeleteIcon onClick={() => onDeleteTodo(id)} />
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default TodosGridView;
