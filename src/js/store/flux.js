const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			base: [
				{
					title: "Lettuce",
					image: "someurl",
					description: "white"
				},
				{
					title: "Spinach",
					image: "someurl",
					description: "white"
				},
				{
					title: "Kale",
					image: "someurl",
					description: "white"
				},
				{
					title: "Chard",
					image: "someurl",
					description: "white"
				},
				{
					title: "Collards",
					image: "someurl",
					description: "white"
				},
				{
					title: "Arugula",
					image: "someurl",
					description: "white"
				},
				{
					title: "Pea Shoots",
					image: "someurl",
					description: "white"
				},
				{
					title: "Cabbage",
					image: "someurl",
					description: "white"
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
