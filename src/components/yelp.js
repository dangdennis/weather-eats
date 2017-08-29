import React, { Component } from "react";

const Yelp = (props) => {
	if(props.yelp === null){
		return(
			<h2 className='offset-md-1'>A fun app that gives a list of restaurants based on the weather</h2>
		)
	}
	else{
		console.log('this is props', props.yelp);
		console.log('this is props for weather: ', props.weather);
		let yelp_items = props.yelp.map((item, index)=>{
			return(
				<div className='cards col-md-3' key={index}>
					<img className='rest_img' src={item.image_url} />
					<ul className='list-group'>
						<h4 className='card_title list-group-item'>{item.name}</h4>
						<li className='list-group-item'>Price: {item.price}</li>
						<li className='list-group-item'>Rating: {item.rating}/5</li>
						<li className='list-group-item'><a target="_blank" href={item.url}>Yelp URL</a></li>
					</ul>
				</div>
			);
		});
		return(
			<div className='deck row'>{yelp_items}</div>
		);
	}
};

export default Yelp;
