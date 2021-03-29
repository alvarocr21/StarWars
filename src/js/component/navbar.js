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
				<DropdownButton
					id="dropdown-basic-button"
					title={`Favorites ${store.favorites.length}`}
					variant="warning">
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index} href="#/action-1" onClick={() => actions.setFavorites(item)}>
								<i className="fas fa-trash-alt" /> {item}
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
