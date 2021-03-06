import types from "../actions/types";
const DEFAULT_STATE = { businesses: null, weather: null, time: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_LOCAL_YELP:
			return { ...state, businesses: action.payload, error: undefined };
			break;
		case types.GET_WEATHER:
			return { ...state, weather: action.payload, error: undefined };
			break;
		case types.GET_TIME:
			return { ...state, time: action.payload, error: undefined };
			break;
		case types.ZIPCODE_FAIL:
			return { ...state, error: action.payload};
		default:
			return state;
	}
}
