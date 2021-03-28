import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
export const Tarjeta = () => {
	return (
		<div>
			<div className="testimonial-group">
				<div className="row mt-2">
					<div>
						<Card>
							<Card.Header as="h5">Card title</Card.Header>
							<Container>
								<Card.Body>
									<div className="row my-1">
										<div className="col-7">
											<img
												width="600"
												height="400"
												variant="top"
												src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
											/>
										</div>
										<div className="col-5">
											<Card border="warning">
												<Card.Header>Header</Card.Header>
												<Card.Body>
													<Card.Title>Warning Card Title</Card.Title>
													<Card.Text className="text-wrap">
														Some quick example text to build on the card title and make up
														the bulk of the cards content.
													</Card.Text>
												</Card.Body>
											</Card>
										</div>
									</div>
								</Card.Body>
								<Card.Footer className="text-muted">
									<Row>
										<Col>Name</Col>
										<Col>Climate</Col>
										<Col>Population</Col>
										<Col>Orbital</Col>
										<Col>Rotation</Col>
										<Col>Diameter</Col>
									</Row>
								</Card.Footer>
							</Container>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.prototype = {
	tipo: PropTypes.string
};
