import React from 'react';
import Navbar from '../components/Navbar';
import { UserContextProvider } from '../context/UserContext';

function App() {
	return (
		<>
			<UserContextProvider>
				<Navbar />
			</UserContextProvider>
		</>
	);
}

export default App;
