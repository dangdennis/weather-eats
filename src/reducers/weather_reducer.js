import types from '../actions/types';
const DEFAULT_STATE = { weather: {} };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_CURRENT_WEATHER:
			return { ...state, weather: action.payload }
		default:
			return state;
	}
}
