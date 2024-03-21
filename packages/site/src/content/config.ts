import { z, defineCollection } from 'astro:content'

export type CollectionTypes =
	| 'blogs'
	| 'books'
	| 'communities'
	| 'courses'
	| 'libraries'
	| 'podcasts'
	| 'tools'
export type Frameworks =
	| 'angular'
	| 'deno'
	| 'graphql'
	| 'nodejs'
	| 'qwik'
	| 'react'
	| 'solidjs'
	| 'svelte'
	| 'vue'

const LIBRARY_TAGS: [string, ...string[]] = [
	'animation',
	'API libraries',
	'auth',
	'CLI',
	'component',
	'data fetching',
	'data processing',
	'database drivers',
	'documentation',
	'forms',
	'frameworks',
	'http client',
	'internationalization',
	'logging',
	'ORM',
	'performance tools',
	'routing',
	'state management',
	'styling',
	'templating',
	'testing',
	'tooling',
	'utilities',
	'web servers',
]
const TAGS: Record<string, Record<string, [string, ...string[]]>> = {
	angular: {
		blogs: [''],
		books: [
			'nx',
			'recipes',
			'monorepo',
			'state management',
			'NgRx',
			'testing',
			'PWA',
			'routing',
			'components',
			'data binding',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'components',
			'data fetching',
			'routing',
			'testing',
			'services',
			'RxJS',
			'NgRx',
			'JavaScript marathon',
			'nx monorepo',
			'ignite UI',
			'ivy',
			'PWA',
			'A11Y',
			'pipes',
			'angular patterns',
			'TypeScript',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general'],
		tools: ['chrome', 'VSCode', 'RxJS', 'development', 'testing', 'UI Design'],
	},
	deno: {
		blogs: [''],
		books: ['foundational', 'intro', 'oak', 'graphql'],
		communities: ['meetups', 'conferences'],
		courses: [
			'deno',
			'typescript',
			'mongodb',
			'backend',
			'docker',
			'aws',
			'data fetching',
			'oak framework',
			'data validation',
			'fresh framework',
			'testing',
			'debugging',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'how-to', 'technology', 'open source', 'career'],
		tools: ['vscode', 'webstorm'],
	},
	graphql: {
		blogs: [''],
		books: [
			'nx',
			'recipes',
			'monorepo',
			'state management',
			'NgRx',
			'testing',
			'PWA',
			'routing',
			'components',
			'data binding',
			'graphQL',
			'reactJS',
			'nodeJS',
			'apollo',
			'sql',
			'testing',
			'docker',
			'authentication',
		],
		communities: ['meetups', 'conferences'],
		podcasts: ['general', 'graphQL', 'ruby', 'rails'],
		tools: [
			'Chrome',
			'VSCode',
			'development',
			'testing',
			'schemas',
			'frontend',
			'backend',
		],
		courses: [
			'state management',
			'components',
			'data fetching',
			'routing',
			'testing',
			'services',
			'javascript marathon',
			'typescript',
			'graphQL',
			'JS drops',
		],
		libraries: LIBRARY_TAGS,
	},
	nodejs: {
		blogs: [''],
		books: [
			'patterns',
			'systems',
			'database',
			'full stack',
			'backend',
			'performance',
			'projects',
			'servers',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'data fetching',
			'testing',
			'services',
			'typescript',
			'backend',
			'events',
			'javascript marathon',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general, node, full stack'],
		tools: ['VSCode', 'development', 'testing', 'database', 'API testing'],
	},
	qwik: {
		blogs: [''],
		books: ['projects'],
		communities: ['conferences'],
		courses: ['state management', 'data fetching', 'structure', 'routing'],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'qwik'],
		tools: [
			'VSCode',
			'Chrome',
			'Firefox',
			'Safari',
			'development',
			'UI Design',
		],
	},
	react: {
		blogs: [''],
		books: [
			'projects',
			'TypeScript',
			'recipes',
			'testing',
			'routing',
			'NextJS',
			'redux',
			'authentication',
			'A11Y',
			'GraphQL',
			'Material UI',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'data fetching',
			'routing',
			'testing',
			'forms',
			'GraphQL',
			'native',
			'redux',
			'authentication',
			'SCSS',
			'CSS',
			'bootstrap',
			'react context',
			'hooks',
			'TypeScript',
			'tailwind',
			'Material UI',
			'vite',
			'JavaScript marathon',
			'AWS',
			'netlify',
			'continuous integration',
			'GatsbyJS',
			'component design',
			'apollo',
			'FaunaDB',
			'sass',
			'static site generation',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'react', 'GraphQL', 'react native', 'redux'],
		tools: [
			'VSCode',
			'chrome',
			'firefox',
			'safari',
			'UI Design',
			'react native',
			'development',
		],
	},
	solidjs: {
		blogs: [''],
		books: [''],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'data fetching',
			'routing',
			'reactivity',
			'events',
			'effects',
			'conditionals',
			'loops',
			'lifecycle methods',
			'control flow',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'SolidJS'],
		tools: [
			'UI Design',
			'development',
			'generator',
			'Editor',
			'Command palette',
			'primitives',
			'markdown',
			'dragndrop',
		],
	},
	svelte: {
		blogs: [''],
		books: [
			'projects',
			'CI/CD',
			'testing',
			'state management',
			'sapper',
			'routing',
			'animations',
			'debugging',
			'accessibility',
			'Netlify',
			'forms',
			'caching',
			'data fetching',
		],
		communities: ['conferences'],
		courses: [
			'routing',
			'state management',
			'data fetching',
			'forms',
			'animations',
			'SSR',
			'tailwind',
			'Supabase',
			'daisyUI',
			'Arduino',
			'accessibility',
			'reactivity',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general'],
		tools: [
			'Jetbrains',
			'extension',
			'Firefox',
			'VSCode',
			'Chrome',
			'UI Design',
			'development',
		],
	},
	vue: {
		blogs: [''],
		books: [
			'projects',
			'vuex',
			'routing',
			'testing',
			'authentication',
			'best practices',
			'patterns',
			'state management',
			'forms',
			'vue 2',
			'vue 3',
			'vite',
			'TypeScript',
			'GraphQL',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'data fetching',
			'routing',
			'testing',
			'forms',
			'graphQL',
			'vuex',
			'vue CLI',
			'authentication',
			'CSS',
			'bootstrap',
			'TypeScript',
			'tailwind',
			'Material UI',
			'vue 2',
			'vue 3',
			'nuxt 2',
			'component design',
			'PWA',
			'AWS',
			'DevOps',
			'continuous integration',
			'vite',
			'debugging',
			'JavaScript marathon',
			'sass',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'GraphQL', 'vue', 'quasar'],
		tools: [
			'VSCode',
			'chrome',
			'firefox',
			'edge',
			'safari',
			'UI Design',
			'development',
		],
	},
}

export const collections = {
	// angular
	'angular-books': generateBookSchema('angular'),
	'angular-blogs': generateBlogSchema('angular'),
	'angular-communities': generateCommunitySchema('angular'),
	'angular-courses': generateCourseSchema('angular'),
	'angular-libraries': generateLibrarySchema('angular'),
	'angular-podcasts': generatePodcastSchema('angular'),
	'angular-tools': generateToolSchema('angular'),
	// deno
	'deno-books': generateBookSchema('deno'),
	'deno-blogs': generateBlogSchema('deno'),
	'deno-communities': generateCommunitySchema('deno'),
	'deno-courses': generateCourseSchema('deno'),
	'deno-libraries': generateLibrarySchema('deno'),
	'deno-podcasts': generatePodcastSchema('deno'),
	'deno-tools': generateToolSchema('deno'),
	// graphql
	'graphql-books': generateBookSchema('graphql'),
	'graphql-blogs': generateBlogSchema('graphql'),
	'graphql-communities': generateCommunitySchema('graphql'),
	'graphql-courses': generateCourseSchema('graphql'),
	'graphql-libraries': generateLibrarySchema('graphql'),
	'graphql-podcasts': generatePodcastSchema('graphql'),
	'graphql-tools': generateToolSchema('graphql'),
	// nodejs
	'nodejs-books': generateBookSchema('nodejs'),
	'nodejs-blogs': generateBlogSchema('nodejs'),
	'nodejs-communities': generateCommunitySchema('nodejs'),
	'nodejs-courses': generateCourseSchema('nodejs'),
	'nodejs-libraries': generateLibrarySchema('nodejs'),
	'nodejs-podcasts': generatePodcastSchema('nodejs'),
	'nodejs-tools': generateToolSchema('nodejs'),
	// qwik
	'qwik-books': generateBookSchema('qwik'),
	'qwik-blogs': generateBlogSchema('qwik'),
	'qwik-communities': generateCommunitySchema('qwik'),
	'qwik-courses': generateCourseSchema('qwik'),
	'qwik-libraries': generateLibrarySchema('qwik'),
	'qwik-podcasts': generatePodcastSchema('qwik'),
	'qwik-tools': generateToolSchema('qwik'),
	// react
	'react-books': generateBookSchema('react'),
	'react-blogs': generateBlogSchema('react'),
	'react-communities': generateCommunitySchema('react'),
	'react-courses': generateCourseSchema('react'),
	'react-libraries': generateLibrarySchema('react'),
	'react-podcasts': generatePodcastSchema('react'),
	'react-tools': generateToolSchema('react'),
	// solidjs
	'solidjs-books': generateBookSchema('solidjs'),
	'solidjs-blogs': generateBlogSchema('solidjs'),
	'solidjs-communities': generateCommunitySchema('solidjs'),
	'solidjs-courses': generateCourseSchema('solidjs'),
	'solidjs-libraries': generateLibrarySchema('solidjs'),
	'solidjs-podcasts': generatePodcastSchema('solidjs'),
	'solidjs-tools': generateToolSchema('solidjs'),
	// svelte
	'svelte-books': generateBookSchema('svelte'),
	'svelte-blogs': generateBlogSchema('svelte'),
	'svelte-communities': generateCommunitySchema('svelte'),
	'svelte-courses': generateCourseSchema('svelte'),
	'svelte-libraries': generateLibrarySchema('svelte'),
	'svelte-podcasts': generatePodcastSchema('svelte'),
	'svelte-tools': generateToolSchema('svelte'),
	// vue
	'vue-books': generateBookSchema('vue'),
	'vue-blogs': generateBlogSchema('vue'),
	'vue-communities': generateCommunitySchema('vue'),
	'vue-courses': generateCourseSchema('vue'),
	'vue-libraries': generateLibrarySchema('vue'),
	'vue-podcasts': generatePodcastSchema('vue'),
	'vue-tools': generateToolSchema('vue'),
}

function generateBookSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				authors: z.array(z.string()),
				description: z.string(),
				yearOfPublication: z.number(), // filter to 4 characters
				numberOfPages: z.number(),
				level: z.enum(['beginner', 'intermediate', 'advanced']),
				href: z.string().url(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('books', framework))),
			}),
	})
}

function generateBlogSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				author: z.string(),
				description: z.string(),
				href: z.string().url(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('blogs', framework))),
			}),
	})
}

function generateCommunitySchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				description: z.string(),
				type: z.string(),
				href: z.string().url(),
				image: image(),
				darkImageBackground: z.boolean().optional(),
				tags: z.array(z.enum(getTagsByType('communities', framework))),
			}),
	})
}

function generateCourseSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				author: z.string(),
				description: z.string(),
				href: z.string().url(),
				image: image(),
				level: z.enum(['beginner', 'intermediate', 'advanced']),
				paymentType: z.enum(['free', 'paid']),
				format: z.enum(['text', 'interactive', 'video']),
				tags: z.array(z.enum(getTagsByType('courses', framework))),
			}),
	})
}

function generateLibrarySchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				href: z.string().url(),
				author: z.string(),
				description: z.string(),
				repo: z.string(),
				package: z.string(),
				image: image(),
				darkImageBackground: z.boolean().optional(),
				language: z.enum([
					'C#',
					'CSS',
					'Elixir',
					'Go',
					'Haskell',
					'Java',
					'JavaScript',
					'NodeJS',
					'Python',
					'Scala',
					'Swift',
					'TypeScript',
					'unknown',
				]),
				tags: z.array(z.enum(getTagsByType('libraries', framework))),
			}),
	})
}

function generatePodcastSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				href: z.string().url(),
				hosts: z.array(z.string()),
				description: z.string(),
				rss: z.string().url().optional(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('podcasts', framework))),
			}),
	})
}

function generateToolSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				href: z.string().url(),
				author: z.string(),
				description: z.string(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('tools', framework))),
			}),
	})
}

export function getTagsByType(
	collectionType: CollectionTypes,
	framework: Frameworks,
) {
	return TAGS[framework][collectionType]
}
