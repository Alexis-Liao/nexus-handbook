import type { Locale } from './locales';

export type UiStrings = {
	meta: {
		titleSuffix: string;
		homeDescription: string;
		aboutTitle: string;
		aboutDescription: string;
		philosophyTitle: string;
		philosophyDescription: string;
		programsTitle: string;
		programsDescription: string;
		teamTitle: string;
		teamDescription: string;
		joinTitle: string;
		joinDescription: string;
		facilitatorTitle: string;
		facilitatorDescription: string;
	};
	nav: {
		openMenu: string;
		closeMenu: string;
		mainNav: string;
		switchLanguage: string;
	};
	footer: {
		backHome: string;
		scanWechat: string;
		emailLabel: string;
		copyright: string;
		nonprofit: string;
		founded: string;
	};
	home: {
		heroAria: string;
		heroTitleLine1: string;
		heroTitleLine2: string;
		mission: string;
		vision: string;
		ctaPrograms: string;
		ctaPhilosophy: string;
		ctaHandbook: string;
		programsEyebrow: string;
		programsTitle: string;
		programsIntro: string;
		programsDetail: string;
		culturalPlainEyebrow: string;
		culturalPlainTitle: string;
		locationNote: string;
		voicesEyebrow: string;
		voicesTitle: string;
		voicesIntro: string;
		strengthEyebrow: string;
		strengthTitle: string;
		joinCta: string;
		closingText: string;
		closingEmail: string;
		closingEvents: string;
		chineseArticleNote: string;
	};
	about: {
		heroTitle: string;
		heroLede: string;
		mission: string;
		vision: string;
		locationsEyebrow: string;
		locationsTitle: string;
		locationsIntro: string;
		feedbackEyebrow: string;
		feedbackTitle: string;
	};
	philosophy: {
		heroTitle: string;
		heroLede: string;
		liberalEyebrow: string;
		liberalTitle: string;
		roundtableEyebrow: string;
		roundtableTitle: string;
	};
	programs: {
		heroTitle: string;
		heroLede: string;
		campLifeEyebrow: string;
		campLifeTitle: string;
		campLifeIntro: string;
		memoriesEyebrow: string;
		memoriesTitle: string;
		memoriesIntro: string;
		memoryEssay: string;
		memoryReview: string;
		timelineEyebrow: string;
		timelineTitle: string;
		coursesEyebrow: string;
		coursesTitle: string;
		coursesIntro: string;
		facilitatorLabel: string;
	};
	team: {
		heroTitle: string;
		heroLede: string;
		leadershipEyebrow: string;
		leadershipTitle: string;
	};
	join: {
		heroTitle: string;
		heroLede: string;
		pathsEyebrow: string;
		pathsTitle: string;
		whyEyebrow: string;
		whyTitle: string;
		statApplications: string;
		statAcceptance: string;
		statTraining: string;
		partnersEyebrow: string;
		partnersTitle: string;
		ctaHandbook: string;
		ctaPrograms: string;
	};
	facilitator: {
		heroTitle: string;
		heroLede: string;
		deadlinePrefix: string;
		ctaHandbook: string;
		section01: string;
		campInfo: string;
		qualification: string;
		deadline: string;
		mode: string;
		support: string;
		method: string;
		wechatApply: string;
		section02: string;
		section02Intro: string;
		section02Lede: string;
		section03: string;
		section03Intro: string;
		section04: string;
		baiduDownload: string;
		passwordPrefix: string;
		consultTitle: string;
		mission: string;
		vision: string;
		backToJoin: string;
	};
	memory: {
		backPrograms: string;
		sectionLabel: string;
		facilitatorReviews: string;
		participantReviews: string;
		partnerReviews: string;
		closing: string;
		author: string;
		other: string;
		resourcesIntro: string;
		extractCode: string;
		facilitatorAt: string;
		imagePlaceholder: string;
	};
	handbook: {
		englishSite: string;
		backToSite: string;
	};
};

