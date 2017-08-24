import types from "./types";
import axios from "axios";

const WEATHER_API_KEY = "e10d3078fcfee83959e11c64b8895226";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?zip=`;

export function get_yelp(zipcode) {
	return dispatch => {
		const url = `${ROOT_URL}${zipcode},us&appid=${WEATHER_API_KEY}`;
		const request = axios.get(url).then(resp => {
			const id = resp.data.weather[0].id;
			var term = determineWeather(id);
			console.log("term", term);
			axios
				.post("http://localhost:5000/search", { zipcode, term })
				.then(resp => {
					console.log("resp within yelp search", resp);
					dispatch({
						type: types.GET_LOCAL_YELP,
						payload: resp.data
					});
				});
		});
	};
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
