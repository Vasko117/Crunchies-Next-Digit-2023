'use client';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';

import Navbar from '../components/navbar';
import Link from 'next/link';

export default function Register() {
	return (
		<div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-t from-[#FFD600] to-[#ff5100]">
			<div className=" flex justify-center items-center w-max h-max mt-12 ">
				<div className="pl-5 text-white text-[100px] font-PacificoHeading drop-shadow-md ">
					Crunchies
				</div>
				<div className="flex flex-col  justify-center items-center w-max h-max  rounded-[50px] p-6 pt-11 font-Rowdies text-white text-2xl object-cover">
					<label htmlFor="Name"> Name</label>
					<input
						type="text"
						id="Name"
						className="w-[400px]  bg-red-600  justify-center inline-flex rounded-3xl mb-10 p-1"
						style={{ zIndex: 1 }}
					></input>
					<label htmlFor="mail">Email</label>
					<input
						type="text"
						id="mail"
						className="w-[400px] bg-red-600  justify-center inline-flex rounded-3xl mb-10 p-1"
						style={{ zIndex: 1 }}
					></input>
					<label htmlFor="password">Password</label>
					<input
						type="text"
						id="password"
						className="w-[400px]   bg-red-600  justify-center inline-flex rounded-3xl mb-10 p-1"
						style={{ zIndex: 1 }}
					></input>
					<button
						className="px-10 py-[15px] bg-red-600  gap-2.5 rounded-3xl w-max scale-75 mr-4"
						style={{ zIndex: 1 }}
					>
						<div className="text-center text-white text-xl font-bold font-['Rowdies'] leading-loose tracking-tight">
							Sign up
						</div>
					</button>
					<div className="flex row items-center">
						<p>Already have an accout?</p>
						<button className=" gap-2.5 rounded-3xl p-3 " style={{ zIndex: 1 }}>
							<Link
								href="/login"
								className="text-center text-white text-xl font-bold font-['Rowdies'] leading-loose tracking-tight"
							>
								<u>Log in</u>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