const zh: UiStrings = {
	meta: {
		titleSuffix: '构建文化平原的青年社群',
		homeDescription:
			'知合 NEXUS 是致力于在中国文化平原地区为青年人搭建思辨、讨论、共学社群的非营利教育项目。了解读书营、圆桌共学、团队与参与方式。',
		aboutTitle: '关于',
		aboutDescription: '了解知合 Nexus 的使命、愿景与文化平原定位。',
		philosophyTitle: '理念与方法',
		philosophyDescription: '知合 NEXUS 的博雅教育理念与圆桌共学方法。',
		programsTitle: '读书营',
		programsDescription: '知合 NEXUS 暑期读书营、冬季读书会与线上活动。',
		teamTitle: '团队',
		teamDescription: '认识知合 NEXUS 理事会与各工作组志愿者团队。',
		joinTitle: '参与',
		joinDescription: '加入知合 NEXUS——成为共读人、领读人或工作团队成员。',
		facilitatorTitle: '领读人招募',
		facilitatorDescription: '2026 暑期知合圆桌领读人招募——营地信息、角色要求、报名与录取流程。',
	},
	nav: {
		openMenu: '打开导航菜单',
		closeMenu: '关闭导航菜单',
		mainNav: '主导航',
		switchLanguage: '切换语言',
	},
	footer: {
		backHome: '返回首页',
		scanWechat: '扫码关注公众号',
		emailLabel: '电子邮箱：',
		copyright: '非营利性创新教育项目',
		nonprofit: '非营利性创新教育项目',
		founded: '创立于',
	},
	home: {
		heroAria: '知合 Nexus',
		heroTitleLine1: '构建文化平原',
		heroTitleLine2: '的青年社群',
		mission: '使命',
		vision: '愿景',
		ctaPrograms: '了解读书营',
		ctaPhilosophy: '理念与方法',
		ctaHandbook: '领读人手册',
		programsEyebrow: 'Programs',
		programsTitle: '知合主要项目',
		programsIntro: '以圆桌·博雅为方法，在暑期、冬季与线上持续展开共学实践。',
		programsDetail: '项目详情与时间线',
		culturalPlainEyebrow: 'Cultural Plain',
		culturalPlainTitle: '落点：文化平原',
		locationNote: '2024 年以来的知合营地点',
		voicesEyebrow: 'Voices',
		voicesTitle: '共读人反馈',
		voicesIntro: '每年，我们读书营的反馈都超出了预期，这也印证了我们的定位是准确的。',
		strengthEyebrow: 'Strength',
		strengthTitle: '独特优势',
		joinCta: '参与我们',
		closingText: '共赴平原',
		closingEmail: '咨询邮箱',
		closingEvents: '近期活动',
		chineseArticleNote: '',
	},
	about: {
		heroTitle: '构建文化平原的青年社群',
		heroLede: '知合 NEXUS 致力于在中国的文化平原地区，为青年人搭建思辨、讨论、共学的社群。',
		mission: '使命',
		vision: '愿景',
		locationsEyebrow: 'Locations',
		locationsTitle: '知合营落点',
		locationsIntro: '2024 年以来，知合在以下城市开展读书营。',
		feedbackEyebrow: 'Feedback',
		feedbackTitle: '共读人的声音',
	},
	philosophy: {
		heroTitle: '理念与方法',
		heroLede: '圆桌 · 博雅',
		liberalEyebrow: 'Liberal Education',
		liberalTitle: '博雅教育',
		roundtableEyebrow: 'Roundtable',
		roundtableTitle: '圆桌作为一种方法',
	},
	programs: {
		heroTitle: '项目与周期',
		heroLede: '知合主要活动与业务——以读书营为核心，全年持续展开。',
		campLifeEyebrow: 'Camp Life',
		campLifeTitle: '营地现场',
		campLifeIntro: '暑期与冬季读书营中，领读人与共读人在各地展开圆桌共学。',
		memoriesEyebrow: 'Memories',
		memoriesTitle: '营地记忆',
		memoriesIntro:
			'记录各地读书营中那些难以附着的夏天——领读人、共读人与志愿者留下的文字与回声。',
		memoryEssay: '营地手记',
		memoryReview: '营地回顾',
		timelineEyebrow: 'Timeline',
		timelineTitle: '知合营地工作时间线',
		coursesEyebrow: 'Courses',
		coursesTitle: '夏季读书营课程案例',
		coursesIntro: '以下为往期领读人设计的原创圆桌课程示例。',
		facilitatorLabel: '领读人：',
	},
	team: {
		heroTitle: '知合团队',
		heroLede: '以志愿形式参与，各工作组全程支持营地筹备与落地。',
		leadershipEyebrow: 'Leadership',
		leadershipTitle: '理事会',
	},
	join: {
		heroTitle: '参与知合',
		heroLede: '无限可能——与我们一同推动教育资源分配公平。',
		pathsEyebrow: 'Paths',
		pathsTitle: '参与方式',
		whyEyebrow: 'Why Nexus',
		whyTitle: '独特优势',
		statApplications: '2025 暑期申请数',
		statAcceptance: '每年最终录取率',
		statTraining: '平均领读人培训时长',
		partnersEyebrow: 'Partners',
		partnersTitle: '合作案例',
		ctaHandbook: '阅读领读人手册',
		ctaPrograms: '了解读书营',
	},
	facilitator: {
		heroTitle: '领读人招募',
		heroLede: '设计并带领一门原创圆桌课程，与共读人一起在文化平原展开思辨与共学。',
		deadlinePrefix: '报名截止：',
		ctaHandbook: '阅读领读人手册',
		section01: '申请信息',
		campInfo: '营地信息',
		qualification: '报名资质',
		deadline: '截止时间',
		mode: '招募模式',
		support: '重要提示',
		method: '报名方式',
		wechatApply: '前往微信公众号报名',
		section02: '我们在找谁',
		section02Intro: '知合圆桌领读人',
		section02Lede:
			'在知合圆桌中，每个领读人将扮演三个重要的角色：课程设置者、讨论带领者、知识传播者。',
		section03: '暑期营地介绍',
		section03Intro: '往期营地现场',
		section04: '报名与录取流程',
		baiduDownload: '百度网盘下载',
		passwordPrefix: '提取码：',
		consultTitle: '咨询联系',
		mission: '使命',
		vision: '愿景',
		backToJoin: '返回参与页',
	},
	memory: {
		backPrograms: '← 读书营',
		sectionLabel: '营地记忆',
		facilitatorReviews: '领读人回顾',
		participantReviews: '共读人回顾',
		partnerReviews: '城市合伙人 / 志愿回顾',
		closing: '结语',
		author: '本文作者',
		other: '其他',
		resourcesIntro: '附：营地课程资料，欢迎感兴趣的伙伴取阅、分享。',
		extractCode: '提取码：',
		facilitatorAt: '于知合{location}营领读',
		imagePlaceholder: '图片',
	},
	handbook: {
		englishSite: 'English site',
		backToSite: '← 返回官网',
	},
};

