"use client";
import Link from "next/link";
import { LoginUser } from "../util/userUtils";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/page";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { user, setUser } = useContext(GlobalContext);

  return (
    <div className=" flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-t from-[#FFD600] to-[#ff5100] ">
      <div className="pl-5 text-white text-[100px] font-PacificoHeading drop-shadow-md ">
        Crunchies
      </div>
      <div className="w-max h-max   flex-col justify-center items-center  inline-flex p-6 pt-11 font-Rowdies text-white text-2xl">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="w-[400px] bg-red-600  justify-center inline-flex rounded-3xl mb-10 p-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ zIndex: 1 }}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[400px]   bg-red-600  justify-center inline-flex rounded-3xl mb-10 p-1"
          style={{ zIndex: 1 }}
        ></input>
        <button
          className="px-10 py-[15px] bg-red-600  gap-2.5 rounded-3xl mb-2 "
          style={{ zIndex: 1 }}
          onClick={() => LoginUser(username, password, setUser, setError)}
        >
          <div className="text-center text-white text-xl font-bold font-['Rowdies'] leading-loose tracking-tight">
            Log in
          </div>
        </button>
        <div className="flex row items-center">
          <p>No account? </p>
          <Link
            href="/register"
            className="text-center text-white text-xl font-bold font-['Rowdies'] leading-loose tracking-tight"
          >
            <u>Register</u>
          </Link>
        </div>
        <p className="text-red-600">{error && error.message}</p>
        <p>{user && user.username}</p>
      </div>
    </div>
  );
}
