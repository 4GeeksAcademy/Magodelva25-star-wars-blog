const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			films: [],
			planets: [],
			starships: [],
			species: [],
			favourite: JSON.parse(localStorage.getItem("favourite")) || []
		},
		
		

		actions: {
			loadMainApiData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((resp) => {
						if (!resp.ok) {
							throw new Error("Error al añadir la informacion");
						}
						return resp.json();
					})
					.then(respJson => {
						const peopleListData = respJson.results;
						setStore({ people: peopleListData });
					})

					.catch(err => console.error(err)),



					fetch("https://www.swapi.tech/api/films")
						.then((resp) => {
							if (!resp.ok) {
								throw new Error("Error al añadir la informacion");
							}
							return resp.json();
						})
						.then(respJson => {
							const store = getStore();
							const filmListData = respJson.result;
							setStore({ films: filmListData });
						})

						.catch(err => console.error(err)),



					fetch("https://www.swapi.tech/api/planets/")
						.then((resp) => {
							if (!resp.ok) {
								throw new Error("Error al añadir la informacion");
							}
							return resp.json();
						})
						.then(respJson => {
							const planetsListData = respJson.results;
							setStore({ planets: planetsListData });
						})
						.catch(err => console.error(err))


				fetch("https://www.swapi.tech/api/starships")
					.then((resp) => {
						if (!resp.ok) {
							throw new Error("Error al añadir la informacion");
						}
						return resp.json();
					})
					.then(respJson => {
						const starshipsListData = respJson.results;
						setStore({ starships: starshipsListData });
					})
					.catch(err => console.error(err)),

				fetch("https://www.swapi.tech/api/species/")
					.then((resp) => {
						if (!resp.ok) {
							throw new Error("Error al añadir la informacion");
						}
						return resp.json();
					})
					.then(respJson => {
						const speciesListData = respJson.results;
						setStore({ species: speciesListData });
					})
					.catch(err => console.error(err))
			},

			getFavouriteItems: (item) => {
				const store = getStore();
				const fav = store.favourite;
				const isFavorite = fav.some(favItem => favItem.uid === item.uid && favItem.type === item.type);
				if (!isFavorite) {
					const updatedFav = [...fav, item];
					setStore({ favourite: updatedFav });
					localStorage.setItem("favourite", JSON.stringify(updatedFav));
				}
				console.log(item)
			},
			
			removeFavouriteItems: (item) => {
				const store = getStore();
				const fav = store.favourite;
				const updatedFav = fav.filter(favItem => favItem !== item);
				setStore({ favourite: updatedFav });
				localStorage.setItem("favourite", JSON.stringify(updatedFav));
	
			},

		}
	}
}
	export default getState;
