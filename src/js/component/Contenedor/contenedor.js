import React from "react";
import { Row, Col } from "react-bootstrap";

import { Card } from "./card";
export const Contenedor = () => {
	const titulo = {
		color: "red"
	};
	return (
		<div>
			<div className="mt-4">
				<h3 style={titulo}>Characters</h3>
			</div>

			<Card tipo="characters" />

			<div className="mt-4">
				<h3 style={titulo}>Planets</h3>
			</div>
			<Card tipo="planets" />
		</div>
	);
};
