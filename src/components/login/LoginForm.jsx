import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../context/UserContext';
import { getUserProfile, logIn } from '../../helpers/auth/auth-signup';

function LoginForm() {
	const { user, setUser } = useUserContext();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	function onSubmit(data) {
		logIn(data.email, data.password);
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action=""
			className="flex flex-col p-4 m-auto mt-4 space-y-4 text-white rounded-lg bg-black/80 w-fit font-body"
		>
			<header className="text-2xl">
				Log in
				<hr className="mt-1" />
			</header>
			<section>Google Login</section>
			<label className="flex flex-col">
				Email
				<input
					{...register('email')}
					type="text"
					className="px-2 py-1 w-96 text-black rounded"
				/>
			</label>
			<label className="flex flex-col">
				Password
				<input
					{...register('password')}
					type="password"
					className="px-2 py-1 w-96 text-black rounded"
				/>
			</label>
			<p>
				Don't have an account?{' '}
				<Link
					to="/register"
					className="text-blue-500 hover:text-blue-500/70"
				>
					Sign up
				</Link>
			</p>
			<button
				type="submit"
				className="px-3 py-1 m-auto text-black bg-white rounded-full w-fit hover:bg-white/70"
			>
				Log in
			</button>
		</form>
	);
}

export default LoginForm;
