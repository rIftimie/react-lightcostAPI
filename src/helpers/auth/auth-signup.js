import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';

export async function createUser(username, email, password) {
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					updateProfile(auth.currentUser, {
						displayName: username,
					})
						.then(() => {
							console.log('Profile Created and Signed in');
						})
						.catch((error) => {
							console.log(error.message);
						});
				})
				.catch((error) => {
					console.log(error.message);
				});
		})
		.catch((error) => {
			console.log(error.message);
		});
}

export async function logIn(email, password) {
	// Decrypt and compare password
	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			console.log('Signed in');
		})
		.catch((error) => {
			console.log('error');
			console.log(error.message);
		});
}

export async function getUserProfile() {
	return auth.currentUser;
}

export async function signOutUser() {
	signOut(auth)
		.then(() => {
			console.log('sign out successfully');
		})
		.catch((error) => {
			console.log('error sign out');
		});
}
