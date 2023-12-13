"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import fries from "../../public/french-fries.png";
import burger from "../../public/burger(1).png";
import combo from "../../public/burger.png";
import soda from "../../public/soda.png";
import wrap from "../../public/burrito.png";
import { getItems } from "../util/menuItemUtils";

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
    <div className="w-screen h-screen bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] absolute flex justify-normal pl-[3vw]">
      {/* {foodItems.map((food) => (
        <h1>{food.title}</h1>
      ))} */}
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
      <div className="flex justify-center md:flex-col lg:flex-row lg:items-start sm:items-center md:items-center mt-[12vh] bg-slate-100 w-3/5 h-full rounded-3xl opacity-25">
        <input type="search" className=" bg-white w-1/3 h-5px"></input>
      </div>
    </div>
  );
}
