import React, { Component } from "react";
import { connect } from "react-redux";
import { get_yelp, get_time } from "../actions";
import Yelp from "./yelp";
import YTSearch from "./yt_search";
import './timeofday.css';
import './weather.css';

class LandingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
			yelp: []
		};
	}
	componentWillMount(){
		this.props.get_time();
	}
	handleSubmit() {
		this.props.get_yelp(this.state.input);
	}
	onEnter(e) {
		if (e.key === "Enter") {
			this.props.get_yelp(this.state.input);
		}
	}
	render() {
		let weather_term;
		if(!this.props.weather){
			weather_term = 'none';
		}
		else{
			weather_term = this.props.weather[1];
		}
		console.log('this is the props for the time_Bg: ', this.props.time);
		const { time } = this.props
		//add weather term ${weather_term}
		return (
		<div className={`body-container ${time} ${weather_term}`}>
			<div className="container text-center">
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
		weather: state.yelp.weather,
		time: state.yelp.time
	};
}

export default connect(mapStateToProps, { get_yelp, get_time })(LandingPage);
