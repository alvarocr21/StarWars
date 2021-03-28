import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";

export const Navbar = () => {
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
					<Button variant="warning">Characters</Button>
					<Button variant="warning">Planets</Button>
				</ButtonGroup>
			</div>

			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title="Favorites" variant="warning">
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</DropdownButton>
			</div>
		</nav>
	);
};
