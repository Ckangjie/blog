module.exports = {
	title: '大白菜wq',
	description: 'bug',
	evergreen: true,
	dest: 'dist',
	base:'/blog/',
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	head: [
		['link', {
			rel: 'icon',
			href: '/images/admin.gif'
		}],
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}],
		['script', {
			charset: 'utf-8',
			src: '/js/xx.js'
		}]
	],
	// 配置永久链接
	permalink: '/:regular',
	markdown: {
		// 代码显示行号
		lineNumbers: true,
		// markdown-it-anchor 的选项
		anchor: {
			permalink: true
		},
		// markdown-it-toc 的选项
		toc: {
			includeLevel: [1, 2, 3]
		},
		// markdown 插件
		extendMarkdown: md => {
			md.set({
				html: true
			});
			md.use(require("@iktakahiro/markdown-it-katex"));
			md.use(require("markdown-it-mark"));
			md.use(require("markdown-it-task-lists"));
			md.use(require("markdown-it-vuepress-code-snippet-enhanced"));
		}
	},
	plugins: [
		'@vuepress-reco/extract-code',
		['@vuepress/medium-zoom', true],
		// 开启 PWA
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: true,
			},
		],
	],
	theme: 'reco',
	themeConfig: {
		repo:'https://github.com/Ckangjie/blog'
		authorAvatar: '/images/admin.gif',
		type: 'blog',
		logo: '/images/admin.gif',
		// 自动隐藏导航
		autoHideNavbar: true,
		// 主题颜色选择
		themePicker: true,
		// 搜索设置
		search: true,
		// 搜索显示条目数量
		searchMaxSuggestions: 5,
		// 自动形成侧边导航
		sidebar: 'auto',
		// 侧边导航层级
		sidebarDepth: 2,
		// 最后更新时间
		lastUpdated: '上次更新',
		// 作者
		author: 'wq',
		// 项目开始时间，只填写年份
		startYear: '2020',
		// 备案号
		record: "暂无",
		// 顶部导航设置
		nav: [{
				text: '首页',
				link: '/',
				icon: 'reco-home'
			},
			// {
			// 	text: '分类',
			// 	icon: 'reco-category',
			// 	link: '/web/web基础.md',
			// },
			{
				text: '过去式',
				link: '/timeLine/',
				icon: 'reco-date'
			},
			{
				text: 'blog地址',
				link: 'http://www.ckjblog.com/blog/',
				icon: 'reco-github'
			},
		],
		// 博客设置
		blogConfig: {
			tag: {
				location: 2, // 在导航栏菜单中所占的位置，默认3
				text: '标签', // 默认 “标签”
			},
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: '分类', // 默认 “分类”
			},
		},
		// 密钥 (if your blog is private)
		// keyPage: {
		//   keys: ['your password'],
		//   color: '#42b983',
		//   lineColor: '#42b983'
		// },

		valineConfig: {
			appId: 'Lx45gKTDY2fa4rIhw1XTPxkQ-gzGzoHsz', // your appId
			appKey: 'T94zUsgczahdtQiuLbeOBb8q',
			placeholder: '填写邮箱可以收到回复提醒哦！',
			notify: true,
			recordIP: true,
			visitor:true,
			avatar: 'monsterid',
			pageSize:5,
			highlight:true,
			enableQQ:true,
		},
		// https://github.com/${owner}/${repo}
		// vssueConfig: {
		//   platform: 'github',
		//   owner: 'yefz',
		//   repo: 'blog',
		//   clientId: '9aaec055b30d64139e6a',
		//   clientSecret: 'f0194b3a26d3a12ce64e4e3d465a8c6911e5f143'
		// },
	},
}
