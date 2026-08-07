import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power2.out';
const REVEAL = { y: 32, duration: 0.8, ease: EASE };
const STAGGER = 0.1;

const REVEAL_TARGETS =
	'[data-reveal-item], [data-reveal-stagger] > *, [data-reveal], [data-reveal-image], [data-reveal-image] img';

function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealTrigger(trigger: Element, start = 'top 85%') {
	return {
		trigger,
		start,
		once: true,
		invalidateOnRefresh: true,
	};
}

function setVisible(selectors: string) {
	gsap.set(selectors, { opacity: 1, y: 0, scale: 1, clipPath: 'none', clearProps: 'transform,filter' });
}

let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

function killMotion() {
	if (fallbackTimer) {
		window.clearTimeout(fallbackTimer);
		fallbackTimer = undefined;
	}

	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	gsap.killTweensOf(REVEAL_TARGETS);
}

function primeRevealTargets() {
	document.querySelectorAll<HTMLElement>('[data-reveal-item], [data-reveal]').forEach((el) => {
		gsap.set(el, { opacity: 0, y: REVEAL.y });
	});

	document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
		gsap.set(group.children, { opacity: 0, y: REVEAL.y });
	});

	document.querySelectorAll<HTMLElement>('[data-reveal-image]').forEach((wrap) => {
		const img = wrap.querySelector('img');
		gsap.set(wrap, { clipPath: 'inset(0 0 100% 0)' });
		if (img) gsap.set(img, { scale: 1.05, opacity: 0 });
	});
}

function initScrollReveal() {
	document.querySelectorAll('[data-reveal-block]').forEach((block) => {
		const items = block.querySelectorAll(':scope > [data-reveal-item]');
		if (!items.length) return;

		gsap.to(items, {
			opacity: 1,
			y: 0,
			duration: REVEAL.duration,
			ease: REVEAL.ease,
			stagger: STAGGER,
			scrollTrigger: revealTrigger(block),
		});
	});

	document.querySelectorAll('[data-reveal-stagger]').forEach((group) => {
		const children = group.children;
		if (!children.length) return;

		gsap.to(children, {
			opacity: 1,
			y: 0,
			duration: REVEAL.duration,
			ease: REVEAL.ease,
			stagger: STAGGER,
			scrollTrigger: revealTrigger(group),
		});
	});

	document.querySelectorAll('[data-reveal]').forEach((el) => {
		gsap.to(el, {
			opacity: 1,
			y: 0,
			duration: REVEAL.duration,
			ease: REVEAL.ease,
			scrollTrigger: revealTrigger(el),
		});
	});
}

function initImageReveal() {
	document.querySelectorAll('[data-reveal-image]').forEach((wrap) => {
		const img = wrap.querySelector('img');

		const tl = gsap.timeline({
			scrollTrigger: revealTrigger(wrap),
		});

		tl.to(wrap, { clipPath: 'inset(0 0 0% 0)', duration: 1, ease: EASE }, 0);
		if (img) tl.to(img, { scale: 1, opacity: 1, duration: 1, ease: EASE }, 0);
	});
}

function initStatCount() {
	document.querySelectorAll('[data-count]').forEach((el) => {
		const raw = el.getAttribute('data-count') ?? el.textContent ?? '';
		const prefix = raw.match(/^[^\d.]*/)?.[0] ?? '';
		const suffix = raw.match(/[^\d.]*$/)?.[0] ?? '';
		const target = parseFloat(raw.replace(/[^\d.]/g, ''));

		if (Number.isNaN(target)) return;

		const counter = { value: 0 };
		gsap.to(counter, {
			value: target,
			duration: 1.5,
			ease: 'power1.out',
			scrollTrigger: revealTrigger(el, 'top 88%'),
			onUpdate: () => {
				const rounded = Math.round(counter.value);
				el.textContent = `${prefix}${rounded}${suffix}`;
			},
		});
	});
}

function initParallax() {
	if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

	document.querySelectorAll('[data-parallax]').forEach((el) => {
		const ratio = parseFloat(el.getAttribute('data-parallax') ?? '0.2');
		gsap.to(el, {
			y: () => window.innerHeight * ratio,
			ease: 'none',
			scrollTrigger: {
				trigger: el.closest('.nexus-hero') ?? el,
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			},
		});
	});
}

function initNavScroll() {
	const header = document.querySelector('.site-header');
	if (!header) return;

	ScrollTrigger.create({
		start: 48,
		onEnter: () => header.classList.add('site-header--scrolled'),
		onLeaveBack: () => header.classList.remove('site-header--scrolled'),
	});
}

function refreshScrollTriggers() {
	ScrollTrigger.refresh();
	requestAnimationFrame(() => {
		ScrollTrigger.refresh();
	});
}

function initRevealFallback() {
	fallbackTimer = window.setTimeout(() => {
		document
			.querySelectorAll<HTMLElement>('[data-reveal-item], [data-reveal-stagger] > *, [data-reveal]')
			.forEach((el) => {
				if (parseFloat(getComputedStyle(el).opacity) < 0.1) {
					gsap.set(el, { opacity: 1, y: 0, clearProps: 'transform' });
				}
			});

		document.querySelectorAll('[data-reveal-image]').forEach((wrap) => {
			const img = wrap.querySelector('img');
			gsap.set(wrap, { clipPath: 'none' });
			if (img) gsap.set(img, { opacity: 1, scale: 1 });
		});
	}, 2500);
}

export function initMotion() {
	killMotion();

	const reduced = prefersReducedMotion();
	document.documentElement.classList.toggle('motion-reduced', reduced);
	document.documentElement.classList.add('motion-ready');

	if (reduced) {
		setVisible(REVEAL_TARGETS);
		return;
	}

	primeRevealTargets();
	initScrollReveal();
	initImageReveal();
	initStatCount();
	initParallax();
	initNavScroll();
	initRevealFallback();
	refreshScrollTriggers();
}
