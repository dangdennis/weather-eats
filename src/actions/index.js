import types from './types';
import axios from 'axios';

const WEATHER_API_KEY = 'e10d3078fcfee83959e11c64b8895226';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?zip=`;

const YELP_API_KEY = 'td2RSrKBQrd8lw4fm911Jg';
const YELP_SECRET = 'Ort6WXlVvE3NdPsuAUP9JJFhmPxV5DVIGEJ6ai7xNIe2ozFyJlaZ7IbIwciYFtf1';
const YELP_ACCESS_TOKEN = 'donuOalT_5_5rg7UuD1Fku2SeIqFRLaYUKCANaudNLckbxkTk3NhrnRb2Bt-Cb9J0rTS0gCVRpDho8Uysb_LkDO8vW9ursXzosDzTe5uCtC93FkT610wEO4Kfx6eWXYx';

export function get_current_weather(zipcode) {
	return dispatch => {
		const url = `${ROOT_URL}${zipcode},us&appid=${WEATHER_API_KEY}`;
		const request = axios.get(url).then(resp => {
			dispatch({
				type: types.GET_CURRENT_WEATHER,
				payload: resp.data
			})
		})
	}
}

export function get_yelp() {
	return dispatch => {

	}
}
