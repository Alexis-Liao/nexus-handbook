import type { Locale } from '../../i18n/locales';
import * as zh from './zh';
import * as en from './en';

export * from './zh';

const bundles = { zh, en } as const;

export type SiteData = typeof zh;

export function getSiteData(locale: Locale): SiteData {
	return bundles[locale];
}
