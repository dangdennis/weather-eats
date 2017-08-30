import { combineReducers } from 'redux';
import yelpReducer from './yelp_reducer';

export default combineReducers({
	yelp: yelpReducer
});
