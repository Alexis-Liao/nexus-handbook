export const site = {
	name: '知合 NEXUS',
	motto: '格物致知，知行合一',
	tagline: '心若流水，亦如明火',
	description:
		'我们致力于在中国的文化平原地区，为处于教育资源不平等困境中的青年人搭建思辨、讨论、共学的社群。',
	vision: '为更多座城，提供更多教育的可能',
	yearFounded: 2024,
} as const;

export const contact = {
	email: 'alexisprotopia@gmail.com',
	wechatArticle: {
		label: '2026 暑期读书营招募',
		href: 'https://mp.weixin.qq.com/s/YdySkm8dm79CfKzls2mJ0w',
	},
} as const;

export const socialLinks = [
	{
		id: 'wechat',
		label: '微信公众号',
		name: '知合Nexus',
		qrcode: '/images/social/wechat-qrcode.png',
	},
	{
		id: 'xiaohongshu',
		label: '小红书',
		name: 'Nexus1313257414',
	},
] as const;

export const footerColumns = [
	{
		title: '项目',
		links: [
			{ label: '读书营总览', href: '/programs/' },
			{ label: '暑期读书营', href: '/programs/' },
			{ label: '冬季读书会', href: '/programs/' },
			{ label: '线上活动', href: '/programs/' },
		],
	},
	{
		title: '了解我们',
		links: [
			{ label: '关于知合', href: '/about/' },
			{ label: '理念与方法', href: '/philosophy/' },
			{ label: '团队介绍', href: '/team/' },
		],
	},
	{
		title: '参与',
		links: [
			{ label: '参与方式', href: '/join/' },
			{ label: '成为共读人', href: '/join/' },
			{ label: '领读人招募', href: '/join/facilitator/' },
			{ label: '加入工作团队', href: '/join/' },
		],
	},
	{
		title: '资源',
		links: [
			{ label: '领读人手册', href: '/handbook/' },
			{
				label: '领读人招募',
				href: '/join/facilitator/',
			},
			{
				label: '2026 暑期招募',
				href: 'https://mp.weixin.qq.com/s/YdySkm8dm79CfKzls2mJ0w',
				external: true,
			},
		],
	},
] as const;

export const nav = [
	{ label: '首页', href: '/' },
	{ label: '关于', href: '/about/' },
	{ label: '理念与方法', href: '/philosophy/' },
	{ label: '读书营', href: '/programs/' },
	{ label: '团队', href: '/team/' },
	{ label: '参与', href: '/join/' },
	{ label: '领读人手册', href: '/handbook/' },
] as const;

export const leadership = [
	{
		name: '刘百川',
		role: '理事长',
		school: '牛津大学 / 皇家霍洛威学院 · 地理学',
		bio: '百川在英国学习了5年地理学，是个认路达人，也是个徒步、滑雪、金酒爱好者。Ta的主要的研究对象是喜马拉雅山边境的人口流动与基建发展。百川喜欢李志的音乐、娄烨的电影和巴萨的足球',
		photo: '/images/team/liu-baichuan.jpg',
	},
	{
		name: '廖智立',
		role: '副理事长 / 品牌',
		school: '南开大学 · 社会学',
		bio: '希望能永远独立地做社区与自组织研究，为了创造出当代《全球概览》而立志走遍地球上每一个国家，连接不同类型的社区和社群',
		photo: '/images/team/liao-zhili.png',
	},
	{
		name: '张雨馨',
		role: '副理事长 / 课程',
		school: '中国人民大学 · 文学',
		bio: '曾经是在北京搞创新教育的朝九晚六社畜。Gap year推广大使。',
		photo: '/images/team/zhang-yuxin.png',
	},
	{
		name: '赵丽姣',
		role: '副理事长 / 运营',
		school: '中国传媒大学 · 全球传播与国际关系',
		bio: '喜欢探索一切新鲜好奇的火象星座狮子女，喜欢自然和人群，性格时静时动。也喜欢流行文化，目前也正在研究和了解流行文化',
		photo: '/images/team/zhao-lijiao.jpg',
	},
	{
		name: '冯晓萱',
		role: '理事会成员',
		school: '澳门大学 · 语言学硕士',
		bio: '澳门大学语言学硕士',
	},
] as const;

