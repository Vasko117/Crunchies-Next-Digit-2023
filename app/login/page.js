'use client';
import Spline from '@splinetool/react-spline';

import Navbar from '../components/navbar';
import Link from 'next/link';

export default function Login() {
	return (
		<div className=" flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-t from-[#FFD600] to-[#ff5100] ">
			<div className="w-max h-max bg-opacity-50 bg-yellow-50 rounded-[50px]  shadow-xl  flex-col justify-center items-center  inline-flex p-6 pt-11 font-Rowdies text-white text-2xl">
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
					className="px-10 py-[15px] bg-red-600  gap-2.5 rounded-3xl mb-2 "
					style={{ zIndex: 1 }}
				>
					<div className="text-center text-white text-xl font-bold font-['Rowdies'] leading-loose tracking-tight">
						Log in
					</div>
				</button>
				<div className="flex row items-center">
					<p>No account?</p>
					<button
						className=" bg-red-600  gap-2.5 rounded-3xl p-3 "
						style={{ zIndex: 1 }}
					>
						<Link
							href="/register"
							className="text-center text-white text-xl font-bold font-['Rowdies'] leading-loose tracking-tight"
						>
							Register
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
