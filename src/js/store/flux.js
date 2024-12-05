const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			films: [],
			planets: [], 
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
					.catch(err => console.error(err))
					
				fetch("https://www.swapi.tech/api/films/")
					.then((resp) => {
						if (!resp.ok) {
							throw new Error("Error al añadir la informacion");
					}
						return resp.json();
					})
					.then(respJson => {
					const filmListData = respJson.results;
					setStore({ films: filmListData });
					})
					.catch(err => console.error(err))

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

			},

		}
	};
};


export default getState;