export const teamGroups = [
	{
		name: '课程组',
		members: [
			{ name: '赵佳莹' },
			{
				name: '刘昊明',
				school: '牛津大学 历史 · Macalester College 经济学、应用数学',
				bio: '南京人，南北烤鸭之争是不容僭越的底线。博士在读，英国18-19c文化思想史，论文研究19c初英国政治经济学科建构；今年研究领域辐射看了些大学史。关注音乐学/批判理论。想写赋格。知合唯一团宠猫猫（叉腰）。',
				photo: '/images/team/liu-haoming.jpg',
			},
			{ name: '施怡阳' },
			{ name: '杨暄婷' },
			{
				name: '张芝安',
				school: '中山大学 · 哲学/古典学',
				bio: '在英国闯荡的第六年，目前是一只西方古典学的博二牛马，跟2000多年前的古希腊罗马世界打交道。本人作风老派，思想先锋；喜欢观察人类，游山玩水，做饭养生，看熊猫视频，打各类的球，下一个想学的事情是冲浪。',
				photo: '/images/team/zhang-zhian.png',
			},
			{ name: '王翰乾' },
			{ name: '易靓晶' },
		],
	},
	{
		name: '统筹组',
		members: [
			{
				name: '杨培显',
				school: '南开大学 · 世界史',
				bio: '在南开了四年世界史，学术只是略通、杂书倒是看了不少。一个威士忌和精酿脑袋，在酒吧做过调酒师，没事喜欢和不同的朋友们喝酒聊天，也在尝试自己酿酒和做好一个饮·食博主。',
				photo: '/images/team/yang-peixian.jpg',
			},
		],
	},
	{
		name: '品牌组',
		members: [{ name: '马驰' }, { name: '杨海瑜' }],
	},
] as const;

export const liberalEducation = {
	intro:
		'现代社会的变化日新月异，对学生的独立思考能力、批判性思维等综合能力提出要求，博雅教育的需求应然而生。博雅教育通过让学生涉猎多个学科，以小班式的讨论帮助学生形成健全的人格，领悟不同的文化和思维方式，最大程度锻炼学生当下社会所需的种种能力与思辨思维。',
	history:
		'这一教育理念在东方可追溯到先秦时代的六艺教育和汉朝的儒家教育，在西方则起源于古希腊的城邦和古罗马，强调人格的全面发展。',
	quote: {
		text: '欲诚其意者，先致其知；致知在格物',
		source: '《礼记·大学》',
	},
	commitment:
		'知合 NEXUS 坚信博雅教育的价值，并希望通过自己的影响力，参与到中国博雅教育的发展与实验中，将博雅教育的体验分享给更多人。',
	pillars: [
		{ title: '历史渊源', text: '从东方六艺、儒家教育到西方古典城邦，博雅传统源远流长。' },
		{ title: '现代实践', text: '复旦、清华、北大及哈佛、耶鲁等精英高校，愈发重视跨学科与小班讨论。' },
		{ title: '人才培养', text: '以批判性思维与健全人格为核心，回应快速变化的社会需求。' },
	],
} as const;

export const roundtable = {
	philosophy:
		'相比于传统的课堂形式，「圆桌」从最原初的空间意义上就体现着平等、对话和最大程度地相互看见。知合圆桌的使命与目标之一便是改变传统课堂中的师生之间的权力关系，其中尤其突出的是共读人的思考、表达与成长。',
	practice:
		'这种价值观，需要依托每场圆桌的直接践行者——领读人和共读人来共同完成。',
	features: [
		'领读人与共读人以书籍、文章与其他信息媒介为载体',
		'设计为期 5–10 天的完整读书会',
		'小班制圆桌，15 人以下，每天持续 2–3 小时',
		'共读人以本地高中生、低年级大学生为主',
	],
} as const;

