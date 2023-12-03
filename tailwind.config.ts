import type { Config } from 'tailwindcss';
module.exports = {
	darkMode: ['class', '[data-theme="gs-dark"]'],
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
				'primary': '#C7FFB3',
				'primary-focus': '#E3FADB',
				'primary-content': '#505050',
				'secondary': '#120A78',
				'secondary-focus': '#170D9D',
				'secondary-content': '#C5C5C5',
				'accent': '#389230',
				'accent-focus': '#4ECE42',
				'accent-content': '#262424',
				'neutral': '#CACBCD',
				'neutral-focus': '#ECEFF1',
				'neutral-content': '#1E1E1E',
				'base-100': '#E9E7FF',
				'base-200': '#BBB7E7',
				'base-300': '#A3A0C9',
				'base-content': '#515151',
				'info': '#3164FF',
				'success': '#2DA824',
				'warning': '#FFAA54',
				'error': '#DA1515',
			},
			'gs-dark': {
				'primary': '#C7FFB3',
				'primary-focus': '#E3FADB',
				'primary-content': '#505050',
				'secondary': '#170D9D',
				'secondary-focus': '#120A78',
				'secondary-content': '#C5C5C5',
				'accent': '#4ECE42',
				'accent-focus': '#389230',
				'accent-content': '#262424',
				'neutral': '#ECEFF1',
				'neutral-focus': '#CACBCD',
				'neutral-content': '#1E1E1E',
				'base-100': '#0E0677',
				'base-200': '#0A045D',
				'base-300': '#070340',
				'base-content': '#FFFFFF',
				'info': '#0040FF',
				'success': '#22831B',
				'warning': '#FF8000',
				'error': '#A30F0F',
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
} satisfies Config;
