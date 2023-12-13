"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import fries from "../../public/french-fries.png";
import burger from "../../public/burger(1).png";
import combo from "../../public/burger.png";
import soda from "../../public/soda.png";
import wrap from "../../public/burrito.png";
import Spline from "@splinetool/react-spline";
import { getItems } from "../util/menuItemUtils";

export default function Menu() {
  const [foodItems, setFood] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getItems(setFood);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] absolute flex justify-normal pl-[3vw]">
      <div className="flex justify-center md:flex-col lg:flex-col lg:items-start mt-[12vh] bg-slate-100 w-[220px] rounded-3xl opacity-25 mr-[5vw] h-[80vh]">
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
          <Image className="h-[100px] w-[100px] mt-[1vh]" src={combo}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
          <Image className="h-[100px] w-[100px] mt-[1vh]" src={burger}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
          <Image className="h-[100px] w-[100px] mt-[1vh]" src={fries}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
          <Image className="h-[100px] w-[100px] mt-[1vh]" src={wrap}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] flex justify-center">
          <Image className="h-[100px] w-[100px] mt-[1vh]" src={soda}></Image>
        </button>
      </div>
      <div className=" md:flex-col lg:flex-row lg:items-start sm:items-center md:items-center mt-[12vh] bg-slate-100 w-3/5 h-full rounded-3xl bg-opacity-25">
        <div className="flex justify-between w-full">
          <div className="text-center text-white text-[30px] font-bold font-['Rowdies'] leading-[5rem] drop-shadow-md m-[1vw] ml-[2vw]">
            Choose your special bite!
          </div>
          <input
            type="search"
            placeholder="search..."
            className=" bg-white w-1/3 h-[3vh] mt-[4.5vh] rounded-3xl opacity-90 mr-[4vh] text-black "
          ></input>
        </div>
        <div className="flex justify-normal font-['Rowdies'] text-white">
          {foodItems.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-md w-1/6 h-1/6 bg-opacity-20 m-[3vh] text-center"
            >
              <p>{food.name}</p>
              <p>{food.price}</p>
              <Image src={}></Image>
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
