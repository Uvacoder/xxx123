import { Library } from "@framework/system/src/models/library";
import { LibraryTag } from "@framework/system/src/models/library-tag";

// The default image here for use
// on libraries that don't have an image
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultImage =
	"https://avatars.githubusercontent.com/u/42048915?s=200&v=4"

export const libraries: Library[] = [
	{
		name: "Standard Library",
		author: "Deno",
		repo: "https://github.com/denoland/deno_std",
		package: "",
		href: "https://deno.land/std",
		description:
			"A standard set of high quality code that all Deno projects can use fearlessly.",
		image: "https://avatars.githubusercontent.com/u/42048915?s=200&v=4",
		tags: [
			LibraryTag.TESTING,
			LibraryTag.UTILITIES,
			LibraryTag.WEB_SERVERS,
			LibraryTag.DOCUMENTATION,
		],
		language: "TypeScript",
	},
	{
		name: "flat",
		description: "A collection of postprocessing utilities for flat",
		href: "https://deno.land/x/flat",
		package: "",
		repo: "https://github.com/githubocto/flat-postprocessing",
		author: "GitHub Next",
		image: "https://avatars.githubusercontent.com/u/68357280?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "lambda",
		description:
			"A deno runtime for AWS Lambda. Deploy deno via docker, SAM, serverless, or bundle it yourself.",
		href: "https://deno.land/x/lambda",
		package: "",
		repo: "https://github.com/hayd/deno-lambda",
		author: "Andy Hayden",
		image: "https://avatars.githubusercontent.com/u/1931852?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "install",
		description: "Deno Binary Installer",
		href: "https://deno.land/x/install",
		package: "",
		repo: "https://github.com/denoland/deno_install",
		author: "Deno",
		image: "https://avatars.githubusercontent.com/u/42048915?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.CLI, LibraryTag.TOOLING],
		language: "TypeScript",
	},
	{
		name: "SheetJS",
		description: "📗 SheetJS Community Edition -- Spreadsheet Data Toolkit",
		href: "https://deno.land/x/sheetjs",
		package: "",
		repo: "https://github.com/SheetJS/sheetjs",
		author: "SheetJS",
		image: "https://avatars.githubusercontent.com/u/5826089?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATA_PROCESSING],
		language: "TypeScript",
	},
	{
		name: "url_join",
		description:
			"A simple port of the NodeJS module url-join to Deno with typescript",
		href: "https://deno.land/x/url_join",
		package: "",
		repo: "https://github.com/roonie007/url-join",
		author: "Mouadh HSOUMI",
		image: "https://avatars.githubusercontent.com/u/7860859?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "cliffy",
		description:
			"Command line framework for deno 🦕 Including Commandline-Interfaces, Prompts, CLI-Table, Arguments Parser and more...",
		href: "https://deno.land/x/cliffy",
		package: "",
		repo: "https://github.com/c4spar/deno-cliffy",
		author: "Benjamin Fischer",
		image: "https://avatars.githubusercontent.com/u/61995275?v=4",
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.CLI],
		language: "TypeScript",
	},
	{
		name: "dejs",
		description: "ejs template engine for deno.",
		href: "https://deno.land/x/dejs",
		package: "",
		repo: "https://github.com/syumai/dejs",
		author: "syumai",
		image: "https://avatars.githubusercontent.com/u/6882878?v=4",
		tags: [LibraryTag.WEB_SERVERS, LibraryTag.UTILITIES, LibraryTag.TEMPLATING],
		language: "TypeScript",
	},
	{
		name: "lodash",
		description:
			"A modern JavaScript utility library delivering modularity, performance, & extras.",
		href: "https://deno.land/x/lodash",
		package: "",
		repo: "https://github.com/lodash/lodash",
		author: "Lodash Utilities",
		image: "https://avatars.githubusercontent.com/u/2565403?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATA_PROCESSING],
		language: "TypeScript",
	},
	{
		name: "dotenv",
		description: "Dotenv file handling for deno.",
		href: "https://deno.land/x/dotenv",
		package: "",
		repo: "https://github.com/pietvanzoen/deno-dotenv",
		author: "Piet van Zoen",
		image: "https://avatars.githubusercontent.com/u/630334?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "Deno DOM",
		description: "Browser DOM & HTML parser in Deno",
		href: "https://deno.land/x/deno_dom",
		package: "",
		repo: "https://github.com/b-fuze/deno-dom",
		author: "b-fuze",
		image: "https://avatars.githubusercontent.com/u/10504957?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "denoflate",
		description:
			"WebAssembly port of Rust's flate2, a Rust implementation of Deflate, Gzip, and Zlib compressions",
		href: "https://deno.land/x/denoflate",
		package: "",
		repo: "https://github.com/hazae41/foras",
		author: "Haz Æ 41",
		image: "https://avatars.githubusercontent.com/u/4405263?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "oak",
		description: "A middleware framework for handling HTTP with Deno 🐿️ 🦕",
		href: "https://deno.land/x/oak",
		package: "",
		repo: "https://github.com/oakserver/oak",
		author: "oak",
		image: "https://avatars.githubusercontent.com/u/47053330?s=200&v=4",
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.WEB_SERVERS],
		language: "TypeScript",
	},
	{
		name: "license_checker",
		description: "📄 CLI tool for checking license headers in files",
		href: "https://deno.land/x/license_checker",
		package: "",
		repo: "https://github.com/kt3k/deno_license_checker",
		author: "Yoshiya Hinosawa",
		image: "https://avatars.githubusercontent.com/u/613956?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DOCUMENTATION],
		language: "TypeScript",
	},
	{
		name: "lume",
		description: "🔥 Static site generator for Deno 🦕",
		href: "https://deno.land/x/lume",
		package: "",
		repo: "https://github.com/lumeland/lume",
		author: "lume",
		image: "https://avatars.githubusercontent.com/u/74823948?s=200&v=4",
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.TEMPLATING],
		language: "TypeScript",
	},
	{
		name: "fresh",
		description: "The next-gen web framework.",
		href: "https://deno.land/x/fresh",
		package: "",
		repo: "https://github.com/denoland/fresh",
		author: "Deno",
		image: "https://avatars.githubusercontent.com/u/42048915?s=200&v=4",
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.WEB_SERVERS],
		language: "TypeScript",
	},
	{
		name: "path_to_regexp",
		description:
			"Turn a path string such as `/user/:name` into a regular expression",
		href: "https://deno.land/x/path_to_regexp",
		package: "",
		repo: "https://github.com/pillarjs/path-to-regexp",
		author: "pillarjs",
		image: "https://avatars.githubusercontent.com/u/8441312?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "djwt",
		description:
			"Create and verify JSON Web Tokens (JWT) with Deno or the browser.",
		href: "https://deno.land/x/djwt",
		package: "",
		repo: "https://github.com/timonson/djwt",
		author: "Timo Rossa",
		image: "https://avatars.githubusercontent.com/u/54777088?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "retry",
		description:
			"Re-execute a function until it does not throw an error or execute a function with a timeout.",
		href: "https://deno.land/x/retry",
		package: "",
		repo: "https://github.com/franckLdx/retry",
		author: "Franck Ledoux",
		image: "https://avatars.githubusercontent.com/u/17727359?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATA_FETCHING],
		language: "TypeScript",
	},
	{
		name: "postgres",
		description: "PostgreSQL driver for Deno",
		href: "https://deno.land/x/postgres",
		package: "",
		repo: "https://github.com/denodrivers/postgres",
		author: "Deno Drivers",
		image: "https://avatars.githubusercontent.com/u/73310055?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATABASE_DRIVERS],
		language: "TypeScript",
	},
	{
		name: "progress",
		description: "ProgressBar in terminal for deno",
		href: "https://deno.land/x/progress",
		package: "",
		repo: "https://github.com/deno-library/progress",
		author: "Deno Library",
		image: "https://avatars.githubusercontent.com/u/63284956?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "eszip",
		description:
			"A compact file format to losslessly serialize an ECMAScript module graph into a single file",
		href: "https://deno.land/x/eszip",
		package: "",
		repo: "https://github.com/denoland/eszip",
		author: "Deno",
		image: "https://avatars.githubusercontent.com/u/42048915?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "esbuild",
		description: "No description",
		href: "https://deno.land/x/esbuild",
		package: "",
		repo: "https://github.com/esbuild/deno-esbuild",
		author: "esbuild",
		image: "https://avatars.githubusercontent.com/u/65141206?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.TOOLING],
		language: "TypeScript",
	},
	{
		name: "semver",
		description:
			"The semver parser for Deno (a fork of node-semver using TypeScript) ",
		href: "https://deno.land/x/semver",
		package: "",
		repo: "https://github.com/justjavac/deno-semver",
		author: "迷渡",
		image: "https://avatars.githubusercontent.com/u/359395?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "udd",
		description:
			"Update Deno Dependencies - update dependency urls to their latest published versions",
		href: "https://deno.land/x/udd",
		package: "",
		repo: "https://github.com/hayd/deno-udd",
		author: "Andy Hayden",
		image: "https://avatars.githubusercontent.com/u/1931852?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.TOOLING],
		language: "TypeScript",
	},
	{
		name: "rss",
		description:
			"📰 Deno module for deserializing RSS or ATOM XML feeds into typed objects ",
		href: "https://deno.land/x/rss",
		package: "",
		repo: "https://github.com/MikaelPorttila/rss",
		author: "Mikael Porttila",
		image: "https://avatars.githubusercontent.com/u/903468?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATA_FETCHING],
		language: "TypeScript",
	},
	{
		name: "accepts",
		description: "Higher level content negotiation for Deno.",
		href: "https://deno.land/x/accepts",
		package: "",
		repo: "https://github.com/ako-deno/accepts",
		author: "ako-deno",
		image: "https://avatars.githubusercontent.com/u/65393568?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "mongo",
		description: "MongoDB driver for Deno",
		href: "https://deno.land/x/mongo",
		package: "",
		repo: "https://github.com/denodrivers/mongo",
		author: "Deno Drivers",
		image: "https://avatars.githubusercontent.com/u/73310055?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATABASE_DRIVERS],
		language: "TypeScript",
	},
	{
		name: "negotiator",
		description: "An HTTP content negotiator for Deno.",
		href: "https://deno.land/x/negotiator",
		package: "",
		repo: "https://github.com/ako-deno/negotiator",
		author: "ako-deno",
		image: "https://avatars.githubusercontent.com/u/65393568?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "case",
		description:
			"Convert strings between camelCase, PascalCase, Title Case, snake_case and more ",
		href: "https://deno.land/x/case",
		package: "",
		repo: "https://github.com/justjavac/deno-change-case",
		author: "迷渡",
		image: "https://avatars.githubusercontent.com/u/359395?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "puppeteer",
		description: "A port of puppeteer running on Deno",
		href: "https://deno.land/x/puppeteer",
		package: "",
		repo: "https://github.com/lucacasonato/deno-puppeteer",
		author: "Luca Casonato",
		image: "https://avatars.githubusercontent.com/u/7829205?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.TESTING],
		language: "TypeScript",
	},
	{
		name: "deno_slack_hooks",
		description:
			"Helper library implementing the contract between the Slack CLI and Slack application SDKs",
		href: "https://deno.land/x/deno_slack_hooks",
		package: "",
		repo: "https://github.com/slackapi/deno-slack-hooks",
		author: "SlackAPI",
		image: "https://avatars.githubusercontent.com/u/6962987?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "polkadot",
		description: "Package publishing for deno.land/x/polkadot",
		href: "https://deno.land/x/polkadot",
		package: "",
		repo: "https://github.com/polkadot-js/build-deno.land",
		author: "@polkadot{.js}",
		image: "https://avatars.githubusercontent.com/u/33775474?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.TOOLING],
		language: "TypeScript",
	},
	{
		name: "html_rewriter",
		description:
			"WASM-based implementation of Cloudflare's HTML Rewriter for use in Deno, browsers, etc.",
		href: "https://deno.land/x/html_rewriter",
		package: "",
		repo: "https://github.com/worker-tools/html-rewriter",
		author: "Worker Tools",
		image: "https://avatars.githubusercontent.com/u/72681775?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "events",
		description: "EventEmitter for deno",
		href: "https://deno.land/x/events",
		package: "",
		repo: "https://github.com/deno-library/events",
		author: "Deno Library",
		image: "https://avatars.githubusercontent.com/u/63284956?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "zod",
		description:
			"TypeScript-first schema validation with static type inference",
		href: "https://deno.land/x/zod",
		package: "",
		repo: "https://github.com/colinhacks/zod",
		author: "Colin McDonnell",
		image: "https://avatars.githubusercontent.com/u/3084745?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "sqlite",
		description: "Deno SQLite module",
		href: "https://deno.land/x/sqlite",
		package: "",
		repo: "https://github.com/dyedgreen/deno-sqlite",
		author: "Tilman Roeder",
		image: "https://avatars.githubusercontent.com/u/6896443?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATABASE_DRIVERS],
		language: "TypeScript",
	},
	{
		name: "discordeno",
		description: "Discord API library for Deno",
		href: "https://deno.land/x/discordeno",
		package: "",
		repo: "https://github.com/discordeno/discordeno",
		author: "Discordeno",
		image: "https://avatars.githubusercontent.com/u/73952741?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.API_LIBRARIES],
		language: "TypeScript",
	},
	{
		name: "s3_lite_client",
		description: "A lightweight S3 client for Deno",
		href: "https://deno.land/x/s3_lite_client",
		package: "",
		repo: "https://github.com/bradenmacdonald/deno-s3-lite-client",
		author: "Braden MacDonald",
		image: "https://avatars.githubusercontent.com/u/945577?v=4",
		tags: [
			LibraryTag.UTILITIES,
			LibraryTag.DATA_FETCHING,
			LibraryTag.API_LIBRARIES,
		],
		language: "TypeScript",
	},
	{
		name: "bcrypt",
		description: "A port of jBCrypt to TypeScript for use as a Deno module",
		href: "https://deno.land/x/bcrypt",
		package: "",
		repo: "https://github.com/JamesBroadberry/deno-bcrypt",
		author: "James Broadberry",
		image: "https://avatars.githubusercontent.com/u/11461387?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "msgpack",
		description: "msgpack-javascript ported to deno",
		href: "https://deno.land/x/msgpack",
		package: "",
		repo: "https://github.com/Srinivasa314/msgpack-deno",
		author: "Srinivasa Mahesh",
		image: "https://avatars.githubusercontent.com/u/62195746?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "another_cookiejar",
		description: "https://deno.land/x/another_cookiejar",
		href: "https://deno.land/x/another_cookiejar",
		package: "",
		repo: "https://github.com/jd1378/deno-another-cookiejar",
		author: "javad mnjd",
		image: "https://avatars.githubusercontent.com/u/6196533?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATA_FETCHING],
		language: "TypeScript",
	},
	{
		name: "deno_graph",
		description: "The module graph logic for Deno CLI",
		href: "https://deno.land/x/deno_graph",
		package: "",
		repo: "https://github.com/denoland/deno_graph",
		author: "Deno",
		image: "https://avatars.githubusercontent.com/u/42048915?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "ts_morph",
		description:
			"TypeScript Compiler API wrapper for static analysis and programmatic code changes.",
		href: "https://deno.land/x/ts_morph",
		package: "",
		repo: "https://github.com/dsherret/ts-morph",
		author: "David Sherret",
		image: "https://avatars.githubusercontent.com/u/1609021?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "semaphore",
		description: "https://deno.land/x/semaphore@v1.1.1",
		href: "https://deno.land/x/semaphore",
		package: "",
		repo: "https://github.com/jd1378/deno-semaphore",
		author: "javad mnjd",
		image: "https://avatars.githubusercontent.com/u/6196533?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "code_block_writer",
		description: "Code writer for JavaScript and TypeScript code.",
		href: "https://deno.land/x/code_block_writer",
		package: "",
		repo: "https://github.com/dsherret/code-block-writer",
		author: "David Sherret",
		image: "https://avatars.githubusercontent.com/u/1609021?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "sendgrid",
		description: "No description",
		href: "https://deno.land/x/sendgrid",
		package: "",
		repo: "https://github.com/gpasq/deno-sendgrid",
		author: "Greg Pasquariello",
		image: "https://avatars.githubusercontent.com/u/3801469?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.API_LIBRARIES],
		language: "TypeScript",
	},
	{
		name: "mysql",
		description: " MySQL driver for Deno",
		href: "https://deno.land/x/mysql",
		package: "",
		repo: "https://github.com/denodrivers/mysql",
		author: "Deno Drivers",
		image: "https://avatars.githubusercontent.com/u/73310055?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.DATABASE_DRIVERS],
		language: "TypeScript",
	},
	{
		name: "isx",
		description: "TypeScript-first is function collections",
		href: "https://deno.land/x/isx",
		package: "",
		repo: "https://github.com/TomokiMiyauci/isx",
		author: "Satoshi",
		image: "https://avatars.githubusercontent.com/u/46842642?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "mock",
		description:
			"Utilities to help mock behavior, spy on function calls, stub methods, and fake time for tests.",
		href: "https://deno.land/x/mock",
		package: "",
		repo: "https://github.com/udibo/mock",
		author: "Udibo",
		image: "https://avatars.githubusercontent.com/u/6780232?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.TESTING],
		language: "TypeScript",
	},
	{
		name: "cors",
		description: "Deno.js CORS middleware",
		href: "https://deno.land/x/cors",
		package: "",
		repo: "https://github.com/tajpouria/cors",
		author: "Pouria Taj",
		image: "https://avatars.githubusercontent.com/u/46822325?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.WEB_SERVERS],
		language: "TypeScript",
	},
	{
		name: "murmurhash",
		description: "An incremental implementation of MurmurHash3 for JavaScript",
		href: "https://deno.land/x/murmurhash",
		package: "",
		repo: "https://github.com/justjavac/deno-murmurhash",
		author: "迷渡",
		image: "https://avatars.githubusercontent.com/u/359395?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "nunjucks",
		description:
			"A powerful templating engine with inheritance, asynchronous control, and more (Jinja 2 inspired)",
		href: "https://deno.land/x/nunjucks",
		package: "",
		repo: "https://github.com/valtlai/nunjucks-deno",
		author: "Valtteri Laitinen",
		image: "https://avatars.githubusercontent.com/u/5496284?v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.TEMPLATING],
		language: "TypeScript",
	},
	{
		name: "sleep",
		description:
			"🦕 module for sleep. You can sleep for a specific amount of time or you can sleep for a random amount of time with this.",
		href: "https://deno.land/x/sleep",
		package: "",
		repo: "https://github.com/michael-spengler/sleep",
		author: "michael spengler",
		image: "https://avatars.githubusercontent.com/u/43786652?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "imagemagick_deno",
		description: "No description",
		href: "https://deno.land/x/imagemagick_deno",
		package: "",
		repo: "https://github.com/lumeland/imagemagick-deno",
		author: "lume",
		image: "https://avatars.githubusercontent.com/u/74823948?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "bytes_formater",
		description:
			"Formatting bytes(Uint8Array、Uint16Array、Uint32Array、ArrayBufferView..) output, is very useful when debugging IO functions",
		href: "https://deno.land/x/bytes_formater",
		package: "",
		repo: "https://github.com/manyuanrong/bytes_formater",
		author: "EnokMan",
		image: "https://avatars.githubusercontent.com/u/7514524?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "yargs",
		description: "yargs the modern, pirate-themed successor to optimist.",
		href: "https://deno.land/x/yargs",
		package: "",
		repo: "https://github.com/yargs/yargs",
		author: "yargs",
		image: "https://avatars.githubusercontent.com/u/16504989?s=200&v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "dnt",
		description: "Deno to npm package build tool.",
		href: "https://deno.land/x/dnt",
		package: "",
		repo: "https://github.com/denoland/dnt",
		author: "Deno",
		image: "https://avatars.githubusercontent.com/u/42048915?s=200&v=4",
		tags: [LibraryTag.UTILITIES, LibraryTag.TOOLING],
		language: "TypeScript",
	},
	{
		name: "js_yaml_port",
		description: "This is a simple and crude port of JS-YAML for Deno.",
		href: "https://deno.land/x/js_yaml_port",
		package: "",
		repo: "https://github.com/KSXGitHub/simple-js-yaml-port-for-deno",
		author: "Khải",
		image: "https://avatars.githubusercontent.com/u/11488886?v=4",
		tags: [LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "grm",
		description: "MTProto API Client for Deno 🦕",
		href: "https://deno.land/x/grm",
		package: "",
		repo: "https://github.com/grmjs/grm",
		author: "Grm",
		image: "https://avatars.githubusercontent.com/u/109421281?s=200&v=4",
		tags: [
			LibraryTag.UTILITIES,
			LibraryTag.DATA_FETCHING,
			LibraryTag.API_LIBRARIES,
		],
		language: "TypeScript",
	},
	{
		name: "ultra",
		description: "Deno and React based suspense SSR framework.",
		href: "https://deno.land/x/ultra",
		package: "",
		repo: "https://github.com/exhibitionist-digital/ultra",
		author: "Ultra",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.WEB_SERVERS],
		language: "TypeScript",
	},
	{
		name: "denodb",
		description:
			"Deno-based ORM supporting PostgreSQL, MySQL, MariaDB, SQLite and MongoDB.",
		href: "https://deno.land/x/denodb",
		package: "",
		repo: "https://github.com/eveningkid/denodb",
		author: "eveningkid",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.ORM],
		language: "TypeScript",
	},
]
