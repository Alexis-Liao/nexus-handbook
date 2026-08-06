import type { CampMemoryArticle, CampMemoryListItem } from './types';
import { guiyangMemory } from './guiyang';
import { harbinMemory } from './harbin';
import { yunchengMemory } from './yuncheng';
import { zunyiMemory } from './zunyi';

const articles: Record<string, CampMemoryArticle> = {
	guiyang: guiyangMemory,
	zunyi: zunyiMemory,
	harbin: harbinMemory,
	yuncheng: yunchengMemory,
};

function toListItem(article: CampMemoryArticle): CampMemoryListItem {
	const title =
		article.format === 'essay'
			? `${article.location} · ${article.subtitle}`
			: `${article.location}营地回顾`;

	return {
		slug: article.slug,
		location: article.location,
		title,
		subtitle: article.title,
		excerpt: article.excerpt,
		coverImage: article.coverImage,
		date: article.date,
		kind: article.format === 'essay' ? 'essay' : 'review',
	};
}

export const campMemories: CampMemoryListItem[] = [
	yunchengMemory,
	harbinMemory,
	zunyiMemory,
	guiyangMemory,
].map(toListItem);

export function getCampMemory(slug: string): CampMemoryArticle | undefined {
	return articles[slug];
}

export function getAllCampMemorySlugs(): string[] {
	return Object.keys(articles);
}
