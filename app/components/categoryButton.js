import Image from "next/image";

export default function CategoryButton(props) {
	return (
		<button
			onClick={() => props.setItems(props.items.filter((food) => food.menuItemType == props.text.toUpperCase()))}
			className=" bg-red-500 opacity-100 rounded-3xl h-[120px] w-[120px] mt-5 hover:bg-red-600 hover:opacity-80 flex justify-center items-center shadow-lg"
		>
			<Image alt={props.text} className="h-[90px] w-[90px]" src={props.src}></Image>
		</button>
	);
}
