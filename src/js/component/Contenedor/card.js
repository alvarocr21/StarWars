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
		//url = "https://swapi.dev/api/people/";
		url = "https://apiasolanostarwars.herokuapp.com/character/";
		Arraydata = store.characters;
	} else {
		url = "https://apiasolanostarwars.herokuapp.com/planet/";
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
								src={item.photoUrl}
								width="400"
								height="600"
								alt="First slide"
							/>
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
