'use client'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { createContext, useState } from 'react';
import Navbar from '../components/navbar';
import Link from 'next/link';

export default function AuthContext() {
	const [currentUser, setcurrentUser] = useState({});
	function AuthContextProvider({ children }) {}
	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
}
