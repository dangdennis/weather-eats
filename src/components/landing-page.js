import React, { Component } from "react";
import { connect } from "react-redux";
import { get_yelp } from "../actions";
import './style.css';
import Yelp from "./yelp";

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
		<div className='container'>
			<div className='row'>
				<input
					type="text"
					value={this.state.input}
					onChange={e => this.setState({ input: e.target.value })}
				/>
				<button onClick={() => this.handleSubmit()}>Submit Zipcode</button>
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
		data: state.yelp.businesses
	};
}

export default connect(mapStateToProps, { get_yelp })(LandingPage);
