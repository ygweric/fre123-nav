import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@vueuse/nuxt',
		'nuxt-icon',
		'@pinia-plugin-persistedstate/nuxt',
	],
	pinia: {
		autoImports: ['defineStore', 'storeToRefs'],
	},
	alias: {
		'@': path.resolve(__dirname, 'src'),
	},
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					// size: '32x32',
					type: 'image/png',
					href: '/favicon.png',
				},
			],
			meta: [
				{
					name: 'keywords',
					content:
						'软件开发工具、软件开发利器、代码编辑器、版本控制系统、调试工具、性能优化工具、前端开发工具、后端开发工具、移动开发工具、测试工具、开发效率',
				},
				{
					name: 'description',
					content:
						'欢迎来到DevHub ICU，您的软件开发利器！我们提供丰富多样的软件开发工具，包括代码编辑器、版本控制系统、调试工具、性能优化工具等。无论您是前端开发、后端开发、移动开发还是测试人员，我们都有适合您的工具选择。我们的目标是为您提供高效、便捷的开发体验。立即加入我们，提升您的软件开发效率！',
				},
			],
		},
		buildAssetsDir: '/fre/',
	},

	vite: {
		// 预处理，全局可用
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import 'assets/_variables.scss';`,
				},
			},
		},
		esbuild: {
			drop: process.env.NODE_ENV === 'development' ? [] : ['console', 'debugger'],
		},
	},
	experimental: {
		writeEarlyHints: false,
		inlineSSRStyles: false,
	},
	css: [
		'~/assets/global.scss',
		'~/assets/tailwind.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
	],
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/pro-solid-svg-icons',
			'@fortawesome/pro-regular-svg-icons',
			'@fortawesome/free-brands-svg-icons',
		],
	},

	// devtools: { enabled: process.env.NODE_ENV === 'development' ? true : false },
	devtools: { enabled: false},
})
