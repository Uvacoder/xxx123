import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AngularIcon } from '../../icons/angular-icon';
import { ReactIcon } from '../../icons/react-icon';
import { SvelteIcon } from '../../icons/svelte-icon';
import { VueIcon } from '../../icons/vue-icon';
import { type LinkCardProps } from './link-card';
import { ResourcesInfoBanner as ResourcesInfoBannerComponent } from './resources-info-banner';
import { DenoIcon } from '../../icons/deno-icon';

const meta: Meta<typeof ResourcesInfoBannerComponent> = {
	title: 'Landing/Resources Info Banner',
	component: ResourcesInfoBannerComponent,
	args: {
		children: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof ResourcesInfoBannerComponent>;

const resourceCards: LinkCardProps[] = [
	{
		title: 'Angular Resources',
		href: 'https://angular.framework.dev/',
		Icon(props) {
			return <AngularIcon {...props} />;
		},
		backgroundColor: '#C3002F',
	},
	{
		title: 'React Resources',
		href: 'https://react.framework.dev/',
		Icon(props) {
			return <ReactIcon {...props} />;
		},
		backgroundColor: '#00BCDA',
	},
	{
		title: 'Vue Resources',
		href: 'https://vue.framework.dev/',
		Icon(props) {
			return <VueIcon {...props} />;
		},
		backgroundColor: '#41B883',
	},
	{
		title: 'Svelte Resources',
		href: 'https://svelte.framework.dev/',
		Icon(props) {
			return <SvelteIcon {...props} />;
		},
		backgroundColor: '#FF3E00',
	},
	{
		title: 'Deno Resources',
		href: 'https://deno.framework.dev/',
		Icon(props) {
			return <DenoIcon {...props} />;
		},
		backgroundColor: '#12124B',
	},
];

export const ResourcesInfoBanner: Story = {
	render: (args) => (
		<ResourcesInfoBannerComponent
			{...args}
			title="Get started now"
			description="Explore some of the top resources added by a community to learn or be up to date with your framework"
			resourceCards={resourceCards}
		/>
	),
};
