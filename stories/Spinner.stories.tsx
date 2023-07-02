import { type StoryObj, type Meta } from '@storybook/react'
import { Spinner } from '~/components/spinner.tsx'

export default {
	component: Spinner,
	decorators: [
		Story => (
			<div className="relative h-12 w-12 ">
				<Story />
			</div>
		),
	],
	args: {
		showSpinner: true,
	},
} satisfies Meta<typeof Spinner>

export const Default = {} satisfies StoryObj<typeof Spinner>
