import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
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
				separator: 'url(\'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%201440%20418%27%20fill%3D%27none%27%3E%3Cpath%20fill%3D%22currentColor%22%20class%3D%22separator%22%20d%3D%27M0%200s379%20115.31%20720%20115.31S1440%200%201440%200v209H0V0ZM1440%20418s-379-115.31-720-115.31S0418%200%20418V209h1440v209Z%27%3E%3C%2Fpath%3E%3C%2Fsvg%3E\')',
			},
			fontFamily:  {
				'sans': ['Inter', ...defaultTheme.fontFamily.sans],
				'geist': ['Geist', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'primary-focus': 'oklch(var(--pf) / <alpha-value>)',
				'secondary-focus': 'oklch(var(--sf) / <alpha-value>)',
				'accent-focus': 'oklch(var(--af) / <alpha-value>)',
				'neutral-focus': 'oklch(var(--nf) / <alpha-value>)',
			},
			keyframes: {
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(200px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-200px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
					'50%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
				fadeIn: 'fadeIn 1.25s ease-in-out',
				fadeOut: 'fadeOut 1.25s ease-in-out',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
		},
	},
	 plugins: [require("daisyui")],
	 daisyui: {
		/** @link: https://daisyui.com/docs/config/ */
		themes: [{
			'light': {
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
			'dark': {
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
		darkTheme: 'dark',
 		base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
	 }
} satisfies Config;
