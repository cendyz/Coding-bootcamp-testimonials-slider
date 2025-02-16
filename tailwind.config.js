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
			container: {
				center: true,
			},
			colors: {
				blue: {
					100: '#202046',
					200: '#babacf',
					'100dark': '#b9b9df',
					'200dark': '#303045',
				},
				bg: '#fbfbfe',
				bgDARK: '#010104',
				textDARK: 'rgb(181, 181, 181)',
			},
		},
	},
	plugins: [require('daisyui')],
}