export const campPhotos = [
	{
		src: '/images/camps/zunyi-2025-opening.png',
		alt: '2025 遵义夏季营开营仪式合影',
		caption: '2025 遵义夏季营 · 开营仪式',
		tag: '暑期读书营',
	},
	{
		src: '/images/camps/camp-group-2025.png',
		alt: '知合读书营共读人与领读人合影',
		caption: '营地期间的圆桌共学与结业时刻',
		tag: '营地现场',
	},
] as const;

export const programs = [
	{
		id: 'summer',
		title: '暑期读书营',
		tag: '核心项目',
		description:
			'知合 NEXUS 的主要项目。领读人常驻在一个城市，开展为期约 10 天的暑期营。每位领读人在经过培训后，带来一门精心设计的原创课程，以文本阅读和讨论为主，每天两至三小时的课时。',
		details: [
			'每日课程之余，设计辩论、戏剧和创作沙龙、领读人经验分享、实地调查等活动',
			'领读人团队规模约 8 人，学生数量 50–100 人，一般以高三毕业生为主',
		],
	},
	{
		id: 'winter',
		title: '冬季读书会',
		tag: '精简版营地',
		description:
			'精简版的暑期读书营，在寒假期间举办，一般持续三到五天。每位领读人负责一节 2–3 小时的讨论课，形式与读书会或沙龙更为贴近，面向大众。',
		details: [],
	},
	{
		id: 'online',
		title: '线上活动',
		tag: '全年补充',
		description:
			'知合积极探索线上活动的可能，以填补每年寒暑假以外的活动空缺。目前，知合每个月会举办一次线上公开课或圆桌讨论，就某一具体题材展开，由过往领读人主讲。',
		details: [],
	},
] as const;

export const timeline = [
	{ period: '3月 – 5月', label: '暑期读书营 · 招募面试期' },
	{ period: '5月 – 7月', label: '暑期读书营 · 培训期' },
	{ period: '7月 – 8月', label: '暑期读书营 · 营地期' },
	{ period: '11月 – 12月', label: '冬季读书会 · 招募面试期' },
	{ period: '12月', label: '冬季读书会 · 培训期' },
	{ period: '1月 – 2月', label: '冬季读书会 · 营地期' },
] as const;

export const sampleCourses = [
	{
		title: '战争地理：女性主义与批判理论',
		leader: '刘学长',
		leaderBio: '牛津大学经济社会史硕士',
		description:
			'从批判性地理学的角度了解战争，运用女性主义、后殖民主义与后结构主义等批判理论，辩证看待战争、军国主义、武器与军事建筑等因素带来的社会影响。',
	},
	{
		title: '动物伦理学',
		leader: '林立霄',
		leaderBio: '',
		description:
			'探索与动物伦理相关的议题，反思「人类中心主义」这一根深蒂固的观念——工厂化肉食、动物实验、栖息地破坏，以及我们对伴侣动物的疏忽，是否构成非正义？',
	},
	{
		title: '（非人类）动物与正义',
		leader: '刘百川',
		leaderBio: '理事长',
		description:
			'（非人类）动物生活在由人类支配的世界里。我们将共同探索动物不幸的遭遇是否非正义，以及作为个人我们又能做些什么。',
	},
] as const;

export const culturalPlain = {
	title: '文化平原',
	definition:
		'「文化平原地区」指在中国广泛存在的文化发展滞后于经济发展的城市地区。相对于「文化高原」地区，这种相对缺乏更体现在文化资本的缺乏，如艺术、文化和科学环境与博物馆、图书馆、剧院等文化基础设施。',
	context:
		'这类地区的形成通常与教育资源的不均衡密切相关。由于优质教育资源和文化资本集中于「文化高原」，位于文化平原地区的居民难以通过教育获取正式的制度化文化资本（如高学历）。因此，文化平原地区不仅仅是地理上文化资源匮乏的地方，更是象征着一种「文化资本弱势」的社会位置。',
	scope:
		'在中国，地理上的文化平原大量分布在工业化城市、三四线城市和部分县域地区。但一线城市的流动人口社区也是不可忽视的存在。',
} as const;

