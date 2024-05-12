/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary-text': '#717171',
				'primary-main': '#444444',
				'success-bg': '#e7f6df',
				divider: '#c0c0c0',
				'outrageous-orange': '#ff5631'
			}
		}
	},
	plugins: []
};
