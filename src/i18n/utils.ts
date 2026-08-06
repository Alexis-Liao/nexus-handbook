import type { AstroGlobal } from 'astro';
import { defaultLocale, type Locale, locales } from './locales';
import { SITE_URL } from '../consts';

export type { Locale };

const HANDBOOK_PREFIX = '/handbook';

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export function getLocaleFromPath(pathname: string): Locale {
	if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
	return 'zh';
}

export function getLocale(astro: Pick<AstroGlobal, 'url' | 'currentLocale'>): Locale {
	if (astro.currentLocale && isLocale(astro.currentLocale)) {
		return astro.currentLocale;
	}
	return getLocaleFromPath(astro.url.pathname);
}

/** Strip locale prefix from pathname for alternate-URL mapping. */
export function stripLocalePrefix(pathname: string): string {
	if (pathname === '/en') return '/';
	if (pathname.startsWith('/en/')) {
		const rest = pathname.slice(3);
		return rest.endsWith('/') ? rest : `${rest}/`;
	}
	return pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;
}

export function localizePath(path: string, locale: Locale): string {
	if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith(HANDBOOK_PREFIX)) {
		return path;
	}

	const normalized = path.startsWith('/') ? path : `/${path}`;
	const bare = normalized === '/' ? '' : normalized.replace(/\/$/, '');

	if (locale === defaultLocale) {
		return bare === '' ? '/' : `${bare}/`;
	}

	return bare === '' ? '/en/' : `/en${bare}/`;
}

export function getAlternateUrls(pathname: string): Record<Locale, string> {
	const bare = stripLocalePrefix(pathname);
	return {
		zh: new URL(localizePath(bare, 'zh'), SITE_URL).href,
		en: new URL(localizePath(bare, 'en'), SITE_URL).href,
	};
}

export function getLogoAlt(locale: Locale): string {
	return locale === 'en' ? 'Zhihe NEXUS' : '知合 NEXUS';
}