export const campLocations = [
	'重庆',
	'贵阳',
	'运城',
	'哈尔滨',
	'遵义',
	'泾川',
	'三门',
] as const;

export const testimonials = [
	{
		quote:
			'在营地的每一天都很充实。有一个平台在这里，给你提供思考再表达的机会，让别人听到你的声音，或者说，让自己听到自己的声音。这样的感觉，我只能用美好来形容。',
		author: '李同学',
		role: '共读人',
	},
	{
		quote:
			'过往的知合体验和经历让我猜测它或许能疗愈我，却不曾想，它仍旧再次给了我，远超预期的爱与幸福的获得，并且同过往一样，深刻而持久的影响着我。',
		author: '周同学',
		role: '共读人',
	},
	{
		quote:
			'能和几人一起伴随清风鸟语促膝长谈理想国和尼采，讨论社会建构和新闻口述，聆听优秀的学长学姐谈道德与哲学，生命与表达，没有比思想上的碰撞交融更有魅力的时候。',
		author: '邹同学',
		role: '共读人',
	},
] as const;

export const advantages = [
	{
		title: '坚持非营利理念',
		text: '在线下营地中，知合 NEXUS 从来没有向参与者征收过学费，而是尽量以每年的赞助费去补贴必要的开支。即便未来因组织规模扩大而不得不征收成本费用，非营利性质都不会改变。',
	},
	{
		title: '严格的筛选与培训',
		text: '领读人每年经过多轮严苛筛选和严格培训流程。每年收到上百份申请，最终录取率约 50%，平均培训 15 小时，以确保课程质量。',
	},
	{
		title: '多元背景的领读人',
		text: '知合 NEXUS 同时拥有大量海外背景与国内背景的领读人。海外高校领读人带来不同背景的思考与见解，国内顶级高校领读人则更加了解非一线城市学生的教育需求。',
	},
] as const;

export const partners = {
	note: '近年来与知合 NEXUS 合作的组织（部分）',
	cases: [
		{
			title: '知合 × 五月 May · 合作读书营',
			date: '2025.7',
			description:
				'五月 May 成立于 2015 年，是一个立足小城临海的在地文创组织，旨在探索老城有机更新过程中如何更好地融入青年文化。线上以公众号为基地，累计采编原创文字 50 万+；线下以五月空间和活动为载体，累计发起活动百余场。',
		},
	],
} as const;

