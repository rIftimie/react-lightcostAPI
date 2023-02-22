/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['DM Sans', 'sans-serif'],
				header: ['Manrope', 'sans-serif'],
			},
			colors: {
				'solid-green': '#87E4AA',
			},
		},
		plugins: [],
	},
};
