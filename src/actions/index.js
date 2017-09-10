import types from "./types";
import axios from "axios";
// import YTSearch from "youtube-api-search";
import KEY from './keys'
// const KEY = require("./keys");
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
export function get_yelp(zipcode) {
	return dispatch => {
		const url = `${ROOT_URL}${zipcode},us&appid=${KEY.api_key}`;
		const request = axios.get(url).then(resp => {
			const id = resp.data.weather[0].id;
			const weather_term = determineWeatherTerm(id);
			dispatch({
				type: types.GET_WEATHER,
				payload: [id, weather_term]
			});
			var term = determineWeather(id);
			axios
				.post("http://localhost:5000/search", { zipcode, term })
				.then(resp => {
					dispatch({
						type: types.GET_LOCAL_YELP,
						payload: resp.data
					});
				});
		});
	};
}
export function get_time(){
	let time = new Date().getHours();
	let time_bg;
	if(time >= 20 && time <=4){
		time_bg = 'stars twinkling';
	}
	else if (time >= 5 && time <= 7){
		time_bg = 'sunrise';
	}
	else if (time >= 8 && time <= 16){
		time_bg = 'sunshine';
	}
	else if (time >= 17 && time <= 19){
		time_bg = 'sunset';
	}
	return dispatch =>{
		dispatch({
			type: types.GET_TIME,
			payload: time_bg
		});
	}
}
function determineWeatherTerm(weatherID){
	let weather_term;

	switch (weatherID) {
		//case for thunderstorm, drizzle, and rain weather
		case weatherID >= 200 && weatherID <= 599 ? weatherID : !weatherID:
			weather_term = 'rain weather';
			break;
		//case for snow weather
		case weatherID >= 600 && weatherID <= 699 ? weatherID : !weatherID:
			weather_term = 'snow weather';
			break;
		//case for atmosphere weather
		case weatherID >= 700 && weatherID <= 799 ? weatherID : !weatherID:
			weather_term = 'clear weather';
			break;
		//case for clear weather
		case weatherID == 800 ? weatherID : !weatherID:
			weather_term = 'clear weather';
			break;
		//case for clouds
		case weatherID > 800 && weatherID <= 899 ? weatherID : !weatherID:
			weather_term = 'cloud0 cloudy_weather0';
			break;
		//case for extreme weathers
		case weatherID >= 900 && weatherID <= 999 ? weatherID : !weatherID:
			weather_term = 'danger';
			break;
	}
	return weather_term;
}
function determineWeather(weatherID) {
	// const condition = {
	// 	thunderstorm: 200-299,
	// 	drizzle: 300-399,
	// 	rain: 500-599,
	// 	snow: 600-699,
	// 	atmosphere: 700-799,
	// 	clear: 800,
	// 	clouds: 801-899,
	// 	extreme: 900-999
	// }
	let clearfood = ["icecream", "cafe", "coffee", "boba", "frozen desserts"];
	let cloudfood = ["coffee", "cafe", "soup", "noodles"];
	let rainsnowfood = [
		"ramen",
		"udon",
		"pho",
		"hotpot",
		"shabu shabu",
		"american",
		"fondue"
	];
	let term;

	switch (weatherID) {
		//case for thunderstorm, drizzle, and rain weather
		case weatherID >= 200 && weatherID <= 599 ? weatherID : !weatherID:
			term = rainsnowfood[Math.floor(Math.random() * rainsnowfood.length)];
			break;
		//case for snow weather
		case weatherID >= 600 && weatherID <= 699 ? weatherID : !weatherID:
			term = rainsnowfood[Math.floor(Math.random() * rainsnowfood.length)];
			break;
		//case for atmosphere weather
		case weatherID >= 700 && weatherID <= 799 ? weatherID : !weatherID:
			term = clearfood[Math.floor(Math.random() * clearfood.length)];
			break;
		//case for clear weather
		case weatherID == 800 ? weatherID : !weatherID:
			term = clearfood[Math.floor(Math.random() * clearfood.length)];
			break;
		//case for clouds
		case weatherID > 800 && weatherID <= 899 ? weatherID : !weatherID:
			term = cloudfood[Math.floor(Math.random() * cloudfood.length)];
			break;
		//case for extreme weathers
		case weatherID >= 900 && weatherID <= 999 ? weatherID : !weatherID:
			term = rainsnowfood[Math.floor(Math.random() * rainsnowfood.length)];
			break;
	}
	return term;
}