export const facilitatorRecruitment = {
	title: '领读人招募',
	wechatArticle: {
		label: '阅读原文（微信公众号）',
		href: 'https://mp.weixin.qq.com/s/Sk5pvHIqXSQF24Ujl3006A',
	},
	application: {
		camps: [
			{ location: '贵州遵义', dates: '8.2–8.9' },
			{ location: '湖南张家界慈利县', dates: '8.10–8.17' },
			{ location: '黑龙江哈尔滨', dates: '8.3–8.10' },
			{ location: '广东中山', dates: '7.17–7.24' },
			{ location: '贵州贵阳', dates: '7.24–7.31' },
		],
		qualification: '大学本科在读及以上',
		deadline: '2026年5月17日 23:59（GMT+8）',
		mode: '分营地招募领读人，各营地人数录完即止',
		support:
			'知合将为所有领读人在知合圆桌期间提供住宿并购买保险，并为有特殊经济困难的领读人提供一定小额补助',
		method: '扫码填写问卷报名（详见微信公众号原文）',
	},
	roles: [
		{
			title: '课程设置者',
			intro:
				'每一位领读人将根据自己的专长与兴趣，自由地设计并打磨好一门围绕着阅读、思辨与讨论展开的课程。在知合圆桌，我们期待的课程具有以下几个特点：',
			points: [
				'不是对于概论的泛泛而谈，而是从具体问题出发去串联课程',
				'可以聚焦于通识教育的某个专业领域，或者是横跨多个领域的融合',
				'核心问题能容纳多样化、多向度、开放性的诠释，而非只有标准答案',
			],
		},
		{
			title: '讨论带领者',
			intro:
				'共读人的表达、探究与思维成长是知合圆桌开展的核心目的。领读人不是老师，其责任并不放在如何「讲」好一门课，而是通过组织圆桌讨论让共读人表达自己的看法，并在讨论中训练思辨能力。',
			points: [
				'提出问题',
				'总结回答',
				'继续抛出问题——这是一个不断反复的过程，也会被用于绝大多数的课程讨论环节',
			],
		},
		{
			title: '知识传播者',
			intro:
				'在每个阶段的讨论结束之后，领读人可以站在更「专业」的学术角度去分享一些已有知识。比如：在讨论完什么是权利之后，一位政治学的领读人可以分享霍布斯、洛克与卢梭对于权利和国家的理解。这些分享应在讨论之后发出，做学术性与知识性更强的总结与归纳。领读人可以在圆桌的任何时间回应共读人提出的问题。',
			points: [],
		},
	],
	process: [
		{
			step: '报名',
			timing: '截止日期前（5月17日 23:59，GMT+8）',
			description:
				'通过微信公众号原文中的二维码或链接填写报名问卷。问卷核心内容是你所设计的课程大纲，不必非常详细，但需清晰展示：',
			points: [
				'课程的核心议题、基本逻辑脉络与框架',
				'为期 7 天的课程中，每天分别要讨论的问题（包括总问题与 2–3 个子问题）',
				'体现你个性设计的其他教学环节',
				'相关阅读材料',
			],
			note: '每日授课 + 阅读总时长为 2.5 小时，其中阅读材料建议用时在 45 分钟以内。',
		},
		{
			step: '面试',
			timing: '报名后的 1–14 天内',
			description:
				'若你在问卷中展现出与知合圆桌理念的契合，并体现出较为扎实的基本学科素养，我们将发起一轮线上面试，主要包括：',
			points: [
				'一场 20 分钟左右的模拟圆桌，体现你设计环节与回应讨论问题的能力',
				'知合课程组成员进一步提问',
			],
			note: '知合承诺，参与面试的工作人员将不会提前得知你的年龄、性别、院校背景和工作经历，也不会在面试现场主动询问这些信息。面试评估维度包括课纲设计、学术能力与讨论组织能力。',
		},
		{
			step: '录取',
			timing: '最晚不超过报名截止后 10 天内',
			description: '所有报名者将会得知是否被录取；若被录取，请及时确认是否接受录取。',
			points: [],
		},
		{
			step: '培训',
			timing: '夏季读书会开展前（5–6 月）',
			description:
				'所有领读人将接受时长约 8–10 小时的教学培训和营地指导，敬请留意相关通知。',
			points: [],
		},
	],
	sampleSyllabi: {
		label: '知合过往模范课纲',
		href: 'https://pan.baidu.com/s/1Ri-Ituj96Hm7nVCj3herXQ?pwd=9769',
		password: '9769',
	},
	assistantNote:
		'如有任何问题，请添加知合 Nexus 小助手微信，并备注「圆桌领读人咨询」。',
} as const;

export const joinPaths = [
	{
		title: '成为共读人',
		description: '参与暑期或冬季读书营，在圆桌中阅读、讨论与思辨。共读人以本地高中生、低年级大学生为主。',
		highlight: {
			text: '知合2026暑期营地读书营正在进行',
			href: 'https://mp.weixin.qq.com/s/YdySkm8dm79CfKzls2mJ0w',
		},
	},
	{
		title: '成为领读人',
		description: '经过招募、面试与培训，设计并带领一门原创圆桌课程。2025 暑期申请数 60+，录取率约 50%。',
		highlight: {
			text: '查看 2026 暑期领读人招募详情',
			href: '/join/facilitator/',
		},
	},
	{
		title: '加入工作团队',
		description: '以志愿形式参与课程组、统筹组、品牌组或城市合伙人团队，支持营地筹备与落地。',
		highlight: {
			text: '知合为纯志愿团队，如有兴趣，欢迎将简历投至',
			email: 'alexisprotopia@gmail.com',
		},
	},
] as const;
