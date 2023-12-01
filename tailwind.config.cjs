/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
		extend: {
			content: {
				separator: 'url(\'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%201440%20418%22%3E%0A%20%20%3Cpath%20fill%3D%22%2307034080%22%20d%3D%22M0%200s379%20115.31%20720%20115.31S1440%200%201440%200v209H0V0ZM1440%20418s-379-115.31-720-115.31S0%20418%200%20418V209h1440v209Z%22%2F%3E%0A%3C%2Fsvg%3E\')',
			},
			fontFamily:  {
				'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
			},
		},
	},
	 plugins: [require('@tailwindcss/typography'), require("daisyui")],
	 daisyui: {
		/** @link: https://daisyui.com/docs/config/ */
		themes: [{
			'gs-light': {
				'primary': 'rgb(133, 133, 204)',
				'primary-focus': 'rgb(117, 117, 183)',
				'primary-content': 'rgb(216, 216, 243)',
				'secondary': 'rgb(247, 240, 217)',
				'secondary-focus': 'rgb(244, 241, 210)',
				'secondary-content': 'rgb(247, 251, 251)',
				'accent': 'rgb(117, 213, 108)',
				'accent-focus': 'rgb(106, 211, 93)',
				'accent-content': 'rgb(217, 247, 217)',
				'neutral': 'rgb(255, 255, 255)',
				'neutral-focus': 'rgb(255, 255, 255)',
				'neutral-content': 'rgb(0, 0, 0)',
				// 'base-100': '#ffffff',
				// 'base-200': '#ffffff',
				// 'base-300': '#ffffff',
				'base-content': 'rgb(0, 0, 0)',
				'info': 'rgb(64, 149, 255)',
				'success': 'rgb(0, 255, 128)',
				'warning': 'rgb(255, 179, 64)',
				'error': 'rgb(255, 107, 107)',
			},
			'gs-dark': {
				'primary': 'rgb(7, 3, 64)',
				'primary-focus': 'rgb(255, 255, 255)',
				'primary-content': 'rgb(54, 54, 114)',
				'secondary': 'rgb(227, 250, 219)',
				'secondary-focus': 'rgb(255, 255, 255)',
				'secondary-content': 'rgb(177, 177, 177)',
				'accent': 'rgb(28, 206, 49)',
				'accent-focus': 'rgb(0, 128, 0)',
				'accent-content': 'rgb(13, 57, 27)',
				'neutral': 'rgb(255, 255, 255)',
				'neutral-focus': 'rgb(255, 255, 255)',
				'neutral-content': 'rgb(0, 0, 0)',
				// 'base-100': '#ffffff',
				// 'base-200': '#ffffff',
				// 'base-300': '#ffffff',
				'base-content': 'rgb(0, 0, 0)',
				'info': 'rgb(0, 64, 255)',
				'success': 'rgb(34, 131, 27)',
				'warning': 'rgb(255, 128, 0)',
				'error': 'rgb(163, 15, 15)',
			},
		}], // false: only light + dark | true: all themes or use ['dark', 'light'] to specify specific themes
		darkTheme: 'gs-dark',
 		base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
	 }
}
