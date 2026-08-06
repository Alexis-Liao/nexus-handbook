export type MemoryImage = {
	src?: string;
	alt: string;
	caption?: string;
};

export type MemoryReview = {
	name: string;
	role?: string;
	course?: string;
	paragraphs: string[];
	image?: MemoryImage;
	note?: string;
};

export type EssayBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'quote'; paragraphs: string[]; attribution?: string }
	| { type: 'dialogue'; lines: string[] }
	| { type: 'image'; image: MemoryImage }
	| { type: 'divider' };

export type CampMemoryAuthor = {
	name: string;
	role?: string;
	course?: string;
	bio?: string[];
	tagline?: string;
	image?: MemoryImage;
};

export type CampMemoryArticle = {
	slug: string;
	location: string;
	title: string;
	subtitle: string;
	excerpt: string;
	coverImage?: string;
	date: string;
	format?: 'review' | 'essay';
	introTitle: string;
	intro: string[];
	openingGallery: MemoryImage[];
	facilitatorReviews: MemoryReview[];
	participantReviews: MemoryReview[];
	partnerReviews: MemoryReview[];
	closing: string[];
	closingGallery: MemoryImage[];
	extra: string[];
	resources?: { label: string; href: string; code?: string }[];
	credits: string;
	essayBlocks?: EssayBlock[];
	author?: CampMemoryAuthor;
	byline?: string;
};

export type CampMemoryListItem = {
	slug: string;
	location: string;
	title: string;
	subtitle: string;
	excerpt: string;
	coverImage?: string;
	date: string;
	kind: 'review' | 'essay';
};

export type LocalizedCampMemoryArticle = { zh: CampMemoryArticle; en: CampMemoryArticle };
