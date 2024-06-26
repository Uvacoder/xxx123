import classNames from 'classnames';
import React from 'react';
import { type ContributorData } from './contributor';
import {
	homepageContentContainerStyle,
	homepageGutterStyle,
	homepageStyle,
	homepageTwoAndOneSectionStyle,
} from './homepage.css';
import { Search } from './search';
import { Hero } from './hero';
import { FeaturedLibraries } from './featured-libraries';
import { Podcasts } from './podcasts';
import { Courses } from './courses';
import { Blogs } from './blogs';
import { ContributorBanner } from './contributor-banner';
import { Books } from './books';
import { LatestTools } from './latest-tools';
import { Communities } from './communities';
import { type Library } from '../../models/library';
import { type Podcast } from '../../models/podcast';
import { type Course } from '../../models/course';
import { type Blog } from '../../models/blog';
import { type Book } from '../../models/book';
import { type Tool } from '../../models/tool';
import { type Community } from '../../models/community';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { ResourcesInfoBanner } from '../landing/resources-info-banner';
import { type LinkCardProps } from '../landing/link-card';
import { LogoIcon } from '../../icons/logo-icon';

export interface HomepageProps extends React.ComponentPropsWithoutRef<'div'> {
	librariesTitle: string;
	libraries: Library[];
	podcasts: Podcast<string>[];
	courses: Course<string>[];
	blogs: Blog<string>[];
	books: Book<string>[];
	tools: Tool<string>[];
	communities: Community<string>[];
	siteName: string;
	resourceCards: LinkCardProps[];
	contributorsData: ContributorData[];
}

export function Homepage({
	className,
	librariesTitle,
	libraries,
	podcasts,
	courses,
	blogs,
	books,
	tools,
	communities,
	siteName,
	resourceCards,
	contributorsData,
	...props
}: HomepageProps) {
	resourceCards.unshift({
		title: 'Framework.dev',
		href: 'https://framework.dev/',
		RawIcon(props) {
			return <LogoIcon {...props} />;
		},
		backgroundColor: '#F6FDFF',
		color: '#2E3132',
	});

	return (
		<div className={classNames(className, homepageStyle)} {...props}>
			<div
				className={classNames(
					homepageGutterStyle,
					sprinkles({
						paddingBottom: { mobile: 24, desktop: 16 },
						paddingTop: { mobile: 0, desktop: 16 },
					}),
				)}
			>
				<Search />
			</div>
			<div className={sprinkles({ backgroundColor: 'surface5' })}>
				<Hero siteName={siteName} className={homepageGutterStyle} />
			</div>
			<div
				className={classNames(
					homepageContentContainerStyle,
					homepageGutterStyle,
				)}
			>
				<FeaturedLibraries libraries={libraries} title={librariesTitle} />
				<Podcasts podcasts={podcasts} />
				<div className={homepageTwoAndOneSectionStyle}>
					<Courses courses={courses} />
					<Blogs blogs={blogs} />
				</div>
				<ContributorBanner contributors={contributorsData}></ContributorBanner>
				{books.length > 0 ? (
					<div className={homepageTwoAndOneSectionStyle}>
						<LatestTools tools={tools} />
						<Books books={books} />
					</div>
				) : (
					<LatestTools tools={tools} />
				)}
				<Communities communities={communities} />

				<ResourcesInfoBanner
					title="Other Frameworks"
					description="Explore some of the top resources added by a community to learn or be up to date with your framework"
					resourceCards={resourceCards}
					className={sprinkles({
						borderRadius: 40,
					})}
				/>
			</div>
		</div>
	);
}
