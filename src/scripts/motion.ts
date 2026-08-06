import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power2.out';
const REVEAL = { y: 32, duration: 0.8, ease: EASE };
const STAGGER = 0.1;

function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealTrigger(trigger: Element, start = 'top 80%') {
	return {
		trigger,
		start,
		once: true,
	};
}

function setVisible(selectors: string) {
	gsap.set(selectors, { opacity: 1, y: 0, scale: 1, clipPath: 'none', clearProps: 'transform,filter' });
}

function killMotion() {
	ScrollTrigger.getAll().forEach((t) => t.kill());
}

function initScrollReveal() {
	document.querySelectorAll('[data-reveal-block]').forEach((block) => {
		const items = block.querySelectorAll('[data-reveal-item]');
		if (!items.length) return;

		gsap.set(items, { opacity: 0, y: REVEAL.y });
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

		gsap.set(children, { opacity: 0, y: REVEAL.y });
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
		gsap.set(el, { opacity: 0, y: REVEAL.y });
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
	document.querySelectorAll('[data-reveal-image]').forEach((wrap, index) => {
		const img = wrap.querySelector('img');
		gsap.set(wrap, { clipPath: 'inset(0 0 100% 0)' });
		if (img) gsap.set(img, { scale: 1.05, opacity: 0 });

		const tl = gsap.timeline({
			scrollTrigger: revealTrigger(wrap),
			delay: index * 0.12,
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
			scrollTrigger: revealTrigger(el, 'top 85%'),
			onUpdate: () => {
				const rounded = Math.round(counter.value);
				el.textContent = `${prefix}${rounded}${suffix}`;
			},
		});
	});
}

function initParallax() {
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

export function initMotion() {
	killMotion();

	const reduced = prefersReducedMotion();
	document.documentElement.classList.toggle('motion-reduced', reduced);
	document.documentElement.classList.add('motion-ready');

	if (reduced) {
		setVisible(
			'[data-reveal-item], [data-reveal-stagger] > *, [data-reveal], [data-reveal-image], [data-reveal-image] img',
		);
		return;
	}

	initScrollReveal();
	initImageReveal();
	initStatCount();
	initParallax();
	initNavScroll();
	ScrollTrigger.refresh();
}
