import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, ButtonGroup, Button, Badge } from "react-bootstrap";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						width="75"
						height="50"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<ButtonGroup size="lg" aria-label="Basic example">
					<Link to="characters">
						<Button onClick={() => actions.changeType("characters")} variant="warning">
							Characters
						</Button>
					</Link>
					<Link to="planets">
						<Button onClick={() => actions.changeType("planets")} variant="warning">
							Planets
						</Button>
					</Link>
				</ButtonGroup>
			</div>

			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title={<Badge variant="light">9</Badge>} variant="warning">
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</DropdownButton>
			</div>
		</nav>
	);
};
