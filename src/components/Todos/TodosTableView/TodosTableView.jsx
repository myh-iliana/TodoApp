import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DeleteIcon, EditIcon } from '../../elements/icons/icons';

const TodosTableView = ({ todos }) => {
  return (
    <List component="nav">
      {todos.map(({ text }) => (
        <ListItem button>
          <ListItemText primary={text} secondary="secondary text" />
          <ListItemIcon>
            <EditIcon />
            <DeleteIcon />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};

export default TodosTableView;
