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
				// 'primary-focus': 'oklch(75.12 0.059 180.58 / <alpha-value>)',
				// 'secondary-focus': 'oklch(77.11 0.061 250.91 / <alpha-value>)',
				// 'accent-focus': 'oklch(42.67 0.075 214.2 / <alpha-value>)',
				// 'neutral-focus': 'oklch(38.46 0.023 61.85 / <alpha-value>)',
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
        blob: {
					"0%": {transform: "scale(1) rotateZ(0)"},
					"50%": {transform: "scale(2) rotateZ(180deg)"},
					"100%": {transform: "scale(1) rotateZ(360deg)"},
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
 				blob: "blob 7s infinite linear",
			},
		},
	},
	 plugins: [require("daisyui")],
	 daisyui: {
		/** @link: https://daisyui.com/docs/config/ */
		themes: [{
      tea: {
        "primary": "#1c5567",
        "primary-content": "#d1d1d1",
        "secondary": "#5499B6",
        "secondary-content": "#7a7a7a",
        "accent": "#54B685",
        "accent-content": "#404040",
        "neutral": "#333333",
        "base-100": "#efffed",
        "base-200": "#DAF6D6",
        "base-300": "#C4F1BE",
      },
      "black-tea": {
        "primary": "#4F6796",
        "primary-content": "#ffffff",
        "secondary": "#54B685",
        "secondary-content": "#bcbcbc",
        "accent": "#C4F1BE",
        "accent-content": "#404040",
        "neutral": "#e0e0e0",
        "base-100": "#121A29",
        "base-200": "#131C2B",
        "base-300": "#182438",
      }
    }],
		darkTheme: 'black-tea',
 		base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
	 }
} satisfies Config;
