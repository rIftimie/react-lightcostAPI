import React from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../context/UserContext';
import { createUser } from '../../helpers/auth/auth-signup';

function LoginForm() {
	const { user, setUser } = useUserContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function onSubmit(data) {
		if (data.password === data.confirmPassword) {
			createUser(data.username, data.email, data.password).then(
				(loginUser) => {
					setUser(loginUser);
				}
			);
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col p-4 m-auto mt-4 space-y-4 text-white rounded-lg bg-black/80 w-fit font-body"
		>
			<header className="text-2xl">
				Register
				<hr className="mt-1" />
			</header>

			<label className="flex flex-col">
				Username
				<input
					{...register('username')}
					type="text"
					className="px-2 py-1 w-96 text-black rounded"
				/>
			</label>
			<label className="flex flex-col">
				Email
				<input
					{...register('email')}
					type="email"
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
			<label className="flex flex-col">
				Confirm Password
				<input
					{...register('confirmPassword')}
					type="password"
					className="px-2 py-1 w-96 text-black rounded"
				/>
			</label>
			<button
				type="submit"
				className="px-3 py-1 m-auto text-black bg-white rounded-full w-fit hover:bg-white/70"
			>
				Create an account
			</button>
		</form>
	);
}

export default LoginForm;
