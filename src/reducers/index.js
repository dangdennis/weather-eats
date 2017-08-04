import { combineReducers } from 'redux';
import authReducers from './auth_reducer';

export default combineReducers({
	auth: authReducers
});
