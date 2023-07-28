import { Library } from '@framework/system/src/models/library'
import { LibraryTag } from '@framework/system/src/models/library-tag'

// The default image here for use
// on libraries that don't have an image
const defaultImage = 'https://github.com/angular.png'

export const libraries: Library[] = [
	{
		name: 'Angular CLI',
		author: 'Google',
		repo: 'https://www.github.com/angular/angular-cli',
		package: 'https://www.npmjs.com/package/@angular/cli',
		href: 'https://angular.io/cli',
		description:
			'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell',
		image: defaultImage,
		tags: [LibraryTag.CLI],
		language: 'NodeJS',
	},
	{
		name: 'NgRx Store',
		author: 'NgRx',
		repo: 'https://www.github.com/ngrx/platform',
		package: 'https://www.npmjs.com/package/@ngrx/store',
		href: 'https://ngrx.io/guide/store',
		description:
			'Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.',
		image: 'https://github.com/ngrx.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'NgRx Effects',
		author: 'NgRx',
		repo: 'https://www.github.com/ngrx/platform',
		package: 'https://www.npmjs.com/package/@ngrx/effects',
		href: 'https://ngrx.io/guide/effects',
		description:
			'Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.',
		image: 'https://github.com/ngrx.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'RxJS',
		author: 'ReactiveX',
		repo: 'https://www.github.com/reactivex/rxjs',
		package: 'https://www.npmjs.com/package/rxjs',
		href: 'https://rxjs.dev/guide/overview',
		description:
			'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
		image:
			'https://raw.githubusercontent.com/ReactiveX/rxjs/master/docs_app/src/assets/images/logos/Rx_Logo_S.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'Transloco',
		author: 'Transloco',
		repo: 'https://www.github.com/ngneat/transloco',
		package: 'https://www.npmjs.com/package/@ngneat/transloco',
		href: 'https://ngneat.github.io/transloco/docs/getting-started/installation',
		description: 'The internationalization (i18n) library for Angular',
		image: 'https://raw.githubusercontent.com/ngneat/transloco/master/logo.svg',
		tags: [LibraryTag.I18N],
		language: 'TypeScript',
	},
	{
		name: 'Nx',
		author: 'Nrwl',
		repo: 'https://www.github.com/nrwl/nx',
		package: 'https://www.npmjs.com/package/@nrwl/nx',
		href: 'https://nx.dev/getting-started/intro',
		description:
			'Nx is an open source build system featuring a lot of monorepo features that help enterprise teams develop Angular at scale.',
		image: 'https://raw.githubusercontent.com/nrwl/nx/master/images/nx.png',
		tags: [LibraryTag.FRAMEWORKS],
		language: 'TypeScript',
	},
	{
		name: 'Angular Material',
		author: 'Google',
		repo: 'https://www.github.com/angular/components',
		package: 'https://www.npmjs.com/package/@angular/material',
		href: 'https://material.angular.io/guide/getting-started',
		description: 'Material Design UI components for Angular applications.',
		image: defaultImage,
		tags: [LibraryTag.STYLING, LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Compodoc',
		author: 'Compodoc',
		repo: 'https://www.github.com/compodoc/compodoc',
		package: 'https://www.npmjs.com/package/@compodoc/compodoc',
		href: 'https://compodoc.app/guides/getting-started.html',
		description:
			'A documentation tool for Angular applications, that can generate static documentation of your application.',
		image: 'https://github.com/compodoc.png',
		tags: [LibraryTag.DOCUMENTATION],
		language: 'TypeScript',
	},
	{
		name: 'Scully',
		author: 'HeroDevs, LLC',
		repo: 'https://www.github.com/scullyio/scully',
		package: 'https://www.npmjs.com/package/@scullyio/scully',
		href: 'https://scully.io/',
		description: 'Static site generator for Angular',
		image: 'https://github.com/scullyio.png',
		tags: [LibraryTag.FRAMEWORKS],
		language: 'TypeScript',
	},
	{
		name: 'lumberjack',
		author: '@ng-worker',
		repo: 'https://www.github.com/ngworker/lumberjack',
		package: 'https://www.npmjs.com/package/lumberjack',
		href: 'https://github.com/ngworker/lumberjack',
		description:
			'Lumberjack is a versatile Angular logging library, specifically designed to be extended and customized. It provides a few simple log drivers (logging mechanisms, transports, log drivers) out-of-the-box.',
		image:
			'https://raw.githubusercontent.com/ngworker/lumberjack/main/logo.svg',
		tags: [LibraryTag.LOGGING],
		language: 'TypeScript',
	},
	{
		name: 'RxAngular',
		author: 'rx-angular',
		repo: 'https://www.github.com/rx-angular/rx-angular',
		package: 'https://www.npmjs.com/package/rx-angular',
		href: 'https://github.com/rx-angular/rx-angular',
		description:
			'RxAngular offers a comprehensive toolset for handling fully reactive Angular applications. It includes packages for state management, component development, and fully reactive rendering in Angular.',
		image: 'https://github.com/rx-angular.png',
		tags: [LibraryTag.STATE_MANAGEMENT, LibraryTag.PERFORMANCE],
		language: 'TypeScript',
	},
	{
		name: 'Akita',
		author: 'Salesforce',
		repo: 'https://www.github.com/salesforce/akita',
		package: 'https://www.npmjs.com/package/@datorama/akita',
		href: 'https://opensource.salesforce.com/akita/',
		description:
			'State management library, built on top of RxJS, based on the ideas introduced by Flux and Redux.',
		image: 'https://opensource.salesforce.com/akita/img/akita.svg',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'NGXS',
		author: 'NGXS',
		repo: 'https://www.github.com/ngxs/store',
		package: 'https://www.npmjs.com/package/@ngxs/store',
		href: 'https://www.ngxs.io/',
		description:
			'State management patter and library for Angular, modeled after the CQRS pattern popularly implemented in libraries like Redux and NgRx. Reduces boilerplate by using modern TypeScript features such as classes and decorators.',
		image: 'https://github.com/ngxs.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'mobx-angular',
		author: 'MobX',
		repo: 'https://www.github.com/mobxjs/mobx-angular',
		package: 'https://www.npmjs.com/package/mobx-angular',
		href: 'https://github.com/mobxjs/mobx-angular',
		description:
			'This is a relatively simple connector to the popular MobX library for state management.  MobX automatically knows what properties your components use from the stores and listens to changes, allowing you to automatically react to changes and update only the parts of the UI that need to be updated.',
		image: 'https://github.com/mobxjs.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'Angular Model',
		author: 'Tomas Trajan',
		repo: 'https://www.github.com/angular-extensions/model',
		package: 'https://www.npmjs.com/package/@angular-extensions/model',
		href: 'https://tomastrajan.github.io/angular-model-pattern-example#/about',
		description:
			'Simple state management with minimalistic API, one way data flow, multiple models support and immutable data exposed as RxJS Observable.',
		image: 'https://github.com/angular-extensions.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'Angular Redux',
		author: 'Angular Redux',
		repo: 'https://www.github.com/angular-redux/store',
		package: 'https://www.npmjs.com/package/@angular-redux/store',
		href: 'https://github.com/angular-redux/ng-redux',
		description:
			'This library provides Angular bindings for Redux, allowing you to easily connect your Angular components with Redux.',
		image: 'https://github.com/angular-redux.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'Xstate',
		author: 'Stately',
		repo: 'https://www.github.com/statelyai/xstate',
		package: 'https://www.npmjs.com/package/xstate',
		href: 'https://xstate.js.org/',
		description:
			'Generic JavaScript and TypeScript finite state machines and statecharts for the modern web.',
		image: 'https://xstate.js.org/docs/logo.svg',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'AngularFire',
		author: 'Google',
		repo: 'https://www.github.com/angular/angularfire',
		package: 'https://www.npmjs.com/package/@angular/fire',
		href: 'https://firebaseopensource.com/projects/angular/angularfire2/',
		description: 'The official Angular library for Firebase.',
		image: 'https://github.com/firebase.png',
		tags: [LibraryTag.DATA_FETCHING, LibraryTag.DATABASE_DRIVERS],
		language: 'TypeScript',
	},
	{
		name: 'Apollo Angular',
		author: 'Kamil Kisiela',
		repo: 'https://www.github.com/kamilkisiela/apollo-angular',
		package: 'https://www.npmjs.com/package/apollo-angular',
		href: 'https://apollo-angular.com/',
		description:
			'GraphQL client for Angular. Simple to set up, and may be used in any context that Angular may be used.',
		image: 'https://landscape.graphql.org/logos/apollo-angular.svg',
		tags: [LibraryTag.DATA_FETCHING, LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'Tailwind CSS',
		author: 'Adam Wathan & Jonathan Reinink',
		repo: 'https://www.github.com/tailwindlabs/tailwindcss',
		package: 'https://www.npmjs.com/package/tailwindcss',
		href: 'https://tailwindcss.com/',
		description:
			'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
		image: 'https://github.com/tailwindlabs.png',
		tags: [LibraryTag.STYLING],
		language: 'TypeScript',
	},
	{
		name: 'Emotion',
		author: 'emotion',
		repo: 'https://www.github.com/emotion-js/emotion',
		package: 'https://www.npmjs.com/package/emotion',
		href: 'https://emotion.sh/',
		description:
			'A framework-agnostic library for writing CSS styles using JavaScript.',
		image: 'https://github.com/emotion-js.png',
		tags: [LibraryTag.STYLING],
		language: 'TypeScript',
	},
	{
		name: 'NG Bootstrap',
		author: 'ng-bootstrap',
		repo: 'https://www.github.com/ng-bootstrap/ng-bootstrap',
		package: 'https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap',
		href: 'https://ng-bootstrap.github.io/#/home',
		description:
			'Angular widgets built from the ground up using only Bootstrap 5 CSS with APIs designed for the Angular ecosystem.',
		image: 'https://github.com/ng-bootstrap.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'ngx-bootstrap',
		author: 'Valor Software',
		repo: 'https://www.github.com/valor-software/ngx-bootstrap',
		package: 'https://www.npmjs.com/package/ngx-bootstrap',
		href: 'https://valor-software.com/ngx-bootstrap/#/',
		description:
			'Provides a collection of Bootstrap components, all powered by Angular.',
		image:
			'https://valor-software.com/ngx-bootstrap/assets/images/logos/ngx-bootstrap-logo.svg',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Onsen UI',
		author: 'Onsen UI',
		repo: 'https://www.github.com/OnsenUI/OnsenUI',
		package: 'https://www.npmjs.com/package/ngx-onsenui',
		href: 'https://onsen.io/',
		description:
			'A set of components to build HTML5 hybrid and mobile web apps. Supports many frameworks, including Angular.',
		image: 'https://github.com/OnsenUI.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'PrimeNG',
		author: 'PrimeFaces',
		repo: 'https://www.github.com/primefaces/primeng',
		package: 'https://www.npmjs.com/package/primeng',
		href: 'https://primefaces.org/primeng/',
		description:
			'Over 80 Angular UI Components with top-notch quality to help you implement all your UI requirements in style.',
		image:
			'https://pbs.twimg.com/profile_images/1345334019131666432/7d8KUAdI_400x400.jpg',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Carbon Components Angular',
		author: 'IBM',
		repo: 'https://www.github.com/IBM/carbon-components-angular',
		package: 'https://www.npmjs.com/package/carbon-components-angular',
		href: 'https://angular.carbondesignsystem.com/documentation/index.html',
		description: 'An Angular implementation of the Carbon Design System',
		image: 'https://github.com/IBM.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'NG-ZORRO',
		author: 'NG-ZORRO',
		repo: 'https://www.github.com/NG-ZORRO/ng-zorro-antd',
		package: 'https://www.npmjs.com/package/ng-zorro-antd',
		href: 'https://ng-zorro.gitee.io/docs/introduce/en',
		description:
			'An enterprise-class Angular UI component library based on Ant Design, all components are open source and free to use under MIT license.',
		image: 'https://github.com/NG-ZORRO.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Kendo UI',
		author: 'Telerik',
		repo: 'https://www.github.com/telerik/kendo-angular',
		package: 'https://www.npmjs.com/package/@progress/kendo-angular-intl',
		href: 'https://www.telerik.com/kendo-angular-ui',
		description:
			'100+ fully native components for building high-quality modern Angular UI in no time.',
		image:
			'https://d585tldpucybw.cloudfront.net/sfimages/default-source/labs/kendo/2020-revamp/a_kendo_mascot.svg?sfvrsn=eb49ba02_2',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Formly',
		author: 'ngx-formly',
		repo: 'https://www.github.com/ngx-formly/ngx-formly',
		package: 'https://www.npmjs.com/package/@ngx-formly/core',
		href: 'https://formly.dev/',
		description: 'Formly is a dynamic (JSON-powered) form library for Angular.',
		image: 'https://github.com/ngx-formly.png',
		tags: [LibraryTag.FORMS],
		language: 'TypeScript',
	},
	{
		name: 'Reactive Forms',
		author: 'ngneat',
		repo: 'https://www.github.com/ngneat/reactive-forms',
		package: 'https://www.npmjs.com/package/@ngneat/reactive-forms',
		href: 'https://github.com/ngneat/reactive-forms',
		description:
			"This library extends every Angular AbstractControl, and provides features that don't exist in the original one. It adds types, reactive queries, and helper methods.",
		image: 'https://github.com/ngneat.png',
		tags: [LibraryTag.FORMS],
		language: 'TypeScript',
	},
	{
		name: 'Ngx Sub Form',
		author: 'cloudnc',
		repo: 'https://www.github.com/cloudnc/ngx-sub-form',
		package: 'https://www.npmjs.com/package/ngx-sub-form',
		href: 'https://github.com/cloudnc/ngx-sub-form',
		description:
			'Utility library to improve the robustness of your Angular forms.',
		image:
			'https://user-images.githubusercontent.com/4950209/53812385-45f48900-3f53-11e9-8687-b57cd335f26e.png',
		tags: [LibraryTag.FORMS],
		language: 'TypeScript',
	},
	{
		name: 'JSONForms',
		author: 'EclipseSource',
		repo: 'https://www.github.com/eclipsesource/jsonforms',
		package: 'https://www.npmjs.com/package/@jsonforms/core',
		href: 'https://jsonforms.io/',
		description: 'More forms. Less code. Complex forms in the blink of an eye.',
		image: 'https://jsonforms.io/img/logo.svg',
		darkImageBackground: true,
		tags: [LibraryTag.FORMS],
		language: 'TypeScript',
	},
	{
		name: 'Ngx Schema Form',
		author: 'guillotinaweb',
		repo: 'https://www.github.com/guillotinaweb/ngx-schema-form',
		package: 'https://www.npmjs.com/package/ngx-schema-form',
		href: 'https://github.com/guillotinaweb/ngx-schema-form',
		description:
			'Ngx Schema Form is an Angular 2+ module allowing you to instanciate an HTML form from a JSON schema.',
		image: 'https://github.com/guillotinaweb.png',
		tags: [LibraryTag.FORMS],
		language: 'TypeScript',
	},
	{
		name: 'ngrx-forms.',
		author: 'Jonathan Ziller',
		repo: 'https://www.github.com/MrWolfZ/ngrx-forms',
		package: 'https://www.npmjs.com/package/ngrx-forms',
		href: 'https://github.com/MrWolfZ/ngrx-forms',
		description:
			'ngrx-forms brings the strengths of the redux state management model to the world of forms in applications that are using Angular and ngrx.',
		image: 'https://github.com/MrWolfZ.png',
		tags: [LibraryTag.FORMS],
		language: 'TypeScript',
	},
	{
		name: 'Angular',
		author: 'Google',
		repo: 'https://www.github.com/angular/angular',
		package: 'https://www.npmjs.com/package/@angular/core',
		href: 'https://angular.io/guide/developer-guide-overview',
		description:
			'Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.',
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: 'TypeScript',
	},
	{
		name: 'Ionic',
		author: 'Ionic',
		repo: 'https://www.github.com/ionic-team/ionic-framework',
		package: 'https://www.npmjs.com/package/@ionic/angular',
		href: 'https://ionicframework.com/docs/angular/overview',
		description:
			'@ionic/angular combines the core Ionic experience with the tooling and APIs that are tailored to Angular Developers.',
		image: 'https://github.com/ionic-team.png',
		tags: [LibraryTag.FRAMEWORKS],
		language: 'TypeScript',
	},
	{
		name: 'NativeScript',
		author: 'NativeScript',
		repo: 'https://www.github.com/NativeScript/NativeScript',
		package: 'https://www.npmjs.com/package/nativescript',
		href: 'https://nativescript.org/',
		description:
			'NativeScript empowers you to access native APIs from JavaScript directly. The framework currently provides iOS and Android runtimes for rich mobile development and can be utilized in a number of diverse use cases.',
		image: 'https://github.com/NativeScript.png',
		tags: [LibraryTag.FRAMEWORKS],
		language: 'TypeScript',
	},
	{
		name: 'NGX-Translate',
		author: 'ngx-translate',
		repo: 'https://www.github.com/ngx-translate/core',
		package: 'https://www.npmjs.com/package/@ngx-translate/core',
		href: 'https://www.ngx-translate.com/',
		description:
			'Modular internationalization library for Angular. It gives you access to a service, a directive and a pipe to handle any dynamic or static content.',
		image: 'https://github.com/ngx-translate.png',
		tags: [LibraryTag.I18N],
		language: 'TypeScript',
	},
	{
		name: 'Observer-Spy',
		author: 'HiRez.io',
		repo: 'https://www.github.com/hirezio/observer-spy',
		package: 'https://www.npmjs.com/package/@hirez_io/observer-spy',
		href: 'https://github.com/hirezio/observer-spy',
		description: 'This library makes RxJS Observables testing easy!',
		image: 'https://github.com/hirezio.png',
		tags: [LibraryTag.TESTING],
		language: 'TypeScript',
	},
	{
		name: 'Protractor',
		author: 'Julie Ralph',
		repo: 'https://www.github.com/angular/protractor',
		package: 'https://www.npmjs.com/package/protractor',
		href: 'https://www.protractortest.org/#/',
		description:
			'Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.',
		image: 'https://www.protractortest.org/img/favicon.ico',
		tags: [LibraryTag.TESTING],
		language: 'TypeScript',
	},
	{
		name: 'AG Grid',
		author: 'AG Grid',
		repo: 'https://www.github.com/ag-grid/ag-grid',
		package: 'https://www.npmjs.com/package/ag-grid-community',
		href: 'https://ag-grid.com/angular-data-grid/getting-started/',
		description:
			'AG Grid is a fully-featured and highly customizable JavaScript data grid.',
		image: 'https://github.com/ag-grid.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'AGM - Angular Google Maps',
		author: 'Sebastian Holstein',
		repo: 'https://www.github.com/SebastianM/angular-google-maps',
		package: 'https://www.npmjs.com/package/@agm/core',
		href: 'https://angular-maps.com/guides/getting-started/',
		description: 'Angular components for Google Maps.',
		image:
			'https://raw.githubusercontent.com/SebastianM/angular-google-maps/master/assets/images/angular-google-maps-logo.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'NGX Skeleton loader',
		author: 'Will Mendes',
		repo: 'https://www.github.com/willmendesneto/ngx-skeleton-loader',
		package: 'https://www.npmjs.com/package/ngx-skeleton-loader',
		href: 'https://github.com/willmendesneto/ngx-skeleton-loader',
		description:
			'Make beautiful, animated loading skeletons that automatically adapt to your Angular apps.',
		image: 'https://github.com/willmendesneto.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Angular Testing Library',
		author: 'testing-library',
		repo: 'https://www.github.com/testing-library/angular-testing-library',
		package: 'https://www.npmjs.com/package/@testing-library/angular',
		href: 'https://testing-library.com/docs/angular-testing-library/intro/',
		image: 'https://github.com/testing-library.png',
		tags: [LibraryTag.TESTING],
		description:
			'Simple and complete Angular testing utilities that encourage good testing practices.',
		language: 'TypeScript',
	},
	{
		name: 'Cypress',
		author: 'Cypress',
		repo: 'https://www.github.com/cypress-io/cypress',
		package: 'https://www.npmjs.com/package/cypress',
		href: 'https://www.cypress.io/',
		image: 'https://github.com/cypress-io.png',
		tags: [LibraryTag.TESTING],
		description:
			'Fast, easy and reliable testing for anything that runs in a browser.',
		language: 'TypeScript',
	},
	{
		name: 'Jest',
		author: 'Meta',
		repo: 'https://www.github.com/facebook/jest',
		package: 'https://www.npmjs.com/package/jest',
		href: 'https://jestjs.io/',
		image:
			'https://raw.githubusercontent.com/facebook/jest/main/website/static/img/jest.png',
		tags: [LibraryTag.TESTING],
		description:
			'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
		language: 'TypeScript',
	},
	{
		name: 'RxIDB',
		author: 'This Dot Labs',
		repo: 'https://www.github.com/thisdot/open-source',
		package: 'https://www.npmjs.com/package/@this-dot/rxidb',
		href: 'https://www.npmjs.com/package/@this-dot/rxidb',
		image: 'https://github.com/thisdot.png',
		tags: [LibraryTag.DATA_FETCHING, LibraryTag.STATE_MANAGEMENT],
		description:
			'RxIDB is a library for storing and retrieving data from indexedDB databases, using an RxJS based API.',
		language: 'TypeScript',
	},
	{
		name: 'Route Config',
		author: 'This Dot Labs',
		repo: 'https://www.github.com/thisdot/open-source',
		package: 'https://www.npmjs.com/package/@this-dot/route-config',
		href: 'https://www.npmjs.com/package/@this-dot/route-config',
		image: 'https://github.com/thisdot.png',
		tags: [LibraryTag.PERFORMANCE],
		description:
			"Route Config is an Angular library that provides tools to easily set and access the properties defined in RouterModule configuration. It offers some built in tools that work out of the box but also is easily extensible via data property of Angular's Route configuration object.",
		language: 'TypeScript',
	},
	{
		name: 'Ng Utils',
		author: 'This Dot Labs',
		repo: 'https://www.github.com/thisdot/open-source',
		package: 'https://www.npmjs.com/package/@this-dot/ng-utils',
		href: 'https://www.npmjs.com/package/@this-dot/ng-utils',
		image: 'https://github.com/thisdot.png',
		tags: [LibraryTag.PERFORMANCE],
		description:
			'Ng Utils is a collection of Angular utils which we would like to continuously extend and improve.',
		language: 'TypeScript',
	},
	{
		name: 'Cypress IndexedDB helpers',
		author: 'This Dot Labs',
		repo: 'https://www.github.com/thisdot/open-source',
		package: 'https://www.npmjs.com/package/@this-dot/cypress-indexeddb',
		href: 'https://www.npmjs.com/package/@this-dot/cypress-indexeddb',
		image: 'https://github.com/thisdot.png',
		tags: [LibraryTag.TESTING],
		description:
			'Cypress IndexedDB helpers are a set of custom cypress commands that helps you handle indexedDB related operations in your Cypress tests.',
		language: 'TypeScript',
	},
	{
		name: 'Storybook',
		author: 'Storybook',
		repo: 'https://www.github.com/storybookjs/storybook',
		package: 'https://www.npmjs.com/package/@storybook/react',
		href: 'https://storybook.js.org/',
		image: 'https://github.com/storybookjs.png',
		tags: [LibraryTag.DOCUMENTATION, LibraryTag.TOOLING],
		description:
			'Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.',
		language: 'NodeJS',
	},
	{
		name: 'Ignite UI',
		author: 'Infragistics',
		repo: 'https://github.com/IgniteUI/igniteui-angular',
		package: 'https://www.npmjs.com/package/igniteui-angular',
		href: 'https://www.infragistics.com/products/ignite-ui-angular',
		image: 'https://avatars.githubusercontent.com/u/5366066?s=200&v=4',
		description:
			'60+ feature-rich, Material-based components for building better UX and modern-day web apps.',
		tags: [LibraryTag.COMPONENT, LibraryTag.FRAMEWORKS, LibraryTag.CLI],
		language: 'TypeScript',
	},
	{
		name: 'Analog',
		author: 'Brandon Roberts',
		repo: 'https://github.com/analogjs/analog',
		package: 'https://www.npmjs.com/package/@analogjs/platform',
		href: 'https://analogjs.org/',
		image: 'https://analogjs.org/img/favicon.ico',
		description:
			'Analog is a meta-framework for building applications and websites with Angular.',
		tags: [LibraryTag.FRAMEWORKS],
		language: 'TypeScript',
	},
	{
		name: 'Taiga UI',
		author: 'Tinkoff Bank',
		repo: 'https://github.com/tinkoff/taiga-ui',
		package: 'https://www.npmjs.com/package/taiga-ui',
		href: 'https://taiga-ui.dev/',
		image: 'https://taiga-ui.dev/assets/favicon-32x32.png',
		description:
			'Taiga UI is fully-treeshakable Angular UI Kit that contains 130+ components, 100+ directives, dozens of tokens, utils and tools.',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Nebular',
		author: 'Akveo',
		repo: 'https://github.com/akveo/nebular',
		package: 'https://www.npmjs.com/package/@nebular/theme',
		href: 'https://akveo.github.io/nebular/',
		image: 'https://akveo.github.io/nebular/favicon.png',
		description:
			'Nebular is a customizable Angular UI library that contains 40+ UI components, four visual themes, and Auth and Security modules.',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'StateAdapt',
		author: 'StateAdapt',
		repo: 'https://github.com/state-adapt/state-adapt',
		package: 'https://www.npmjs.com/package/@state-adapt/angular',
		href: 'https://state-adapt.github.io/angular',
		image: 'https://state-adapt.github.io/assets/sa3-3.svg',
		description: 'Minimal, reactive and reusable state management',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
]
