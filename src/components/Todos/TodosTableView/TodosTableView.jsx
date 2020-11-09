import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DeleteIcon, EditIcon } from '../../elements/icons/icons';

const TodosTableView = ({ todos, deleteTodo }) => {
  const onDeleteTodo = (id) => deleteTodo(id);

  return (
    <List component="nav">
      {todos.map(({ text, id }) => (
        <ListItem key={id} button>
          <ListItemText primary={text} secondary="secondary text" />
          <ListItemIcon>
            <EditIcon />
            <DeleteIcon onClick={() => onDeleteTodo(id)} />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};

export default TodosTableView;
