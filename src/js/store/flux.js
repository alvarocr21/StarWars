const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			tipo: "characters"
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
						setStore({ characters: json.results });
					} else if (store.tipo == "planets") {
						setStore({ planets: json.results });
					}
				} else {
					const dataApi = await fetch(url, {
						method: metodo,
						body: body,
						headers: headers
					});
					const json = await dataApi.json();
					setStore();
				}
			},

			changeType: tipoMostrar => {
				setStore({ tipo: tipoMostrar });
			}
		}
	};
};

export default getState;
