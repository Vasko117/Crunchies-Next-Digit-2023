"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import fries from "../../public/french-fries.png";
import burger from "../../public/burger(1).png";
import combo from "../../public/burger.png";
import soda from "../../public/soda.png";
import wrap from "../../public/burrito.png";
import Spline from "@splinetool/react-spline";
import { getItems } from "../util/menuItemUtils";
import CategoryButton from "../components/categoryButton";
import FoodItemCard from "../components/foodItemCard";

export default function Menu() {
	const [items, setItems] = useState([]);
	const [foodItems, setFood] = useState([]);
	const [error, setError] = useState();
	const [item, setItem] = useState("");

	useEffect(() => {
		getItems(setFood);
	}, []);

	useEffect(() => {
		setItems(foodItems);
	}, [foodItems]);

	function Searching(e) {
		setItems(foodItems.filter((item) => item.name.toUpperCase().includes(e.target.value.toUpperCase())));
	}

	function handleCategoryClick(foodType) {
		setItems(foodItems.filter((item) => item.name.includes(foodType)));
	}

	function ItemType(props) {
		if (items.filter((food) => food.menuItemType == props.text.toUpperCase()).length == 0) return;
		return (
			<>
				<h1 className="text-center text-white text-[40px] font-bold font-['Rowdies'] drop-shadow-md">{props.text}</h1>
				<div className="flex flex-row flex-wrap justify-center font-['Rowdies'] text-white overflow-auto hide-scrollbar">
					{items &&
						items
							.filter((food) => food.menuItemType == props.text.toUpperCase())
							.map((food) => <FoodItemCard key={food.id} food={food}></FoodItemCard>)}
				</div>
			</>
		);
	}

	return (
		<div className="w-screen h-screen bg-gradient-to-t pt-[150px] md:pt-16 lg:pt-0 from-[#FFD600] to-[#ff5100] inset-0 z-[-10] absolute flex justify-normal px-[2vw] lg:pl-[3vw] overflow-auto hide-scrollbar">
			<div className="flex flex-row mt-[13vh] justify-center w-full">
				<div className="hidden md:flex flex-col bg-slate-100 w-fit bg-opacity-25 rounded-3xl mr-[4vw] px-5 pb-5 h-max">
					<CategoryButton text={"combo"} src={combo} setItems={setItems} items={foodItems}></CategoryButton>
					<CategoryButton text={"burger"} src={burger} setItems={setItems} items={foodItems}></CategoryButton>
					<CategoryButton text={"fries"} src={fries} setItems={setItems} items={foodItems}></CategoryButton>
					<CategoryButton text={"drink"} src={soda} setItems={setItems} items={foodItems}></CategoryButton>
					<CategoryButton text={"snack"} src={wrap} setItems={setItems} items={foodItems}></CategoryButton>
				</div>
				<div className="flex flex-row items-center w-full">
					<div className="bg-slate-100 h-full w-full rounded-3xl bg-opacity-25 overflow-auto hide-scrollbar">
						<div className="flex justify-evenly w-full items-center mt-[1vw]">
							<div className="text-center text-white text-[10px] hidden md:block md:text-[30px] font-bold font-['Rowdies'] leading-[5rem] drop-shadow-md ml-[2vw]">
								Choose your special bite!
							</div>
							<div className="hidden md:flex items-center justify-end w-1/2">
								<input
									type="search"
									placeholder="search..."
									className=" bg-red-600 h-[3vh] rounded-lg opacity-90 mr-[4vh] text-black p-2 w-1/2"
									onChange={Searching}
								></input>
							</div>
						</div>
						<ItemType text="Combo"></ItemType>
						<ItemType text="Burger"></ItemType>
						<ItemType text="Drink"></ItemType>
						<ItemType text="Snack"></ItemType>
						<ItemType text="Fries"></ItemType>
					</div>
					<div className="lg:w-[14vw] mr-1">
						<Spline
							id="burgerSpline"
							className="[&>*]:!w-[15vw] [&>*]:!h-[15vw] hidden md:block"
							scene="https://prod.spline.design/s74uL4LAplf83nO2/scene.splinecode"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
