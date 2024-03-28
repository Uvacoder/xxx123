import { type Story, type Meta } from '@storybook/react'
import { ReactIcon } from '../../icons/react-icon'
import { LinkCard as LinkCardComponent, type LinkCardProps } from './link-card'

export default {
	title: 'Landing/Link Card',
	component: LinkCardComponent,
} as Meta

const Template: Story<LinkCardProps> = (args) => <LinkCardComponent {...args} />

export const LinkCard = Template.bind({})

LinkCard.args = {
	title: 'React Resources',
	href: 'https://react.framework.dev/',
	Icon(props) {
		return <ReactIcon {...props} />
	},
	backgroundColor: '#00BCDA',
	bigSize: true,
}
