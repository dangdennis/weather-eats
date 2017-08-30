import React, { Component } from "react";

const Yelp = props => {
	if (props.yelp === null) {
		return (
			<div className="headings">
				<h3>Fine dining with some tunes</h3>
			</div>
		);
	} else {
		let yelp_items = props.yelp.map((item, index) => {
			return (
				<div className="col-md-3 col-6" key={index}>
					<div className="cards p-2">
						<img className="restaurant_img" src={item.image_url} />
						<ul className="list-group text-center">
							<h4 className="card_title list-group-item">
								{item.name}
							</h4>
							<li className="list-group-item">
								Price Range: {item.price}
							</li>
							<li className="list-group-item">
								Rating: {item.rating}/5
							</li>
							<li className="list-group-item">
								<a target="_blank" href={item.url}>
									Yelp URL
								</a>
							</li>
						</ul>
					</div>
				</div>
			);
		});
		return (
			<div className="deck row mt-3 mb-5">
				{yelp_items}
			</div>
		);
	}
};

export default Yelp;
