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
import { relative } from "path";

export default function Menu() {
  const [items, setItems] = useState([]);
  const [foodItems, setFood] = useState([]);
  const [error, setError] = useState();
  const [item, setItem] = useState("");

  useEffect(() => {
    getItems(setFood);
    getItems(setItems);
  }, []);
  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };
  function Searching(e) {
    setItems(
      foodItems.filter((item) =>
        item.name.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-[#FFD600] to-[#ff5100]  inset-0 z-[-10] absolute flex justify-normal pl-[3vw] overflow-auto hide-scrollbar">
      <div className="flex justify-center sm:flex-row md:flex-col lg:flex-col mt-[12vh] bg-slate-100 w-[220px] rounded-3xl bg-opacity-25 mr-[5vw] h-max">
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] bg-opacity-10 hover:bg-red-600 hover:opacity-80 flex justify-center ">
          <Image className="h-[10vh] w-[100px] mt-[1vh]" src={combo}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] bg-opacity-10 hover:bg-red-600 hover:opacity-80 flex justify-center">
          <Image className="h-[10vh] w-[100px]  mt-[1vh]" src={burger}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] bg-opacity-10 hover:bg-red-600 hover:opacity-80 flex justify-center">
          <Image className="h-[10vh] w-[100px]  mt-[1vh]" src={fries}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] bg-opacity-10 hover:bg-red-600 hover:opacity-80 flex justify-center">
          <Image className="h-[10vh] w-[100px]  mt-[1vh]" src={wrap}></Image>
        </button>
        <button className=" bg-white rounded-3xl h-[110px] w-[180px] ml-[2vh] m-[1vh] mt-[3vh] bg-opacity-10 hover:bg-red-600 hover:opacity-80 flex justify-center">
          <Image className="h-[10vh] w-[100px]  mt-[1vh]" src={soda}></Image>
        </button>
      </div>
      <div className="mt-[12vh] bg-slate-100 w-3/5 h-full rounded-3xl bg-opacity-25 overflow-auto hide-scrollbar">
        <div className="flex justify-between w-full items-center">
          <div className="text-center text-white text-[30px] font-bold font-['Rowdies'] leading-[5rem] drop-shadow-md mt-[1vw] ml-[2vw]">
            Choose your special bite!
          </div>
          <div className="flex items-center justify-start">
            <input
              type="search"
              placeholder="search..."
              className=" bg-red-600 h-[3vh] rounded-lg opacity-90 mr-[4vh] text-black p-2 w-full "
              onChange={Searching}
            ></input>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center  font-['Rowdies'] text-white overflow-auto hide-scrollbar  ">
          {items.map((food) => (
            <div
              key={food.id}
              className=" w-[16vw] h-max flex flex-col justify-center ite w-full ms-center p-[3vh] text-center rounded-2xl drop-shadow-xl"
            >
              <Image
                height={100}
                width={100}
                src={food.imageURL}
                alt="food"
                className=" h-max w-full rounded-tr-2xl rounded-tl-2xl "
              ></Image>
              <div className="flex flex-col justify-center items-center  bg-opacity-20 w-full break-words">
                <div className="flex justify-center w-full h-max bg-orange-600 p-2 ">
                  <p>{food.name}</p>
                </div>

                <div className="flex flex-row w-full rounded-bl-2xl rounded-br-2xl">
                  <button className="  bg-orange-400 w-1/3 p-2  ">-</button>
                  <div className=" bg-white bg-opacity-25  w-1/3 flex items-center justify-center">
                    <p>{food.price}</p>
                  </div>
                  <button className=" bg-green-600 w-1/3 p-2 ">+</button>
                </div>
                <button className="bg-red-500  w-full rounded-b-2xl p-2 ">
                  Add to cart
                </button>
              </div>
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
