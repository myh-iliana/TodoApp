import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import store from '../../store';
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Main />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
