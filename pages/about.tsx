import { AdminLayout } from '@/components/layout'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	return (
		<Box>
			<Typography component='h1' variant='h3' color='primary.main'>
				About Page
			</Typography>

			<Button variant='contained' color='success' sx={{ p: 2 }}>
				Testing
			</Button>
		</Box>
	)
}

AboutPage.Layout = AdminLayout
