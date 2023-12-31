export const getItems = (setItems, setError) => {
	fetch("http://localhost:8008/menuItem/getAll")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setItems(data);
		})
		.catch((err) => setError(err));
};

export const addItem = (userId, menuId, amount, setUser) => {
	console.log(userId);
	console.log(menuId);
	fetch("http://localhost:8008/addItem", {
		method: "PUT",
		body: JSON.stringify({
			userId: userId,
			menuItemId: menuId,
			amount: amount,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => {
			if (!response.ok) throw new Error("Invalid userId or menuItemId");
			return response.json();
		})
		.then((data) => {
			setUser(data);
		})
		.catch((err) => {
			throw new Error(err);
		});
};
