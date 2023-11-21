/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '978px',
			xl: '1440px'
		},
		fontFamily: {
			cookie: ['Cookie',
				'sans-serif'],
			sans: ['Product',
				'sans-serif'],
		},
		extend: {
			colors: {
				'white': '#fff',
				'lightBrown': '#EBC6B0',
				'darkBrown': '#EBC6B0',
				'dark': '#111111',
				'veryYellow': '#F8CB10',
				'lighterDark': '#242424',
			},
		}
	},
	plugins: [],
}