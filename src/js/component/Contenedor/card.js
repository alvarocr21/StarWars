import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { BtnAmplia } from "./btnAmplia";
import { BtnLike } from "./btnLike";

import { Context } from "../../store/appContext";

export const Card = () => {
	const { store, actions } = useContext(Context);
	let url = "";
	let Arraydata = [];
	if (store.tipo == "characters") {
		url = "https://swapi.dev/api/people/";
		Arraydata = store.characters;
	} else {
		url = "https://swapi.dev/api/planets/";
		Arraydata = store.planets;
	}
	useEffect(() => {
		actions.ApiData(url, "GET", "", { "Content-Type": "application/json" });
	}, []);

	return (
		<div>
			<Carousel>
				{Arraydata.map((item, index) => {
					return (
						<Carousel.Item key={index}>
							<img
								className="d-block w-100"
								src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
								width="400"
								height="600"
								alt="First slide"
							/>
							<Carousel.Caption>
								<div className="d-flex justify-content-between">
									<BtnAmplia />
									<BtnLike />
								</div>
								<h3>{item.name}</h3>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</div>
	);
};

Card.propTypes = {
	tipo: PropTypes.string
};
