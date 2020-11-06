import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import store from '../../store';
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'gray',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Header />

      <Container className={classes.root}>Container</Container>
    </Provider>
  );
};

export default App;
