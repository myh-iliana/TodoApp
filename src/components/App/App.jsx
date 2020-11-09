import React from 'react';
import { Provider } from 'react-redux';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import store from '../../store';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Header />

      <Main />
    </Provider>
  );
};

export default App;
