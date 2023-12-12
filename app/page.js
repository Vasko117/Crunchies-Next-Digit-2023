"use client";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-t from-[#FFD600] to-[#ff5100] -z-10 absolute">
      <div className="flex mt-[8%]">
        <div className="w-[50vw] flex flex-col items-center justify-center">
          <p className="text-center text-white text-[80px] font-bold font-['Rowdies'] leading-[5rem]">
            Your Taste Buds’ <br /> Second Home
          </p>
          <p className="text-center text-white text-3xl font-bold font-['Pacifico'] leading-[84.50px]">
            Home of bold bites since 2023
          </p>
          <button className="px-10 py-[15px] bg-red-600 rounded-[5px] gap-2.5">
            <div className="text-center text-white text-2xl font-bold font-['Rowdies'] leading-loose tracking-tight">
              See Our Menu
            </div>
          </button>
        </div>
        <Spline
          id="burgerSpline"
          className="absolute top-[8vh] left-[45vw]"
          scene="https://prod.spline.design/s74uL4LAplf83nO2/scene.splinecode"
        />
      </div>
    </div>
  );
}
