/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// ms-text-black
				'ms-text-black': '#202427',
				// ms-text-gray
				'ms-text-gray': '#777777',
				// ms-dd-gray
				'ms-dd-gray': '#e9eaed',
				// ms-text-hardgray
				'ms-text-hardgray': '#4D5052',
				// ms-section-gray
				'ms-section-gray': '#e3e5e8',
				// ms-card-gray
				'ms-card-gray': '#d2d3d4',
				// ms-orange
				'ms-orange': '#ff8709',
			},
		},
		fontFamily: {
			// Sora
			sora: ['Sora', 'sans-serif'],
		},
	},
	plugins: [],
};
