import React, { Component } from "react";

const Yelp = (props) => {
	if(props.yelp === null){
		return(
			<h1>Enter a Zipcode to Find Food Related to the Weather!</h1>
		)
	}
	else{
		console.log('this is props', props.yelp);
		let yelp_items = props.yelp.map((item, index)=>{
			return(
					<div className='card'>
						<img src={item.image_url} />
						<div className='card-block'>
							<h4 className='card-title'>{item.name}</h4>
							<div>
								<p className='card-text'>Rating: {item.rating}</p>
								<p className='card-text'>Price: {item.price}</p>
								<p className='card-text'><a href={item.url}>Yelp URL</a></p>
							</div>
						</div>
					</div>
			);
		});
		return(
			<div className='card-group'>{yelp_items}</div>
		);
	}
};

export default Yelp;
