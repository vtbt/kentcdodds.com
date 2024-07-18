// this is just here to test the error page

import { type LoaderFunction } from '@remix-run/node'
import { ServerError } from '#app/components/errors.tsx'
import { type KCDHandle } from '#app/types.ts'
import { useCapturedRouteError } from '#app/utils/misc.tsx'

export const handle: KCDHandle = {
	getSitemapEntries: () => null,
}

export const loader: LoaderFunction = async () => {
	throw new Error('Oh no!')
}

export default function Screen() {
	return <div>You should not see this</div>
}

export function ErrorBoundary() {
	const error = useCapturedRouteError()
	console.error(error)
	return <ServerError />
}
