import { type StoryObj, type Meta } from '@storybook/react'
import { ErrorList } from '~/components/forms.tsx'

export default {
	component: ErrorList,
} satisfies Meta<typeof ErrorList>

export const Default = {
	args: {
		errors: ['Error 1', 'Error 2', 'Error 3'],
	},
} satisfies StoryObj<typeof ErrorList>
