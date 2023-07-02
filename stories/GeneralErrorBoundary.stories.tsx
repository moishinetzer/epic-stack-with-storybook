import { type StoryObj, type Meta } from '@storybook/react'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import { Form } from '@remix-run/react'
import { Button } from '~/components/ui/button.tsx'

export default {
	title: 'ErrorBoundary',
	component: () => <div>Sample Child Component</div>,
} satisfies Meta<typeof GeneralErrorBoundary>

export const LoaderError = {
	decorators: [
		Story => {
			let RemixStub = createRemixStub([
				{
					path: '/',
					element: <Story />,
					ErrorBoundary: GeneralErrorBoundary,
					loader: () => {
						// throw an error with a status code
						throw new Response('Error Message', {
							status: 500,
						})
					},
				},
			])

			return <RemixStub />
		},
	],
} satisfies StoryObj<typeof GeneralErrorBoundary>

export const ActionError = {
	decorators: [
		Story => {
			// This is how you make remix-specific routes, loaders and actions etc.
			// This works for all remix utilities e.g. useLoaderData and even fetchers!
			// To see full usage check out the @remix-run/testing tests - the docs are not updated yet for this package.
			// https://github.com/remix-run/remix/blob/main/packages/remix-testing/__tests__/stub-test.tsx
			let RemixStub = createRemixStub([
				{
					path: '/',
					element: <Story />,
					ErrorBoundary: GeneralErrorBoundary,
					action: () => {
						throw new Response('Unauthorised', {
							status: 401,
						})
					},
				},
			])

			return <RemixStub />
		},
	],
	render: () => (
		<Form action="/" method="POST">
			<Button type="submit">Submit</Button>
		</Form>
	),
} satisfies StoryObj<typeof GeneralErrorBoundary>
