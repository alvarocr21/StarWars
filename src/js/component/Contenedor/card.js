import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { BtnAmplia } from "./btnAmplia";
import { BtnLike } from "./btnLike";
export const Card = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
						width="400"
						height="600"
						alt="First slide"
					/>
					<Carousel.Caption>
						<div className="d-flex justify-content-between">
							<BtnAmplia />
							<BtnLike />
						</div>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://lumiere-a.akamaihd.net/v1/images/captain-lang-main_dce2adfb.jpeg?region=372%2C0%2C537%2C537&width=320"
						width="400"
						height="600"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
						width="400"
						height="600"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			{/* <div className="testimonial-group">
				<div className="row mt-4">
					<div className="cardhorizontal col-4">
						<div className="card">
							<img
								src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Personaje</h5>
								<p className="card-text ml-3">
									<li>Gender:</li>
									<li>Hair Color:</li>
									<li>Eye Color:</li>
								</p>
								<div className="d-flex justify-content-between">
									<BtnAmplia />
									<BtnLike />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

Card.prototype = {
	tipo: PropTypes.string
};
