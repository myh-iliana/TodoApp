import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import Header from '../Header/Header';
import Main from '../Main/Main';
import WithThemeContainer from '../WithTheme/WithThemeContainer';

const App = () => {
	return (
		<Provider store={store}>
			<WithThemeContainer>
				<Header />

				<Main />
			</WithThemeContainer>
		</Provider>
	);
};

export default App;
