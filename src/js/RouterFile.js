import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Characters } from "./components/sections/Characters/Characters.jsx";
import { CharDetails } from "./components/sections/details/CharactersDetails/CharacterDetails.jsx";
import { Films } from "./components/sections/films/films.jsx";
import { FilmDetails } from "./components/sections/details/FilmsDetails/FilmDetails.jsx";
import { Planets } from "./components/sections/planets/planets.jsx";
import { PlanetDetails } from "./components/sections/details/PlanetsDetails/planetsDetails.jsx";
import { Starships } from "./components/sections/Starships/starships.jsx";
import { Species } from "./components/sections/Species/species.jsx";
import { Favourites } from "./components/sections/Fav/favourite.jsx";
import injectContext from "./store/appContext.js";
import { NavBar } from "./components/navbar/navBar.jsx"
import { Footer } from "./components/footer/footer.jsx"

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
					<Route path="/" element={<Characters />} />
					<Route path="/films" element={<Films />} />
					<Route path="/planets" element={<Planets />} />
					<Route path="/planets/:id/" element={<PlanetDetails />} />
					<Route path="/starships" element={<Starships />} />
					<Route path="/people/:id/" element={<CharDetails />} />
					<Route path="/films/:id/" element={<FilmDetails />} />
					<Route path="/species" element={<Species />} />
					<Route path="/fav/" element={<Favourites />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	);
};

export default injectContext(Layout);
