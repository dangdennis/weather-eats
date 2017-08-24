import { combineReducers } from 'redux';
import weatherReducer from './weather_reducer';

export default combineReducers({
	weather: weatherReducer
});
