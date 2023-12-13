export function loginUser(username, password, setUser, setError) {
	try {
		fetch("http://localhost:8008/user/login", {
			method: "POST",
			body: JSON.stringify({
				username: username,
				password: password,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => {
				if (!response.ok) throw new Error("Invalid username or password");
				return response.json();
			})
			.then((data) => {
				setUser(data);
				setError();
			})
			.catch((err) => {
				setError(err);
			});
	} catch (err) {
		setError(err);
	}
}

export const registerUser = (username, password, setUser) => {
	fetch("http://localhost:8008/user/register", {
		method: "POST",
		body: JSON.stringify({
			username: username,
			password: password,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			setUser(data);
		})
		.catch((err) => {
			console.log(err);
		});
};
