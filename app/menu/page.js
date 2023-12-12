"use client";
import { useState, useEffect } from "react";

export default function Menu() {
	const [foodItems, setFood] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		fetch("http://localhost:8080/api")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setFood(data);
			})
			.catch((err) => setError(err));
	}, []);

	return (
		<div>
			{foodItems.map((food) => (
				<h1>{food.title}</h1>
			))}
		</div>
	);
}
