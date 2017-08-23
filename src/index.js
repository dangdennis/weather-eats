import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import App from './components/app';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleWare(rootReducer)}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
