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

	useEffect(() => {
		fetch('http://localhost:8080/api')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setFood(data);
			})
			.catch((err) => setError(err));
	}, []);

	return (
		<div className="w-screen h-screen bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] absolute flex justify-normal pl-[3vw] overflow-auto hide-scrollbar">
			{/* {foodItems.map((food) => (
        <h1>{food.title}</h1>
      ))} */}
			<div className="flex justify-center md:flex-col lg:flex-col lg:items-start mt-[12vh] bg-slate-100 w-max rounded-3xl opacity-25 mr-[5vw] h-max">
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[5vw] mt-[1vh]" src={combo}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[5vw] mt-[1vh]" src={burger}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[5vw] mt-[1vh]" src={fries}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[5vw] mt-[1vh]" src={wrap}></Image>
				</button>
				<button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
					<Image className="h-[10vh] w-[5vw] mt-[1vh]" src={soda}></Image>
				</button>
			</div>
			<div className="flex justify-center md:flex-col lg:flex-row lg:items-start sm:items-center md:items-center mt-[12vh] bg-slate-100 w-3/5 h-full rounded-3xl bg-opacity-25">
				<div className="flex justify-between w-11/12">
					<div className="text-center text-white text-[30px] font-bold font-['Rowdies'] leading-[5rem] drop-shadow-md>Choose your special bite!">
						Choose your special bite!
					</div>
					<input
						type="search"
						placeholder="search..."
						className=" bg-white w-1/3 h-[3vh] mt-[3vh] rounded-3xl opacity-90 right-4 text-black"
					></input>
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
