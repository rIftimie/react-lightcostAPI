import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { signOutUser } from '../helpers/auth/auth-signup';
import { auth } from '../helpers/firebase';
import { downloadAsPDF } from '../helpers/pdf';

function Navbar() {
	const { user, setUser } = useUserContext();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('onauthstate login');
				setUser(user);
				navigate('/precioluz');
			} else {
				if (
					!user &&
					(location.pathname == '/' ||
						location.pathname == '/precioluz')
				) {
					navigate('/login');
				}
				console.log('onauthstate user signed out');
				setUser(null);
			}
		});
	}, []);

	return (
		<>
			<nav className="sticky top-0 py-2 text-lg bg-gradient-to-t from-green-300 font-body to-green-300/75">
				<ul className="flex flex-col justify-around items-center space-y-2 md:flex-row md:space-y-0">
					{user && (
						<li>
							<NavLink
								to="precioluz"
								className="font-bold font-header"
							>
								COSTE DE LA LUZ
							</NavLink>
						</li>
					)}
					{location.pathname != '/login' && !user ? (
						<li>
							<NavLink to="login">Login</NavLink>
						</li>
					) : null}

					{user && (
						<>
							<li>
								<a
									href="#"
									className="p-1 text-white bg-green-600 rounded hover:bg-green-600/80"
									onClick={() => {
										downloadAsPDF();
									}}
								>
									<i className="fa-solid fa-cloud-arrow-down"></i>{' '}
									Download PDF
								</a>
							</li>
							<li className="flex space-x-3">
								<div>
									<i className="fa-solid fa-user"></i>{' '}
									{user.displayName}
								</div>
								<div>
									<a
										onClick={() => {
											signOutUser();
										}}
										className="cursor-pointer"
									>
										<i className="fa-solid fa-right-from-bracket"></i>{' '}
										Logout
									</a>
								</div>
							</li>
						</>
					)}
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Navbar;
