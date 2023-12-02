/** @type {import('tailwindcss').Config} */
module.exports = {
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
				'primary-focus': 'rgb(85, 85, 132)',
				'primary-content': 'rgb(242, 242, 255)',
				'secondary': 'rgb(247, 240, 217)',
				'secondary-focus': 'rgb(199, 194, 175)',
				'secondary-content': 'rgb(66, 60, 43)',
				'accent': 'rgb(117, 213, 108)',
				'accent-focus': 'rgb(82, 151, 75)',
				'accent-content': 'rgb(234, 255, 230)',
				'neutral': 'rgb(236, 239, 241)',
				'neutral-focus': 'rgb(207, 210, 212)',
				'neutral-content': 'rgb(51, 51, 51)',
				'base': 'rgb(255, 255, 255)',
				'base-content': 'rgb(0, 0, 0)',
				'info': 'rgb(128, 179, 238)',
				'success': 'rgb(102, 187, 106)',
				'warning': 'rgb(255, 193, 7)',
				'error': 'rgb(220, 38, 38)',
			},
			'gs-dark': {
				'primary': 'rgb(7, 3, 64)',
				'primary-focus': 'rgb(4, 2, 40)',
				'primary-content': 'rgb(242, 242, 255)',
				'secondary': 'rgb(227, 250, 219)',
				'secondary-focus': 'rgb(255, 255, 255)',
				'secondary-content': 'rgb(177, 177, 177)',
				'accent': 'rgb(117, 213, 108)',
				'accent-focus': 'rgb(0, 128, 0)',
				'accent-content': 'rgb(13, 57, 27)',
				'neutral': 'rgb(236, 239, 241)',
				'neutral-focus': 'rgb(207, 210, 212)',
				'neutral-content': 'rgb(51, 51, 51)',
				'base': 'rgb(0, 0, 0)',
				'base-content': 'rgb(255, 255, 255)',
				'info': 'rgb(0, 64, 255)',
				'success': 'rgb(34, 131, 27)',
				'warning': 'rgb(255, 128, 0)',
				'error': 'rgb(163, 15, 15)',
			},
		}],
		darkTheme: 'gs-dark',
 		base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
	 }
}
