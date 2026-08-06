export const site = {
	name: 'Zhihe NEXUS',
	motto: 'Investigate things|Unite knowledge and action',
	tagline: 'A heart like flowing water, a flame like steady light',
	description:
		'We build communities for critical thinking, discussion, and collaborative learning among young people facing unequal access to education in China\'s cultural plains.',
	vision: 'More cities, more possibilities for education',
	yearFounded: 2024,
} as const;

export const contact = {
	email: 'alexisprotopia@gmail.com',
	wechatArticle: {
		label: '2026 Summer Reading Camp Recruitment',
		href: 'https://mp.weixin.qq.com/s/YdySkm8dm79CfKzls2mJ0w',
	},
} as const;

export const socialLinks = [
	{
		id: 'wechat',
		label: 'WeChat Official Account',
		name: '知合Nexus',
		qrcode: '/images/social/wechat-qrcode.png',
	},
	{
		id: 'xiaohongshu',
		label: 'Xiaohongshu',
		name: 'Nexus1313257414',
	},
] as const;

export const footerColumns = [
	{
		title: 'Programs',
		links: [
			{ label: 'Reading Camps Overview', href: '/programs/' },
			{ label: 'Summer Reading Camp', href: '/programs/' },
			{ label: 'Winter Reading Salon', href: '/programs/' },
			{ label: 'Online Events', href: '/programs/' },
		],
	},
	{
		title: 'About Us',
		links: [
			{ label: 'About Zhihe', href: '/about/' },
			{ label: 'Philosophy & Methods', href: '/philosophy/' },
			{ label: 'Our Team', href: '/team/' },
		],
	},
	{
		title: 'Get Involved',
		links: [
			{ label: 'Ways to Join', href: '/join/' },
			{ label: 'Become a Participant', href: '/join/' },
			{ label: 'Facilitator Recruitment', href: '/join/facilitator/' },
			{ label: 'Join the Team', href: '/join/' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ label: 'Facilitator Handbook (ZH)', href: '/handbook/' },
			{ label: 'Facilitator Recruitment', href: '/join/facilitator/' },
			{
				label: '2026 Summer Recruitment',
				href: 'https://mp.weixin.qq.com/s/YdySkm8dm79CfKzls2mJ0w',
				external: true,
			},
		],
	},
] as const;

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Philosophy', href: '/philosophy/' },
	{ label: 'Programs', href: '/programs/' },
	{ label: 'Team', href: '/team/' },
	{ label: 'Join', href: '/join/' },
	{ label: 'Handbook (ZH)', href: '/handbook/' },
] as const;

export const leadership = [
	{
		name: '刘百川',
		role: 'Board Chair',
		school: 'University of Oxford / Royal Holloway · Geography',
		bio: 'Baichuan studied geography in the UK for five years—a wayfinding enthusiast who loves hiking, skiing, and gin. Their research focuses on population mobility and infrastructure development in Himalayan border regions. They enjoy the music of Li Zhi, the films of Lou Ye, and FC Barcelona.',
		photo: '/images/team/liu-baichuan.jpg',
	},
	{
		name: '廖智立',
		role: 'Vice Chair / Brand',
		school: 'Nankai University · Sociology',
		bio: 'Hopes to always do independent research on communities and self-organization, aspiring to visit every country on Earth to connect different kinds of communities—working toward a contemporary Whole Earth Catalog.',
		photo: '/images/team/liao-zhili.png',
	},
	{
		name: '张雨馨',
		role: 'Vice Chair / Curriculum',
		school: 'Renmin University of China · Literature',
		bio: 'Former nine-to-six worker in Beijing\'s innovative education scene. A gap year ambassador.',
		photo: '/images/team/zhang-yuxin.png',
	},
	{
		name: '赵丽姣',
		role: 'Vice Chair / Operations',
		school: 'Communication University of China · Global Communication & International Relations',
		bio: 'A curious Leo who loves exploring new things, nature, and crowds—sometimes quiet, sometimes active. Also interested in popular culture, which they are currently researching.',
		photo: '/images/team/zhao-lijiao.jpg',
	},
	{
		name: '冯晓萱',
		role: 'Board Member',
		school: 'University of Macau · MA in Linguistics',
		bio: 'MA in Linguistics, University of Macau',
	},
] as const;

