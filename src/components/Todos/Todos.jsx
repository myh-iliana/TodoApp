import React from 'react';
import { Divider, Paper } from '@material-ui/core';

import s from './Todos.module.css';
import TopContainer from './Top/TopContainer';

const Todos = ({ classes }) => {
  return (
    <div className={s.todos}>
      <TopContainer />

      <Paper className={classes.paper} square={true} variant="outlined">
        <div>Todos</div>
      </Paper>
    </div>
  );
};

export default Todos;
