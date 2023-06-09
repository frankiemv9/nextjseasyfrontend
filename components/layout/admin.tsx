import { LayoutProps } from '@/models'
import Link from 'next/link'
import * as React from 'react'

export function AdminLayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>ADMIN Layout</h1>
			<div>Sidebar</div>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>

			<div>{children}</div>
		</div>
	)
}
