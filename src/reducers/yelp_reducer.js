import types from "../actions/types";
const DEFAULT_STATE = { businesses: null, weather: null, time: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_LOCAL_YELP:
			return { ...state, businesses: action.payload };
			break;
		case types.GET_WEATHER:
			return { ...state, weather: action.payload };
			break;
		case types.GET_TIME:
			return { ...state, time: action.payload };
		default:
			return state;
	}
}