export const teamGroups = [
	{
		name: 'Curriculum Team',
		members: [
			{ name: '赵佳莹' },
			{
				name: '刘昊明',
				school: 'University of Oxford, History · Macalester College, Economics & Applied Mathematics',
				bio: 'From Nanjing—where the north vs. south roast duck debate is non-negotiable. PhD candidate in British intellectual and cultural history (18th–19th c.), researching the formation of political economy in early 19th-century Britain; lately also reading university history. Interested in musicology and critical theory. Wants to write a fugue. Zhihe\'s one and only team cat (hands on hips).',
				photo: '/images/team/liu-haoming.jpg',
			},
			{ name: '施怡阳' },
			{ name: '杨暄婷' },
			{
				name: '张芝安',
				school: 'Sun Yat-sen University · Philosophy / Classics',
				bio: 'Sixth year in the UK, currently a second-year PhD in Western classical studies, working with the Greco-Roman world from over two millennia ago. Old-fashioned in manner, avant-garde in thought; loves observing people, hiking, cooking for wellness, panda videos, all kinds of ball games—the next thing to learn is surfing.',
				photo: '/images/team/zhang-zhian.png',
			},
			{ name: '王翰乾' },
			{ name: '易靓晶' },
		],
	},
	{
		name: 'Operations Team',
		members: [
			{
				name: '杨培显',
				school: 'Nankai University · World History',
				bio: 'Studied world history at Nankai for four years—academically passable but well-read in miscellany. A whiskey and craft beer enthusiast who worked as a bartender, loves chatting over drinks with friends, and is trying their hand at brewing and food blogging.',
				photo: '/images/team/yang-peixian.jpg',
			},
		],
	},
	{
		name: 'Brand Team',
		members: [{ name: '马驰' }, { name: '杨海瑜' }],
	},
] as const;

export const liberalEducation = {
	intro:
		'As society changes rapidly, students need independent thinking and critical skills more than ever—liberal education responds to that need. By spanning multiple disciplines and using small-group discussion, it helps students develop sound character, encounter different cultures and ways of thinking, and build the capacities society demands today.',
	pillars: [
		{
			title: 'Historical Roots',
			text: 'From the Six Arts and Confucian education in the East to the classical polis in the West, the liberal tradition runs deep.',
		},
		{
			title: 'Modern Practice',
			text: 'Brazilian educator Paulo Freire wrote in Pedagogy of the Oppressed that real learning happens in dialogue, not one-way instruction. Zhihe roundtables replace the authority structure of traditional classrooms with equal discussion—facilitators and participants sit together, awakening critical awareness through questions and responses.',
		},
		{
			title: 'Developing People',
			text: 'Centered on critical thinking and whole-person growth, responding to a fast-changing society.',
		},
	],
} as const;

export const roundtable = {
	philosophy:
		'Compared with traditional classrooms, the roundtable—from its most original spatial meaning—embodies equality, dialogue, and seeing one another as fully as possible. One of Zhihe\'s missions is to shift the power relation between teacher and student, especially by foregrounding participants\' thinking, expression, and growth.',
	practice:
		'This value must be lived in every session by its direct practitioners—facilitators and participants together.',
	features: [
		'Facilitators and participants use books, essays, and other media as shared material',
		'Full reading programs designed for 5–10 days',
		'Small roundtables under 15 people, 2–3 hours daily',
		'Participants are mainly local high school students and early-year undergraduates',
	],
} as const;

export const campPhotos = [
	{
		src: '/images/camps/zunyi-2025-opening.png',
		alt: '2025 Zunyi summer camp opening ceremony group photo',
		caption: '2025 Zunyi Summer Camp · Opening Ceremony',
		tag: 'Summer Reading Camp',
	},
	{
		src: '/images/camps/camp-group-2025.png',
		alt: 'Zhihe reading camp participants and facilitators group photo',
		caption: 'Roundtable learning and closing moments during camp',
		tag: 'Camp Life',
	},
] as const;

