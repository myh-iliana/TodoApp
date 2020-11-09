import React from 'react';
import { Paper } from '@material-ui/core';

import s from './Todos.module.css';
import TopContainer from './Top/TopContainer';
import Bottom from './Bottom/Bottom';

const Todos = ({ classes }) => {
  return (
    <div className={s.todos}>
      <TopContainer />

      <Paper className={classes.paper} style={{flexGrow: 1}} square={true} variant="outlined">
        <div>Todos</div>
      </Paper>

      <Bottom />
    </div>
  );
};

export default Todos;
