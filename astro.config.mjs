// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://zhihenexus.org',
	integrations: [
		starlight({
			title: '知合领读人手册',
			description:
				'知合 Nexus 圆桌领读人手册：从理念到备课、从圆桌到营地的完整行动指南。',
			defaultLocale: 'root',
			locales: {
				root: { label: '中文', lang: 'zh-CN' },
			},
			logo: {
				src: './src/assets/nexus-logo.png',
				alt: '知合 NEXUS',
				replacesTitle: true,
			},
			social: [],
			editLink: undefined,
			customCss: ['./src/styles/nexus.css', './src/styles/nexus-splash.css'],
			components: {
				Hero: './src/components/NexusHero.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				Header: './src/components/HandbookHeader.astro',
			},
			sidebar: [
				{
					label: '← 返回官网',
					link: '/',
					attrs: { class: 'nexus-back-sidebar' },
				},
				{
					label: '开始',
					items: [
						{ label: '手册首页', slug: 'handbook' },
						{ label: '致领读人', slug: 'handbook/start' },
						{ label: '献词', slug: 'handbook/dedication' },
						{
							label: '下载 PDF 源文件',
							link: '/files/nexus-handbook-v4.0.pdf',
							attrs: { download: '知合领读人手册v4.0.pdf' },
						},
					],
				},
				{
					label: '第一章 · 关于我们',
					items: [
						{ label: '本章导读', slug: 'handbook/01-about' },
						{ label: '1.1 使命、愿景与教育理念', slug: 'handbook/01-about/1-1' },
						{ label: '1.2 领读人伦理守则', slug: 'handbook/01-about/1-2' },
						{ label: '1.3 工作团队介绍', slug: 'handbook/01-about/1-3' },
					],
				},
				{
					label: '第二章 · 课程设计',
					items: [
						{ label: '本章导读', slug: 'handbook/02-curriculum' },
						{ label: '2.1 课程结构规划', slug: 'handbook/02-curriculum/2-1' },
						{ label: '2.2 文本材料选择', slug: 'handbook/02-curriculum/2-2' },
						{ label: '2.3 讨论问题设计', slug: 'handbook/02-curriculum/2-3' },
						{ label: '2.4 游戏互动设计', slug: 'handbook/02-curriculum/2-4' },
						{ label: '2.5 共读人导向', slug: 'handbook/02-curriculum/2-5' },
					],
				},
				{
					label: '第三章 · 圆桌实施',
					items: [
						{ label: '本章导读', slug: 'handbook/03-seminar' },
						{ label: '3.1 场地与落座', slug: 'handbook/03-seminar/3-1' },
						{ label: '3.2 讨论基础技能', slug: 'handbook/03-seminar/3-2' },
						{ label: '3.3 特殊场景应对', slug: 'handbook/03-seminar/3-3' },
					],
				},
				{
					label: '第四章 · 工作坊共创',
					items: [
						{ label: '本章导读', slug: 'handbook/04-workshop' },
						{ label: '4.1 设计原则', slug: 'handbook/04-workshop/4-1' },
						{ label: '4.2 往期案例', slug: 'handbook/04-workshop/4-2' },
					],
				},
				{
					label: '第五章 · 营地共学',
					items: [
						{ label: '本章导读', slug: 'handbook/05-camp' },
						{ label: '5.1 开营检查清单', slug: 'handbook/05-camp/5-1' },
						{ label: '5.2 营地打卡列表', slug: 'handbook/05-camp/5-2' },
						{ label: '5.3 营地日志', slug: 'handbook/05-camp/5-3' },
					],
				},
				{
					label: '附录',
					items: [{ label: '鸣谢', slug: 'handbook/thanks' }],
				},
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						href: '/images/nexus-logo.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=Noto+Serif+SC:wght@500;700&display=swap',
					},
				},
			],
		}),
		sitemap(),
	],
});