export const programs = [
	{
		id: 'summer',
		title: 'Summer Reading Camp',
		tag: 'Core Program',
		description:
			'Zhihe NEXUS\'s flagship program. Facilitators stay in a city for about ten days of summer camp. After training, each designs an original course centered on text reading and discussion, with two to three hours of class daily.',
		details: [
			'Beyond daily classes: debates, drama and writing salons, facilitator sharing, field research, and more',
			'About 8 facilitators; 50–100 students, mostly recent high school graduates',
		],
	},
	{
		id: 'winter',
		title: 'Winter Reading Salon',
		tag: 'Core Program',
		description:
			'A condensed reading camp during winter break, usually three to five days. Each facilitator leads one 2–3 hour discussion session, closer in form to a reading group or salon.',
		details: [],
	},
	{
		id: 'online',
		title: 'Online Events',
		tag: 'Year-round',
		description:
			'Zhihe explores online formats to fill the gap outside summer and winter breaks. We host one public lecture or roundtable discussion each month on a specific theme, led by past facilitators.',
		details: [],
	},
] as const;

export const timeline = [
	{ period: 'Mar – May', label: 'Summer Camp · Recruitment & Interviews' },
	{ period: 'May – Jul', label: 'Summer Camp · Training' },
	{ period: 'Jul – Aug', label: 'Summer Camp · Camp Period' },
	{ period: 'Nov – Dec', label: 'Winter Salon · Recruitment & Interviews' },
	{ period: 'Dec', label: 'Winter Salon · Training' },
	{ period: 'Jan – Feb', label: 'Winter Salon · Camp Period' },
] as const;

export const sampleCourses = [
	{
		title: 'Geography of War: Feminism & Critical Theory',
		leader: 'Senior Liu',
		leaderBio: 'MSc Economic & Social History, University of Oxford',
		description:
			'Understanding war through critical geography, using feminist, postcolonial, and post-structural theory to examine the social impact of war, militarism, weapons, and military architecture.',
	},
	{
		title: 'Animal Ethics',
		leader: 'Lin Lixiao',
		leaderBio: '',
		description:
			'Exploring animal ethics and questioning anthropocentrism—do factory farming, animal testing, habitat destruction, and neglect of companion animals constitute injustice?',
	},
	{
		title: '(Non-human) Animals and Justice',
		leader: '刘百川',
		leaderBio: 'Board Chair',
		description:
			'(Non-human) animals live in a world dominated by humans. Together we explore whether animals\' suffering is unjust and what individuals can do.',
	},
] as const;

export const culturalPlain = {
	title: 'Cultural Plains',
	definition:
		'“Cultural plains” refers to urban regions across China where cultural development lags behind economic growth. Compared with “cultural highlands,” the gap shows especially in cultural capital—arts, science, museums, libraries, theaters, and other infrastructure.',
	context:
		'These regions often correlate with uneven educational resources. Because quality education and cultural capital concentrate in “highlands,” residents of cultural plains struggle to acquire formal institutional cultural capital (such as advanced degrees). Cultural plains are not only places poor in cultural resources geographically—they symbolize a socially disadvantaged position in cultural capital.',
	scope:
		'Geographically, cultural plains are widespread in industrial cities, third- and fourth-tier cities, and some county towns in China. Migrant communities in first-tier cities are also an important presence.',
} as const;

export const campLocations = [
	'Chongqing',
	'Guiyang',
	'Yuncheng',
	'Harbin',
	'Zunyi',
	'Jingchuan',
	'Zhongshan',
	'Linhai',
	'Cili',
] as const;

export const testimonials = [
	{
		quote:
			'Every day at camp was fulfilling. Having a platform to think and then speak—to be heard by others, or to hear yourself—that feeling can only be called beautiful.',
		author: 'Student Li',
		role: 'Participant',
	},
	{
		quote:
			'Past Zhihe experiences led me to hope it might heal me—but it gave me far more love and happiness than I expected, and as before, it continues to shape me deeply and lastingly.',
		author: 'Student Zhou',
		role: 'Participant',
	},
	{
		quote:
			'Talking about the Republic and Nietzsche with a few people amid breeze and birdsong, discussing social construction and oral history, listening to excellent seniors on morality, philosophy, life and expression—nothing is more captivating than minds meeting in collision and fusion.',
		author: 'Student Zou',
		role: 'Participant',
	},
] as const;

