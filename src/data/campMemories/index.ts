import type { CampMemoryArticle, CampMemoryListItem, LocalizedCampMemoryArticle } from './types';
import type { Locale } from '../../i18n/locales';
import { guiyangMemory } from './guiyang';
import { harbinMemory } from './harbin';
import { yunchengMemory } from './yuncheng';
import { zunyiMemory } from './zunyi';

const localizedArticles: Record<string, LocalizedCampMemoryArticle> = {
	guiyang: guiyangMemory,
	zunyi: zunyiMemory,
	harbin: harbinMemory,
	yuncheng: yunchengMemory,
};

function toListItem(article: CampMemoryArticle, locale: Locale): CampMemoryListItem {
	const title =
		article.format === 'essay'
			? `${article.location} · ${article.subtitle}`
			: locale === 'en'
				? `${article.location} Camp Recap`
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

export function getCampMemories(locale: Locale): CampMemoryListItem[] {
	return [yunchengMemory, harbinMemory, zunyiMemory, guiyangMemory].map((article) =>
		toListItem(article[locale], locale),
	);
}

export function getCampMemory(slug: string, locale: Locale): CampMemoryArticle | undefined {
	return localizedArticles[slug]?.[locale];
}

export function getAllCampMemorySlugs(): string[] {
	return Object.keys(localizedArticles);
}
