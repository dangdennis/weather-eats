import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers/index';

import App from './components/app';

const store = applyMiddleware(createStore);

ReactDOM.render(
	<Provider store={store(rootReducer)}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
