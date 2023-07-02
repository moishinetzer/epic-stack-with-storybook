import { type StoryObj, type Meta } from '@storybook/react'
import { Field } from '~/components/forms.tsx'

export default {
	component: Field,
} satisfies Meta<typeof Field>

export const Default = {
	args: {
		labelProps: {
			children: 'Label',
		},
		inputProps: {
			placeholder: 'Placeholder',
		},
	},
} satisfies StoryObj<typeof Field>
