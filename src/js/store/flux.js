const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			tipo: "",
			oneItem: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			ApiData: async (url, metodo = "GET", body = "", headers = { "Content-Type": "application/json" }) => {
				const store = getStore();
				if (metodo == "GET") {
					const dataApi = await fetch(url, {
						method: metodo,
						headers: headers
					});
					const json = await dataApi.json();
					if (store.tipo == "characters") {
						setStore({ characters: json });
					} else if (store.tipo == "planets") {
						setStore({ planets: json });
					} else if (store.tipo == "oneItem") {
						setStore({ oneItem: json });
					}
				} else {
					const dataApi = await fetch(url, {
						method: metodo,
						body: body,
						headers: headers
					});
					const json = await dataApi.json();
				}
			},

			changeType: tipoMostrar => {
				setStore({ tipo: tipoMostrar });
			},

			setFavorites: favorite => {
				const store = getStore();
				let contar = 0;
				store.favorites.map((item, indice) => {
					if (favorite == item) {
						let newList = store.favorites;
						newList.splice(indice, 1);
						contar++;
						setStore({ favorites: newList });
					}
				});

				if (store.favorites.length == 0 && contar == 0) {
					setStore({ favorites: [...store.favorites, favorite] });
				} else if (store.favorites.length > 0 && contar == 0) {
					setStore({ favorites: [...store.favorites, favorite] });
				}
			}
		}
	};
};

export default getState;
