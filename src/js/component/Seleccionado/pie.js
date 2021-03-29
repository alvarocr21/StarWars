import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Row, Col } from "react-bootstrap";
export const Pie = () => {
	const { store, actions } = useContext(Context);

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
			return (
				<div>
					<Row className="text-center">
						<Col>
							<p>Heigth</p>
							{store.oneItem.height}
						</Col>
						<Col>
							<p>Mass</p>
							{store.oneItem.mass}
						</Col>
						<Col>
							<p>Hair Color</p>
							{store.oneItem.hair_color}
						</Col>
						<Col>
							<p>Skin Color</p>
							{store.oneItem.skin_color}
						</Col>
						<Col>
							<p>Eye Color</p>
							{store.oneItem.eye_color}
						</Col>
						<Col>
							<p>Gender</p>
							{store.oneItem.gender}
						</Col>
					</Row>
				</div>
			);
		} else {
			return (
				<div>
					<Row className="text-center">
						<Col>
							<p>Diameter</p>
							{store.oneItem.diameter}
						</Col>
						<Col>
							<p>Climate</p>
							{store.oneItem.climate}
						</Col>
						<Col>
							<p>Gravity</p>
							{store.oneItem.gravity}
						</Col>
						<Col>
							<p>Terrain</p> {store.oneItem.terrain}
						</Col>
						<Col>
							<p>Population</p> {store.oneItem.population}
						</Col>
						<Col>
							<p>Orbital</p> {store.oneItem.orbital_period}
						</Col>
					</Row>
				</div>
			);
		}
	}
};
