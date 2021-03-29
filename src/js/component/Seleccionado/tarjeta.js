import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Pie } from "./pie";
import { Context } from "../../store/appContext";
export const Tarjeta = () => {
	const { store, actions } = useContext(Context);
	let imagen = "";
	if (Object.keys(store.oneItem).length == 0) {
		return (
			<div>
				<Row />
			</div>
		);
	} else {
		let persona = store.oneItem.url;
		let cantidad = persona.includes("people");

		if (cantidad == true) {
			imagen = "https://lumiere-a.akamaihd.net/v1/images/Sith_7abb7b3c.jpeg?region=0%2C0%2C1600%2C900&width=768";
		} else {
			imagen =
				"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80";
		}
	}
	return (
		<div>
			<div className="testimonial-group">
				<div className="row mt-2">
					<div>
						<Card>
							<Card.Header as="h5">STAR WARS</Card.Header>
							<Container>
								<Card.Body>
									<div className="row my-1">
										<div className="col-7">
											<img width="600" height="400" variant="top" src={imagen} />
										</div>
										<div className="col-5">
											<Card border="warning">
												<Card.Header>{store.oneItem.name}</Card.Header>
												<Card.Body>
													<Card.Title>Detail</Card.Title>
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
									<Pie />
								</Card.Footer>
							</Container>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
