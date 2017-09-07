import React, { Component } from "react";
import './weather.css';
import { connect } from "react-redux";
import { get_yelp } from "../actions";
import Yelp from "./yelp";
import YTSearch from "./yt_search";


class LandingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
			yelp: []
		};
	}

	// 	thunderstorm: 200-299,
	// 	drizzle: 300-399,
	// 	rain: 500-599,
	// 	snow: 600-699,
	// 	atmosphere: 700-799,
	// 	clear: 800,
	// 	clouds: 801-899,
	// 	extreme: 900-999
	handleSubmit() {
		this.props.get_yelp(this.state.input);

		const {weather} = this.props;
	}

	onEnter(e) {
		if (e.key === "Enter") {
			this.props.get_yelp(this.state.input);
		}
		console.log('this is props of weather: ', this.props.weather);
	}

	render() {
		// console.log('this is weather: ', this.props.weather);
		let weather_term;
		if(!this.props.weather){
			weather_term = 'none';
		}
		else{
			weather_term = this.props.weather[1];
		}
		console.log('this is the weather term: ', weather_term);
		return (
		<div className={`body-container clear weather ${this.props.weather}`}>
			<div className="container text-center">
				{this.props.weather}
				{/* <h2 className="headings mb-2">Weather Eats</h2> */}
				<div className="row">
					<div className="input-group col-md-4 col-8 offset-md-4 mt-5">
						<input
							className="form-control"
							type="text"
							value={this.state.input}
							onChange={e => this.setState({ input: e.target.value })}
							onKeyUp={e => this.onEnter(e)}
							placeholder="Enter Zipcode"
						/>
						<div className="input-group-btn">
							<button
								className="btn btn-outline-primary"
								onClick={() => this.handleSubmit()}
							>
								Submit
							</button>
						</div>
					</div>
					<div className="input-group col-2">
						<YTSearch weather={this.props.weather} />
					</div>
				</div>
				<div className="row">
					<Yelp yelp={this.props.data} />
				</div>
			</div>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.yelp.businesses,
		weather: state.yelp.weather
	};
}

export default connect(mapStateToProps, { get_yelp })(LandingPage);
