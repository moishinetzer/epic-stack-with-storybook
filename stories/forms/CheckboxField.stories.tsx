import { type StoryObj, type Meta } from '@storybook/react'
import { CheckboxField } from '~/components/forms.tsx'

export default {
	component: CheckboxField,
} satisfies Meta<typeof CheckboxField>

export const Default = {
	args: {
		labelProps: {
			children: 'Label',
		},
		buttonProps: {
			name: 'checkbox',
			children: 'Checkbox',
		},
	},
} satisfies StoryObj<typeof CheckboxField>

export const Checked = {
	args: {
		labelProps: {
			children: 'Label',
		},
		buttonProps: {
			name: 'checkbox',
			children: 'Checkbox',
			checked: true,
		},
	},
} satisfies StoryObj<typeof CheckboxField>

export const WithError = {
	args: {
		labelProps: {
			children: 'Label',
		},
		buttonProps: {
			name: 'checkbox',
			children: 'Checkbox',
		},
		errors: ['This is an error message'],
	},
} satisfies StoryObj<typeof CheckboxField>
