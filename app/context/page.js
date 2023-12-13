'use client';
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
	user: { email: '', password: '', name: '' },
	setUser: () => {},
});

export const GlobalContextProvider = ({ children }) => {
	const [user, setUser] = useState({ email: '', password: '', name: '' });

	return (
		<GlobalContext.Provider value={{ user, setUser }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
