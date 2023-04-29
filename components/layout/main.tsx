import { LayoutProps } from '@/models'
import Link from 'next/link'
import React, { useEffect } from 'react'

export function MainLayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>MAIN Layout</h1>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<hr style={{ margin: '16px' }} />
			<div>{children}</div>
		</div>
	)
}
