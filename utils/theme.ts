import { Heebo } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const heebo = Heebo({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export let theme = createTheme({
	palette: {
		primary: {
			main: '#FF6464',
		},
		secondary: {
			light: '#EDF7FA',
			main: '#00A8CC',
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md',
			},
			styleOverrides: {
				maxWidthSm: {
					maxWidth: '680px',
					'@media (min-width: 600px)': {
						maxWidth: '680px',
					},
				},
				maxWidthMd: {
					maxWidth: '860px',
					'@media (min-width: 900px)': {
						maxWidth: '860px',
					},
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover, &.active': {
						color: '#FF6464',
					},
				},
			},
			defaultProps: {
				underline: 'hover',
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						color: 'white',
					},
				},
			],
		},
	},
	typography: {
		fontFamily: heebo.style.fontFamily,
	},
})

theme = responsiveFontSizes(theme)
