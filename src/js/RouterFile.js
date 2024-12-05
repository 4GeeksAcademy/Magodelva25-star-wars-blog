import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/sections/home/home.jsx";
import { Films } from "./components/sections/films/films.js";
import { Planets } from "./components/sections/planets/planets.js";
import injectContext from "./store/appContext";
import { NavBar } from "./components/navbar/navBar.js"
import { Footer } from "./components/footer/footer.js"
import {Routerbar} from "./components/routerBar/routerbar.js"
import "./RouterFile.css";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<main className="container">
			<BrowserRouter basename={basename}>
				<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/films" element={<Films />} />
						<Route path="/planets" element={<Planets />} />
					</Routes>
					<Routerbar/>
					<Footer />	
			</BrowserRouter>
		</main>
	);
};

export default injectContext(Layout);
