import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_current_weather } from '../actions';

class Yelp extends Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log('weather id range',this.props.id);
		console.log('main temp',this.props.temperature);
		
		return (
			<div>Yelp</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		weather: state.weather.weather
	}
}

export default connect(mapStateToProps, { get_current_weather })(Yelp);