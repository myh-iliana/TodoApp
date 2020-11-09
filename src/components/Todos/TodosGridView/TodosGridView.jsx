import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions } from '@material-ui/core';

import s from './TodosGridView.module.scss';
import { DeleteIcon, EditIcon } from '../../elements/icons/icons';

const TodosGridView = ({ todos, deleteTodo }) => {
  const onDeleteTodo = (id) => deleteTodo(id);

  return (
    <Grid container justify="center" spacing={2}>
      {todos.map(({ text, id }) => (
        <Grid key={id} item lg={3} md={4} sm={6} xs={12}>
          <Card className={s.card} square>
            <CardContent>
              <Typography variant="body2" component="p">
                {text}
              </Typography>
            </CardContent>
            <CardActions>
              <EditIcon />
              <DeleteIcon onClick={() => onDeleteTodo(id)} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TodosGridView;
