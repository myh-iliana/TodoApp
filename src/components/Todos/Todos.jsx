import React from 'react';
import { Paper } from '@material-ui/core';

import styles from './Todos.module.css';
import TopContainer from './Top/TopContainer';
import TodosListContainer from './TodosList/TodosListContainer';
import BottomContainer from './Bottom/BottomContainer';

const Todos = ({ classes }) => {
  return (
    <div className={styles.todos}>
      <TopContainer />

      <Paper className={`${classes.paper} ${styles.list}`} square={true} variant="outlined">
        <TodosListContainer />
      </Paper>

      <BottomContainer />
    </div>
  );
};

export default Todos;
