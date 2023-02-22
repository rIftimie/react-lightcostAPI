import React, { useContext, useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{props.children}
		</UserContext.Provider>
	);
}

export function useUserContext() {
	return useContext(UserContext);
}
