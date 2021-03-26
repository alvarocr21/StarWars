import React from "react";
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
			<Card />
			<div className="mt-4">
				<h3 style={titulo}>Planets</h3>
			</div>
			<Card />
		</div>
	);
};
