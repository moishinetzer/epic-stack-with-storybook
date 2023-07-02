import { type StoryObj, type Meta } from '@storybook/react'
import { TextareaField } from '~/components/forms.tsx'

export default {
	component: TextareaField,
} satisfies Meta<typeof TextareaField>

export const Default = {
	args: {
		labelProps: {
			children: 'Label',
		},
		textareaProps: {
			name: 'textarea',
		},
	},
} satisfies StoryObj<typeof TextareaField>
