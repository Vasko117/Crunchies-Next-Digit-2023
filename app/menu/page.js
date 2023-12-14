'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import fries from '../../public/french-fries.png';
import burger from '../../public/burger(1).png';
import combo from '../../public/burger.png';
import soda from '../../public/soda.png';
import wrap from '../../public/burrito.png';
import Spline from '@splinetool/react-spline';
import { getItems } from '../util/menuItemUtils';

export default function Menu() {
	const [foodItems, setFood] = useState([]);
	const [error, setError] = useState();
	const [itemname, setItemname] = useState('');

	useEffect(() => {
		getItems(setFood);
	}, []);
	const handleKey = (e) => {
		if (e.code === 'Enter') {
			handleSearch();
		}
	};
	const handleSelect = async () => {};

	return (
		<div className="w-screen h-screen bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] absolute flex justify-normal pl-[3vw] overflow-auto hide-scrollbar">
			<div className="flex justify-center sm:flex-row md:flex-col lg:flex-col mt-[12vh] bg-slate-100 w-[220px] rounded-3xl opacity-25 mr-[5vw] h-max">
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[100px] mt-[1vh]" src={combo}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[100px]  mt-[1vh]" src={burger}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[100px]  mt-[1vh]" src={fries}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[100px]  mt-[1vh]" src={wrap}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[100px]  mt-[1vh]" src={soda}></Image>
				</button>
			</div>
			<div className="mt-[12vh] bg-slate-100 w-3/5 h-full rounded-3xl bg-opacity-25 overflow-auto hide-scrollbar">
				<div className="flex justify-between w-full">
					<div className="text-center text-white text-[30px] font-bold font-['Rowdies'] leading-[5rem] drop-shadow-md m-[1vw] ml-[2vw]">
						Choose your special bite!
					</div>
					<div className="flex-col mr-3">
						<input
							type="search"
							placeholder="search..."
							className=" bg-red-600 w-full h-[3vh] mt-[4.5vh] rounded-sm opacity-90 mr-[4vh] text-black p-2 "
							onKeyDown={handleKey}
							onChange={(e) => setUsername(e.target.value)}
							value={itemname}
						></input>
						<div className="h-max border-x-2 border-y-2 border-black w-max rounded-sm">
							<div
								className="flex items-center p-5 cursor-pointer border-2 border-black w-max h-[10px]"
								onClick={() => handleSelect(user)}
							>
								<Image src={fries} className="w-[2vw]" alt="User" />
								<div className="font-bold text-base">
									<span>Extra large burger</span>
								</div>
							</div>
							<div
								className="flex items-center p-5 cursor-pointer border-2 border-black w-max h-[10px] rounded-sm"
								onClick={() => handleSelect(user)}
							>
								<Image src={fries} className="w-[2vw]" alt="User" />
								<div className="font-bold text-base">
									<span>Extra large burger</span>
								</div>
							</div>
							<div
								className="flex items-center p-5 cursor-pointer border-2 border-black w-max h-[10px] rounded-sm"
								onClick={() => handleSelect(user)}
							>
								<Image src={fries} className="w-[2vw]" alt="User" />
								<div className="font-bold text-base">
									<span>Extra large burger</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 font-['Rowdies'] text-white ">
					{foodItems.map((food) => (
						<div
							key={food.id}
							className="bg-white rounded-md  h-max bg-opacity-20 m-[3vh] flex flex-col justify-center items-center p-[3vh] text-center rounded-2xl"
						>
							<Image
								height={100}
								width={100}
								src={food.imageURL}
								className="rounded-xl"
							></Image>
							<p>{food.name}</p>
							<p>{food.price}</p>
							<button className="px-10 py-[15px] bg-red-600  rounded-2xl w-max scale-75 ">
								<div className="text-center text-white text-lg font-bold font-['Rowdies'] leading-loose tracking-tight">
									Order now!
								</div>
							</button>
						</div>
					))}
				</div>
			</div>

			<Spline
				id="burgerSpline"
				className="absolute top-[2vh] right-[-11vw] scale-50"
				scene="https://prod.spline.design/s74uL4LAplf83nO2/scene.splinecode"
			/>
		</div>
	);
}