const en: UiStrings = {
	meta: {
		titleSuffix: 'A youth community building cultural plains',
		homeDescription:
			'Zhihe NEXUS is a nonprofit education project building communities for critical thinking, discussion, and collaborative learning among young people in China\'s cultural plains.',
		aboutTitle: 'About',
		aboutDescription: 'Learn about Zhihe Nexus mission, vision, and cultural plains focus.',
		philosophyTitle: 'Philosophy & Methods',
		philosophyDescription: 'Zhihe NEXUS liberal education philosophy and roundtable methods.',
		programsTitle: 'Programs',
		programsDescription: 'Zhihe NEXUS summer reading camps, winter salons, and online events.',
		teamTitle: 'Team',
		teamDescription: 'Meet the Zhihe NEXUS board and volunteer working teams.',
		joinTitle: 'Join',
		joinDescription: 'Join Zhihe NEXUS—as a participant, facilitator, or team volunteer.',
		facilitatorTitle: 'Facilitator Recruitment',
		facilitatorDescription:
			'2026 Zhihe summer roundtable facilitator recruitment—camp info, roles, application and admission.',
	},
	nav: {
		openMenu: 'Open navigation menu',
		closeMenu: 'Close navigation menu',
		mainNav: 'Main navigation',
		switchLanguage: 'Switch language',
	},
	footer: {
		backHome: 'Back to home',
		scanWechat: 'Scan to follow WeChat account',
		emailLabel: 'Email: ',
		copyright: 'Nonprofit innovative education project',
		nonprofit: 'Nonprofit innovative education project',
		founded: 'Founded in',
	},
	home: {
		heroAria: 'Zhihe Nexus',
		heroTitleLine1: 'Building cultural plains',
		heroTitleLine2: 'A community for youth',
		mission: 'Mission',
		vision: 'Vision',
		ctaPrograms: 'Explore programs',
		ctaPhilosophy: 'Philosophy & methods',
		ctaHandbook: 'Facilitator handbook (ZH)',
		programsEyebrow: 'Programs',
		programsTitle: 'Zhihe Core Programs',
		programsIntro:
			'Using roundtable liberal education across summer, winter, and online co-learning.',
		programsDetail: 'Program details & timeline',
		culturalPlainEyebrow: 'Cultural Plain',
		culturalPlainTitle: 'Where we work: cultural plains',
		locationNote: 'Zhihe camp locations since 2024',
		voicesEyebrow: 'Voices',
		voicesTitle: 'Participant feedback',
		voicesIntro:
			'Each year, reading camp feedback exceeds our expectations—confirming that our direction is right.',
		strengthEyebrow: 'Strength',
		strengthTitle: 'What makes us different',
		joinCta: 'Join us',
		closingText: 'Toward the plains together',
		closingEmail: 'Contact email',
		closingEvents: 'Recent events',
		chineseArticleNote: ' (Chinese article)',
	},
	about: {
		heroTitle: 'A youth community building cultural plains',
		heroLede:
			'Zhihe NEXUS builds communities for critical thinking, discussion, and collaborative learning in China\'s cultural plains.',
		mission: 'Mission',
		vision: 'Vision',
		locationsEyebrow: 'Locations',
		locationsTitle: 'Where Zhihe camps take place',
		locationsIntro: 'Since 2024, Zhihe has run reading camps in these cities.',
		feedbackEyebrow: 'Feedback',
		feedbackTitle: 'Voices from participants',
	},
	philosophy: {
		heroTitle: 'Philosophy & Methods',
		heroLede: 'Roundtable · Liberal Education',
		liberalEyebrow: 'Liberal Education',
		liberalTitle: 'Liberal education',
		roundtableEyebrow: 'Roundtable',
		roundtableTitle: 'The roundtable as method',
	},
	programs: {
		heroTitle: 'Programs & Calendar',
		heroLede: 'Zhihe\'s core activities—reading camps at the center, year-round.',
		campLifeEyebrow: 'Camp Life',
		campLifeTitle: 'Camp life',
		campLifeIntro:
			'During summer and winter reading camps, facilitators and participants gather for roundtable co-learning across cities.',
		memoriesEyebrow: 'Memories',
		memoriesTitle: 'Camp memories',
		memoriesIntro:
			'Recording summers that resist easy capture—words and echoes from facilitators, participants, and volunteers.',
		memoryEssay: 'Camp notes',
		memoryReview: 'Camp recap',
		timelineEyebrow: 'Timeline',
		timelineTitle: 'Zhihe camp calendar',
		coursesEyebrow: 'Courses',
		coursesTitle: 'Sample summer camp courses',
		coursesIntro: 'Examples of original roundtable courses designed by past facilitators.',
		facilitatorLabel: 'Facilitator: ',
	},
	team: {
		heroTitle: 'The Zhihe team',
		heroLede: 'All-volunteer working teams supporting camp preparation and delivery.',
		leadershipEyebrow: 'Leadership',
		leadershipTitle: 'Board of directors',
	},
	join: {
		heroTitle: 'Join Zhihe',
		heroLede: 'Infinite possibilities—working together for fairer access to education.',
		pathsEyebrow: 'Paths',
		pathsTitle: 'Ways to join',
		whyEyebrow: 'Why Nexus',
		whyTitle: 'What makes us different',
		statApplications: '2025 summer applications',
		statAcceptance: 'Annual acceptance rate',
		statTraining: 'Avg. facilitator training hours',
		partnersEyebrow: 'Partners',
		partnersTitle: 'Partnership cases',
		ctaHandbook: 'Read facilitator handbook (ZH)',
		ctaPrograms: 'Explore programs',
	},
	facilitator: {
		heroTitle: 'Facilitator recruitment',
		heroLede:
			'Design and lead an original roundtable course, and learn together with participants in the cultural plains.',
		deadlinePrefix: 'Application deadline: ',
		ctaHandbook: 'Read facilitator handbook (ZH)',
		section01: 'Application info',
		campInfo: 'Camp locations',
		qualification: 'Eligibility',
		deadline: 'Deadline',
		mode: 'Recruitment mode',
		support: 'Important notes',
		method: 'How to apply',
		wechatApply: 'Apply via WeChat article (Chinese)',
		section02: 'Who we\'re looking for',
		section02Intro: 'Zhihe roundtable facilitators',
		section02Lede:
			'At Zhihe roundtables, each facilitator plays three key roles: curriculum designer, discussion leader, and knowledge sharer.',
		section03: 'Summer camp introduction',
		section03Intro: 'Past camp scenes',
		section04: 'Application & admission process',
		baiduDownload: 'Download from Baidu Netdisk',
		passwordPrefix: 'Password: ',
		consultTitle: 'Contact',
		mission: 'Mission',
		vision: 'Vision',
		backToJoin: 'Back to Join page',
	},
	memory: {
		backPrograms: '← Programs',
		sectionLabel: 'Camp memories',
		facilitatorReviews: 'Facilitator reflections',
		participantReviews: 'Participant reflections',
		partnerReviews: 'City partners / volunteer reflections',
		closing: 'Closing',
		author: 'About the author',
		other: 'More',
		resourcesIntro: 'Camp course materials for interested readers to browse and share.',
		extractCode: 'Extract code: ',
		facilitatorAt: 'Facilitator at Zhihe {location} camp',
		imagePlaceholder: 'Image',
	},
	handbook: {
		englishSite: 'English site →',
		backToSite: '← Back to website',
	},
};

export const ui: Record<Locale, UiStrings> = { zh, en };

export function getUi(locale: Locale): UiStrings {
	return ui[locale];
}
