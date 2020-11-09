import React from 'react';
import { Paper } from '@material-ui/core';

import s from './Todos.module.css';
import TopContainer from './Top/TopContainer';
import TodosListContainer from './TodosList/TodosListContainer';
import BottomContainer from './Bottom/BottomContainer';

const Todos = ({ classes }) => {
  return (
    <div className={s.todos}>
      <TopContainer />

      <Paper className={classes.paper} style={{flexGrow: 1}} square={true} variant="outlined">
        <TodosListContainer />
      </Paper>

      <BottomContainer />
    </div>
  );
};

export default Todos;
