import React, { Component } from "react";
import { connect } from "react-redux";
import { get_yelp } from "../actions";

import Yelp from "./yelp";

class LandingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ""
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
		if (!this.props.data) {
			console.log("no data yet");
		}
		console.log("if data, hi we have data from props", this.props.data);
		return (
			<div>
				<input
					type="text"
					value={this.state.input}
					onChange={e => this.setState({ input: e.target.value })}
				/>
				<button onClick={() => this.handleSubmit()}>Submit Zipcode</button>
				<Yelp />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.yelp.businesses
	};
}

export default connect(mapStateToProps, { get_yelp })(LandingPage);
