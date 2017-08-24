import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_current_weather } from '../actions';

import Yelp from './yelp';

class LandingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		}
	}

	handleSubmit() {
		console.log('subbmitting');
		console.log('state input',this.state.input);
		this.props.get_current_weather(this.state.input);
	}

	render() {
		const { weather, main } = this.props.data;
		if(!this.props.data){
			return <div>Loading...</div>
		}
		console.log('weather updated',this.props.data);
		return (
			<div>
				<input type="text" value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
				<button onClick={() => this.handleSubmit()}>Submit Zipcode</button>
				<Yelp id={weather} temperature={main} />
			</div>
		)
	}
}

function mapStateToProps(state) {

	return {
		data: state.weather.weather
	}
}

export default connect(mapStateToProps, { get_current_weather })(LandingPage);