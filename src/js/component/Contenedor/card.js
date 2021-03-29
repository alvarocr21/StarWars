import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { BtnAmplia } from "./btnAmplia";
import { BtnLike } from "./btnLike";

import { Context } from "../../store/appContext";

export const Card = () => {
	const { store, actions } = useContext(Context);
	let url = "";
	let Arraydata = [];
	let imagen = "";

	if (store.tipo == "characters") {
		url = "https://swapi.dev/api/people/";
		Arraydata = store.characters;
		imagen = "https://lumiere-a.akamaihd.net/v1/images/Sith_7abb7b3c.jpeg?region=0%2C0%2C1600%2C900&width=768";
	} else {
		url = "https://swapi.dev/api/planets/";
		Arraydata = store.planets;
		imagen =
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80";
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
							<img className="d-block w-100" src={imagen} width="400" height="600" alt="First slide" />
							<Carousel.Caption>
								<div className="d-flex justify-content-between">
									<BtnAmplia url={item.url} />
									<BtnLike name={item.name} indice={index} />
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
