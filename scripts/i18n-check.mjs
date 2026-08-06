#!/usr/bin/env node
/**
 * Build-time i18n parity check for site data, UI strings, and camp memories.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let failed = false;

function fail(message) {
	console.error(`i18n-check: ${message}`);
	failed = true;
}

function collectKeys(value, prefix = '') {
	if (value === null || typeof value !== 'object') return [prefix];
	if (Array.isArray(value)) {
		return value.flatMap((item, index) => collectKeys(item, `${prefix}[${index}]`));
	}
	return Object.entries(value).flatMap(([key, child]) => {
		const next = prefix ? `${prefix}.${key}` : key;
		if (child !== null && typeof child === 'object' && !Array.isArray(child)) {
			return collectKeys(child, next);
		}
		return [next];
	});
}

function compareKeySets(label, a, b) {
	const keysA = new Set(collectKeys(a));
	const keysB = new Set(collectKeys(b));

	for (const key of keysA) {
		if (!keysB.has(key)) fail(`${label}: missing EN key "${key}"`);
	}
	for (const key of keysB) {
		if (!keysA.has(key)) fail(`${label}: missing ZH key "${key}"`);
	}
}

async function loadSiteModule(name) {
	const path = join(root, 'src/data/siteData', `${name}.ts`);
	if (!existsSync(path)) {
		fail(`missing site module ${name}.ts`);
		return null;
	}
	return import(pathToFileURL(path).href);
}

async function checkSiteData() {
	const zh = await loadSiteModule('zh');
	const en = await loadSiteModule('en');
	if (!zh || !en) return;

	const zhKeys = Object.keys(zh).filter((k) => k !== 'default');
	const enKeys = Object.keys(en).filter((k) => k !== 'default');

	for (const key of zhKeys) {
		if (!enKeys.includes(key)) fail(`site/en.ts: missing export "${key}"`);
	}
	for (const key of enKeys) {
		if (!zhKeys.includes(key)) fail(`site/zh.ts: missing export "${key}"`);
	}

	for (const key of zhKeys) {
		if (enKeys.includes(key)) {
			compareKeySets(`site.${key}`, zh[key], en[key]);
		}
	}
}

async function checkUi() {
	const uiPath = join(root, 'src/i18n/ui.ts');
	if (!existsSync(uiPath)) {
		fail('missing src/i18n/ui.ts');
		return;
	}
	const mod = await import(pathToFileURL(uiPath).href);
	if (!mod.ui?.zh || !mod.ui?.en) {
		fail('ui.ts must export ui.zh and ui.en');
		return;
	}
	compareKeySets('ui', mod.ui.zh, mod.ui.en);
}

async function checkCampMemories() {
	const dir = join(root, 'src/data/campMemories');
	const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && !['index.ts', 'types.ts'].includes(f));

	for (const file of files) {
		const mod = await import(pathToFileURL(join(dir, file)).href);
		const exportName = Object.keys(mod).find((k) => k.endsWith('Memory'));
		if (!exportName) continue;
		const article = mod[exportName];
		if (!article?.zh || !article?.en) {
			fail(`${file}: must export { zh, en } localized article`);
			continue;
		}
		compareKeySets(`${file}`, article.zh, article.en);
	}
}

function checkRequiredFiles() {
	const required = [
		'src/i18n/locales.ts',
		'src/i18n/utils.ts',
		'src/i18n/ui.ts',
		'src/data/siteData/zh.ts',
		'src/data/siteData/en.ts',
		'src/pages/en/index.astro',
	];
	for (const rel of required) {
		if (!existsSync(join(root, rel))) fail(`missing required file ${rel}`);
	}
}

checkRequiredFiles();
await checkSiteData();
await checkUi();
await checkCampMemories();

if (failed) {
	process.exit(1);
}

console.log('i18n-check: all locale pairs are structurally aligned.');
