import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../store';
import Header from '../Header/Header';
import Main from '../Main/Main';
import WithThemeContainer from '../WithTheme/WithThemeContainer';

export const routes = {
  activeTodos: 'active',
  completedTodos: 'completed',
};

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <WithThemeContainer>
          <Header />

          <Main />
        </WithThemeContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
