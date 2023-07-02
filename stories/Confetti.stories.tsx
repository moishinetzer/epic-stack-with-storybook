import { Confetti } from '~/components/confetti.tsx'
import { type StoryObj, type Meta } from '@storybook/react'

export default {
	component: Confetti,
	args: {
		confetti: 'confetti',
	},
} satisfies Meta<typeof Confetti>

export const Default = {} satisfies StoryObj<typeof Confetti>
