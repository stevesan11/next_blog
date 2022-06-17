/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blueGrayDefault: "#90a4ae",
				blueGrayLight: "#c1d5e0",
				blueGrayDark: "#62757f",
				tealDefault: "#4db6ac",
				tealLight: "#82e9de",
				tealDark: "#00867d",
			},
		},
	},
	plugins: [],
};
