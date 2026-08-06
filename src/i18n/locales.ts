export const locales = ['zh', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const localeLabels: Record<Locale, string> = {
	zh: '中文',
	en: 'English',
};

export const localeHtmlLang: Record<Locale, string> = {
	zh: 'zh-CN',
	en: 'en',
};

export const localeOgLocale: Record<Locale, string> = {
	zh: 'zh_CN',
	en: 'en_US',
};

export type Localized<T> = Record<Locale, T>;
