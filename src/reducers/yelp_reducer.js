import types from "../actions/types";
const DEFAULT_STATE = { businesses: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_LOCAL_YELP:
			return { ...state, businesses: action.payload };
		default:
			return state;
	}
}
