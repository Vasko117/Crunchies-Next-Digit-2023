import { useState, useContext } from "react";
import Image from "next/image";
import { addItem } from "../util/menuItemUtils";
import { GlobalContext } from "../context/page";

export default function FoodItemCard(props) {
	const [quantity, setQuantity] = useState(1);
	const { user, setUser } = useContext(GlobalContext);

	let food = props.food;
	return (
		<div className="w-[300px] h-max flex flex-col justify-center items-center p-[3vh] text-center rounded-2xl drop-shadow-xl">
			<Image
				height={100}
				width={100}
				src={food.imageURL}
				alt="food"
				className=" h-max w-full rounded-tr-2xl rounded-tl-2xl "
				priority="true"
			></Image>
			<div className="flex flex-col justify-center items-center  bg-opacity-20 w-full break-words">
				<div className="flex justify-center w-full h-max bg-orange-600 p-2 ">
					<p>{food.name}</p>
				</div>

				<div className="flex flex-row w-full rounded-bl-2xl rounded-br-2xl">
					<button
						className="  bg-orange-400 hover:opacity-50 hover:bg-orange-500 w-1/3 p-2"
						onClick={() => {
							if (quantity > 0) setQuantity(quantity - 1);
						}}
					>
						-
					</button>
					<div className=" bg-white bg-opacity-25  w-1/3 flex items-center justify-center">
						<p>{food.price}</p>
					</div>
					<button
						className=" bg-green-600 hover:opacity-80 hover:bg-green-600 w-1/3 p-2 "
						onClick={() => setQuantity(quantity + 1)}
					>
						+
					</button>
				</div>
				<button
					className="bg-red-500 hover:opacity-80 hover:bg-red-500 w-full rounded-b-2xl p-2 "
					onClick={() => addItem(user.id, food.id, quantity, setUser)}
				>
					Add {quantity} to cart
				</button>
			</div>
		</div>
	);
}
