import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropsType from "prop-types";
import { Button } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const BtnAmplia = props => {
	const { store, actions } = useContext(Context);
	return (
		<Link to="/seleccionado">
			<Button
				onClick={() => {
					let urlhttps = props.url.replace("http", "https");
					actions.changeType("oneItem");
					actions.ApiData(urlhttps, "GET", "", { "Content-Type": "application/json" });
				}}
				variant="outline-primary">
				Learn more!
			</Button>
		</Link>
	);
};

BtnAmplia.propTypes = {
	url: PropsType.string
};
