import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/login/RegisterForm';
import ErrorPage from './error/ErrorPage';
import LightCostContainer from './pages/lightcost/LightCostContainer';
import { getHourlyCost } from './helpers/fetch';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'login',
				element: <LoginForm />,
			},
			{
				path: 'register',
				element: <RegisterForm />,
			},
			{
				path: 'precioluz',
				element: <LightCostContainer />,
				loader: async () => {
					return await getHourlyCost();
				},
			},
		],
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider index={<ErrorPage />} router={router} />
);
