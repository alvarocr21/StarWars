import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Container } from "react-bootstrap";

import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Seleccionado } from "./component/Seleccionado/seleccionado";
import { Single } from "./views/single";
import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Container>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/characters">
								<Characters />
							</Route>
							<Route exact path="/planets">
								<Planets />
							</Route>
							<Route exact path="/seleccionado">
								<Seleccionado />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</Container>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
