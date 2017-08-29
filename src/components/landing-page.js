import React, { Component } from "react";
import { connect } from "react-redux";
import { get_yelp } from "../actions";
import "./style.css";
import Yelp from "./yelp";
import Youtube from "./youtube-iframe";

class LandingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
			yelp: []
		};
	}

	handleSubmit() {
		this.props.get_yelp(this.state.input);
	}

	render() {
		// const { weather, main } = this.props.data;
		// if (!this.props.data) {
		// 	return <div>Loading...</div>;
		// }
		return (
			<div className="container">
				<h2>Weather Eats</h2>
				<div className="row">
					<div className="input-group col-md-5 offset-md-4">
						<input
							className="form-control"
							type="text"
							value={this.state.input}
							onChange={e => this.setState({ input: e.target.value })}
						/>
						<div className="input-group-btn">
							<button
								className="btn btn-outline-primary"
								onClick={() => this.handleSubmit()}
							>
								Submit Zipcode
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<Yelp yelp={this.props.data} />
				</div>
				<div className="row">
					<Youtube />
				</div>
			</div>
			<div className='row'>
				<Yelp yelp = {this.props.data} />
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
	console.log('this is weather: ', this.state.weather);
}

export default connect(mapStateToProps, { get_yelp })(LandingPage);
