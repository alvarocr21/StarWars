import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const BtnAmplia = () => {
	return (
		<Link to="/seleccionado">
			<Button variant="outline-primary">Learn more!</Button>
		</Link>
	);
};
