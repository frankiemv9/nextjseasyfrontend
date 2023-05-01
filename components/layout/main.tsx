import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight='100vh'>
			<Header />

			<Link href='/'>Home</Link>
			<Link href='/blog'>Blog</Link>
			<Link href='/works'>Works</Link>
			<hr style={{ margin: '16px' }} />
			<div></div>
			<Box component='main' flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	)
}
