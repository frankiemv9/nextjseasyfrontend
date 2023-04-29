import { useRouter } from 'next/router'
import * as React from 'react'

export interface CatchAllRouteProps {}

export default function CatchAllRoute(props: CatchAllRouteProps) {
	const router = useRouter()
	const { slug } = router.query
	return (
		<div>
			<h1>Catch All Route Page</h1>
			<h1>{slug}</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	)
}