export const advantages = [
	{
		title: 'Nonprofit Commitment',
		text: 'At in-person camps, Zhihe NEXUS has never charged tuition, subsidizing necessary costs through annual sponsorship where possible. Even if scale grows and cost recovery becomes necessary, our nonprofit nature will not change.',
	},
	{
		title: 'Rigorous Selection & Training',
		text: 'Facilitators pass multiple rounds of strict screening and training each year. We receive hundreds of applications; final acceptance is about 50%, with an average of 15 hours of training to ensure course quality.',
	},
	{
		title: 'Diverse Facilitator Backgrounds',
		text: 'Zhihe NEXUS brings together facilitators from overseas and domestic universities. Those abroad offer different perspectives; those from top domestic schools understand the educational needs of students outside first-tier cities.',
	},
] as const;

export const partners = {
	note: 'Organizations that have partnered with Zhihe NEXUS in recent years (partial list)',
	logos: '/images/partners/partner-logos.png',
	cases: [
		{
			title: 'Zhihe × May · Collaborative Reading Camp',
			date: '2025.7',
			description:
				'May, founded in 2015, is a local cultural and creative organization based in the small city of Linhai, exploring how youth culture can integrate into organic old-town renewal. Online via WeChat with 500,000+ words of original writing; offline through May Space and events with 100+ gatherings.',
		},
		{
			title: 'Zhihe × Ledu Reading Club · Zunyi Reading Camp',
			date: '2025.8',
			description:
				'Partnered with Ledu Reading Club to run a summer reading camp in Zunyi, Guizhou, using local reading communities and venues to build spaces for critical thinking and collaborative learning among youth in cultural plains.',
		},
		{
			title: 'Zhihe × Li Sichen Study Abroad · Guiyang Reading Camp',
			date: '2025.7',
			description:
				'Partnered with Li Sichen Study Abroad to host a Zhihe reading camp in Guiyang, connecting local education networks with youth co-learning and bringing roundtable discussion and liberal reading to more cities in the southwest.',
		},
		{
			title: 'Zhihe × Zhijian · Harbin Reading Camp',
			date: '2025.8',
			description:
				'Partnered with Zhijian for a summer reading camp in Harbin, bringing Zhihe facilitator training and roundtable methods to a northeastern cultural plains city and expanding the co-learning network in the north.',
		},
		{
			title: 'Zhihe × Zhuzuo Wuding · Cili Reading Camp',
			date: '2026.8',
			description:
				'Partnered with Zhuzuo Wuding for a reading camp in Cili County, Zhangjiajie, Hunan—continuing to explore youth critical discussion and co-learning communities at the county level.',
		},
	],
} as const;

