import React, { Component } from "react";
import { connect } from "react-redux";
import { get_yelp } from "../actions";
import "./style.css";
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

	handleSubmit() {
		this.props.get_yelp(this.state.input);
	}

	onEnter(e) {
		if (e.key === "Enter") {
			this.props.get_yelp(this.state.input);
		}
	}

	render() {
		return (
			<div className="container text-center mt-5">
				<h2 className="headings mb-2">Weather Eats</h2>
				<div className="row">
					<div className="input-group col-md-4 col-8 offset-md-4">
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
