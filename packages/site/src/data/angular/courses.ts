import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"state management",
	"components",
	"data fetching",
	"routing",
	"testing",
	"services",
	"RxJS",
	"ngRx",
	"javascript marathon",
	"nx monorepo",
	"ignite UI",
	"ivy",
	"PWA",
	"A11Y",
	"pipes",
	"angular patterns",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "Getting started with Angular",
		author: "Google",
		image: "https://github.com/angular.png",
		description:
			"Introduces you to the essentials of Angular by walking you through building an e-commerce site with a catalog, shopping cart, and check-out form.",
		paymentType: "free",
		level: "beginner",
		format: "interactive",
		href: "https://angular.io/start",
		tags: ["state management", "services", "routing", "testing"],
	},
	{
		title: "Tour of Heroes App and Tutorial",
		author: "Google",
		image: "https://github.com/angular.png",
		description:
			"In this official Angular tutorial, you build your own application from the ground up, providing experience with the typical development process, as well as an introduction to basic app-design concepts, tools, and terminology.",
		paymentType: "free",
		level: "intermediate",
		format: "interactive",
		href: "https://angular.io/tutorial",
		tags: [
			"state management",
			"components",
			"data fetching",
			"routing",
			"services",
		],
	},
	{
		title: "Rxjs fruits",
		author: "Gregor Biswanger",
		image: "https://www.rxjs-fruits.com/assets/Rx_Logo_S.png",
		description:
			"Learn the basics of how Reactive Extensions work by mixing your own fruit juice!",
		paymentType: "free",
		level: "beginner",
		format: "interactive",
		href: "https://www.rxjs-fruits.com/subscribe",
		tags: ["RxJS"],
	},
	{
		title: "Using Angular Libraries in an Nx Monorepo",
		author: "Patricio Vargas",
		image: "https://github.com/thisdot.png",
		description:
			"Using Angular Libraries in an Nx Monorepo with Patricio Vargas Learn how to use Angular libraries, and share code between multiple enterprise applications in your current or your future monorepo project using Nx by the Nrwl team.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/frswk1syMiw",
		tags: ["nx monorepo", "javascript marathon"],
	},
	{
		title: "Learning RxJS in 1 Hour",
		author: "Ben Lesh",
		image: "https://github.com/thisdot.png",
		description:
			"Learning about Observables and operators including how to build an Observable from scratch with Ben Lesh, author of RxJS",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/oFDVf0shWYE",
		tags: ["RxJS", "javascript marathon"],
	},
	{
		title: "1 Hour to Learn Angular",
		author: "Frederik Prijck",
		image: "https://github.com/thisdot.png",
		description:
			"During this hour we will walk through what the Angular CLI is and how it can help us. We'll explore a newly created Angular application as well as data binding (interpolation, attribute vs property bindings, class bindings) and components using input and outputs.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/RxGieS-x3pk",
		tags: [
			"state management",
			"components",
			"data fetching",
			"javascript marathon",
		],
	},
	{
		title: "Subjects in RxJS 101",
		author: "Ben Lesh",
		image: "https://github.com/thisdot.png",
		description:
			"Learn about Subjects, multicasting, common mistakes, and how to use them properly with Ben Lesh, author of RxJS.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/Yvgfk5EAFws",
		tags: ["RxJS", "javascript marathon"],
	},
	{
		title: "Build Angular Apps in Minutes",
		author: "Brian Lagunas & Jason Beres",
		image: "https://github.com/thisdot.png",
		description:
			"Angular schematics drive the productivity features of the Angular CLI. With the added benefits of tools, such as Ignite UI from Infragistics, you can take the CLI to the next step with built in component and app templates, and customized themes, and more to kickstart the app experience you need. In the webinar, Brian Lagunas and Jason Beres from Infragistics product teams will walk you through how to use the CLI and how you can create your own customizations to bring hyper-productivity to your teams.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/kOYO3_L_zJM",
		tags: ["ignite UI", "javascript marathon"],
	},
	{
		title: "Advanced NgRx: Complex Angular State Management",
		author: "Rob Ocel",
		image: "https://github.com/thisdot.png",
		description:
			"State management libraries like NgRx can be simple to learn but difficult to master. Managed correctly, NgRx can be a powerful tool for isolating complexity and separating concerns, greatly speeding up development and reducing errors. However, when applied incorrectly, NgRx can overwhelm your team and actually improve errors. Luckily, there are a handful of tips that can help you and your team reach state management bliss.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/JP4dEM4bjE8",
		tags: ["ngRx", "javascript marathon"],
	},
	{
		title: "Fully zone-less - High Performance in post IVY",
		author: "Michael Hladky",
		image: "https://github.com/thisdot.png",
		description:
			"We will learn why async pipe is boring! Learn what you can do with Ivy, covering topics such as: Rendering, Scheduling, Coalescing and a Rendering Demo",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/x0W_mbivKLk",
		tags: ["ivy", "javascript marathon"],
	},
	{
		title: "PWA in Angular",
		author: "Patricio Vargas",
		image: "https://github.com/thisdot.png",
		description:
			"In this training you will learn how easy it is to convert your Angular application as a PWA with just one command. I'm also going to dive into the files generated by the angular cli that make your application a PWA.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/9hL0WabUoSc",
		tags: ["PWA", "javascript marathon"],
	},
	{
		title: "Easy Angular Unit Testing in NgRx",
		author: "Frederik Prijck",
		image: "https://github.com/thisdot.png",
		description:
			"NgRx is awesome, but testing can be a complex job. We'll cover some of the common patterns to test NgRx's reducers, selectors, effects as well as components that are using those selectors and actions.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/NOT-nJLDnyg",
		tags: ["ngRx", "testing", "javascript marathon"],
	},
	{
		title: "The Best Pro Tips for A11Y in Angular",
		author: "Daniel Marin",
		image: "https://github.com/thisdot.png",
		description:
			"Angular helps us build more dynamic applications easier than with just javascript. Given how easy it is, it is common to see developers doing things in their own way, instead of using what's available. In this training you'll learn what NOT to do, so your applications stay accessible even using Angular.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/JsS052A1CVg",
		tags: ["A11Y", "javascript marathon"],
	},
	{
		title: "A Guide to Advanced Angular Patterns (Route Guards, Pipes, Interceptors & more)",
		author: "Rob Ocel",
		image: "https://github.com/thisdot.png",
		description:
			"It's easy to write websites and applications in Angular using mostly basic components, services, and the built-in Angular tools (such as pipes). But, there's a lot more you can do in Angular to build your own utilities and extend the Angular platform! In this training, we'll learn how to take full advantage of the Angular platform. We'll explain and build sample route guards, pipes, interceptors, and directives.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		href: "https://youtu.be/wWEJnolhb_s",
		tags: ["routing", "pipes", "angular patterns", "javascript marathon"],
	}, 
]
