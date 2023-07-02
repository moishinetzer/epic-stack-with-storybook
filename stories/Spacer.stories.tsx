import { type StoryObj, type Meta } from '@storybook/react'
import { Spacer } from '~/components/spacer.tsx'

export default {
	component: Spacer,
	decorators: [
		Story => (
			<>
				<div>Before spacer</div>
				<Story />
				<div>After spacer</div>
			</>
		),
	],
} satisfies Meta<typeof Spacer>

export const Default = {
	args: {
		size: 'md',
	},
} satisfies StoryObj<typeof Spacer>
