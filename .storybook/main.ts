import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [tsconfigPaths()],
			resolve: {
				alias: {
					// prettier-ignore
					"@remix-run/react/dist/components": "@remix-run/react/dist/esm/components",
					'.prisma/client/index-browser':
						'./node_modules/.prisma/client/index-browser.js',
				},
			},
		})
	},
}
export default config