export const facilitatorRecruitment = {
	title: 'Facilitator Recruitment',
	wechatArticle: {
		label: 'Read full article (WeChat, Chinese)',
		href: 'https://mp.weixin.qq.com/s/Sk5pvHIqXSQF24Ujl3006A',
	},
	application: {
		camps: [
			{ location: 'Zunyi, Guizhou', dates: 'Aug 2–9' },
			{ location: 'Cili County, Zhangjiajie, Hunan', dates: 'Aug 10–17' },
			{ location: 'Harbin, Heilongjiang', dates: 'Aug 3–10' },
			{ location: 'Zhongshan, Guangdong', dates: 'Jul 17–24' },
			{ location: 'Guiyang, Guizhou', dates: 'Jul 24–31' },
		],
		qualification: 'Currently enrolled in or graduated from undergraduate programs',
		deadline: 'May 17, 2026, 23:59 (GMT+8)',
		mode: 'Recruitment by camp; each camp closes when filled',
		support:
			'Zhihe provides accommodation and insurance for all facilitators during roundtables, plus modest subsidies for those with special financial need',
		method: 'Apply via QR code questionnaire in the WeChat article (Chinese)',
	},
	roles: [
		{
			title: 'Curriculum Designer',
			intro:
				'Each facilitator freely designs and refines a course centered on reading, critical thinking, and discussion based on their expertise and interests. We expect courses with these qualities:',
			points: [
				'Not broad surveys, but courses woven from specific questions',
				'May focus on one field of general education or blend several',
				'Core questions allow diverse, multi-dimensional, open interpretations—not single correct answers',
			],
		},
		{
			title: 'Discussion Leader',
			intro:
				'Participants\' expression, inquiry, and intellectual growth are the core purpose of Zhihe roundtables. Facilitators are not lecturers; their job is not to “teach well” but to organize discussion so participants express their views and train critical thinking.',
			points: [
				'Ask questions',
				'Summarize responses',
				'Ask follow-up questions—a cycle used in most discussion segments',
			],
		},
		{
			title: 'Knowledge Sharer',
			intro:
				'After each discussion phase, facilitators may share established knowledge from a more “professional” academic angle. For example, after discussing rights, a political science facilitator might share Hobbes, Locke, and Rousseau on rights and the state. Such sharing comes after discussion, as academic synthesis. Facilitators may respond to participants\' questions at any time.',
			points: [],
		},
	],
	process: [
		{
			step: 'Application',
			timing: 'Before deadline (May 17, 2026, 23:59 GMT+8)',
			description:
				'Complete the application questionnaire via QR code or link in the WeChat article. The core content is your course outline—not necessarily detailed, but clearly showing:',
			points: [
				'Core theme, logic, and framework of the course',
				'Daily discussion questions for the 7-day program (main question plus 2–3 sub-questions)',
				'Other teaching segments that reflect your personal design',
				'Related reading materials',
			],
			note: 'Daily teaching + reading totals 2.5 hours; suggested reading time within 45 minutes.',
		},
		{
			step: 'Interview',
			timing: '1–14 days after application',
			description:
				'If your application shows alignment with Zhihe roundtable values and solid basic disciplinary literacy, we will invite you to an online interview including:',
			points: [
				'A ~20-minute simulated roundtable demonstrating your designed segments and ability to respond to discussion',
				'Further questions from Zhihe curriculum team members',
			],
			note: 'Zhihe commits that interview staff will not know your age, gender, school background, or work history in advance, and will not actively ask for this information during the interview. Evaluation covers syllabus design, academic ability, and discussion facilitation.',
		},
		{
			step: 'Admission',
			timing: 'No later than 10 days after application deadline',
			description: 'All applicants will be notified of admission; if admitted, please confirm promptly.',
			points: [],
		},
		{
			step: 'Training',
			timing: 'Before summer reading camp (May–June)',
			description:
				'All facilitators receive about 8–10 hours of teaching training and camp guidance. Please watch for notifications.',
			points: [],
		},
	],
	sampleSyllabi: {
		label: 'Past exemplary Zhihe syllabi',
		href: 'https://pan.baidu.com/s/1Ri-Ituj96Hm7nVCj3herXQ?pwd=9769',
		password: '9769',
	},
	assistantNote:
		'For questions, add Zhihe Nexus assistant on WeChat with note “Roundtable Facilitator Inquiry”.',
} as const;

export const joinPaths = [
	{
		title: 'Become a Participant',
		description:
			'Join summer or winter reading camps for roundtable reading, discussion, and critical thinking. Participants are mainly local high school students and early-year undergraduates.',
		highlight: {
			text: 'Zhihe 2026 Summer Reading Camp is now open',
			href: 'https://mp.weixin.qq.com/s/YdySkm8dm79CfKzls2mJ0w',
		},
	},
	{
		title: 'Become a Facilitator',
		description:
			'After recruitment, interview, and training, design and lead an original roundtable course. 2025 summer: 60+ applications, ~50% acceptance.',
		highlight: {
			text: 'View 2026 Summer Facilitator Recruitment',
			href: '/join/facilitator/',
		},
	},
	{
		title: 'Join the Working Team',
		description:
			'Volunteer with the curriculum, operations, brand, or city partner teams to support camp preparation and delivery.',
		highlight: {
			text: 'Zhihe is an all-volunteer team. If interested, send your CV to',
			email: 'alexisprotopia@gmail.com',
		},
	},
] as const;
