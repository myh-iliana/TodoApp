import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions } from '@material-ui/core';

import styles from './TodosGridView.module.scss';
import { DeleteIcon, EditIcon } from '../../elements/icons/icons';
import Input from '../Input/Input';

const TodosGridView = ({ todos, deleteTodo, editTodo, updateTodo, toggleCompleted }) => {
	const onDeleteTodo = (id) => deleteTodo(id);
	const onEditTodo = (id) => editTodo(id);
	const onToggleCompleted = (id) => toggleCompleted(id);

	return (
		<Grid container justify="center" spacing={2}>
			{todos.map(({ text, id, editMode, completed, category, createdAt }) => (
				<Grid key={id} item lg={3} md={4} sm={6} xs={12} onDoubleClick={() => onToggleCompleted(id)}>
					<Card className={styles.card} square>
						<CardContent>
							{editMode && <Input oldText={text} updateTodo={updateTodo} id={id} />}
							{!editMode && (
								<Typography className={completed ? styles.completed : ''} variant="body2" component="p">
									{text}
								</Typography>
							)}
							<Typography className={styles.secondaryText} color="textSecondary" gutterBottom>
								{category}, {createdAt}
							</Typography>
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
