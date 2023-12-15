"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Home() {
	return (
		<div className="w-[100vw] h-[100vh] bg-gradient-to-t from-[#FFD600] to-[#ff3c00] -z-10 absolute overflow-hidden">
			<div className="flex items-center h-full">
				<div className="w-[50vw] flex flex-col items-center justify-center">
					<p className="text-center text-white text-lg md:text-[60px] font-bold font-['Rowdies'] md:leading-[5rem] drop-shadow-md">
						Your Taste Buds’ <br /> Second Home
					</p>
					<p className="text-center text-white text-md md:text-[20px] font-bold font-['Pacifico'] md:leading-[84.50px] drop-shadow-md">
						Home of bold bites since 2023
					</p>
					<Link href="/menu" className="px-10 py-[15px] bg-red-600 rounded-xl gap-2.5 drop-shadow-lg">
						<div className="text-center text-white text-xl font-bold font-['Rowdies'] leading-loose tracking-tight">
							Order now
						</div>
					</Link>
				</div>
			</div>
			<Spline
				id="burgerSpline"
				className="absolute top-0 md:left-[45vw] right-[-200px] scale-50 md:scale-100"
				scene="https://prod.spline.design/s74uL4LAplf83nO2/scene.splinecode"
			/>
		</div>
	);
}
