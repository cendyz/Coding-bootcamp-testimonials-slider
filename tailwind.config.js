/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans'],
			},
			fontWeight: {
				inter300: '300',
				inter500: '500',
				inter700: '700',
			},
			fontSize: {
				base: ['1.6rem'],
			},
			container: {
				center: true,
			},
			colors: {
				blue: {
					0: 'hsl(240, 18%, 77%)',
					100: 'hsl(240, 38%, 20%)',
				},
			},
		},
	},
	plugins: [require('daisyui'),],
}
