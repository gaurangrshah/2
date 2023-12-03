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
				dot: 'url(\'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%208%208%27%3E%3Cpath%20fill%3D%27red%27%20d%3D%27M4%200a4%204%200%201%200%200%208%204%204%200%200%200%200-8z%27%2F%3E%3C%2Fsvg%3E\')',
			},
			fontFamily:  {
				'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
			},
			colors: {
				'primary-focus': 'oklch(var(--pf) / <alpha-value>)',
				'secondary-focus': 'oklch(var(--sf) / <alpha-value>)',
				'accent-focus': 'oklch(var(--af) / <alpha-value>)',
				'neutral-focus': 'oklch(var(--nf) / <alpha-value>)',
			},
		},
	},
	 plugins: [require("daisyui")],
	 daisyui: {
		/** @link: https://daisyui.com/docs/config/ */
		themes: [{
			'gs-light': {
				'primary': '#E3FADB',
				'primary-focus': '#d3e7c6',
				'primary-content': '#212121',
				'secondary': '#97BBFA',
				'secondary-focus': '#89AFD8',
				'secondary-content': '#212121',
				'accent': '#81C784',
				'accent-focus': '#71B470',
				'accent-content': '#262424',
				'neutral': '#574B40',
				'neutral-focus': '#4D4137',
				'neutral-content': '#212121',
				'base-100': '#FFFFFF',
				'base-200': '#F5F5F5',
				'base-300': '#EBEBEB',
				'base-content': '#515151',
				'info': '#1496BF',
				'success': '#4CAF50',
				'warning': '#FFC107',
				'error': '#F44336',
			},
			'gs-dark': {
				'primary': '#34445F',
				'primary-focus': '#2E4053',
				'primary-content': '#F8F9FA',
				'secondary': '#4788B3',
				'secondary-focus': '#4788B3',
				'secondary-content': '#F8F9FA',
				'accent': '#376B4F',
				'accent-focus': '#325844',
				'accent-content': '#F8F9FA',
				'neutral': '#FFFFFF',
				'neutral-focus': '#F8F9FA',
				'neutral-content': '#333333',
				'base-100': '#070340',
				'base-200': '#100870',
				'base-300': '#1A1197',
				'base-content': '#9d9b9b',
				'info': '#62C9FF',
				'success': '#8BC34A',
				'warning': '#FFEB3B',
				'error': '#E57373',
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
