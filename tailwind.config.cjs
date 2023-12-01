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
	}
}
