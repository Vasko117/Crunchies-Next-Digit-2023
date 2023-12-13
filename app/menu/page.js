"use client";
import { useState, useEffect } from "react";
import { getItems } from "../util/menuItemUtils";
import { loginUser } from "../util/userUtils";

export default function Menu() {
	const [foodItems, setFood] = useState([]);
	const [error, setError] = useState();
	const [user, setUser] = useState();

	useEffect(() => {
		getItems(setFood, setError);
		//loginUser("dimi", "dimi", setUser);
	}, []);

	return (
		<div>
			{user && user.username}
			{foodItems.map((food) => (
				<h1 key={food.id}>{food.name}</h1>
			))}
		</div>
	);
}
