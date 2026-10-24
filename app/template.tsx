'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Define the order of your navbar links
const navOrder = ['/', '/projects', '/blog', '/contact'];

function getRouteIndex(path: string) {
	if (path === '/') return 0;
	// Check for exact or prefix matches (e.g., /blog/my-post)
	for (let i = 1; i < navOrder.length; i++) {
		if (path.startsWith(navOrder[i])) {
			return i;
		}
	}
	return 0; // fallback
}

// Keep track of the previous route index across remounts
let previousIndex = -1;

// The first paint must never be animated: fading the page in after hydration
// hides the LCP element until JS has run, which delays LCP (and FCP) on slow
// devices. Only client-side route changes get the slide transition.
let hasPaintedOnce = false;

export default function Template({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const currentIndex = getRouteIndex(pathname);
	const containerRef = useRef<HTMLDivElement>(null);

	// If navigating to a lower index (e.g. Projects to Home), slide from left (-1)
	// Otherwise, slide from right (1)
	const direction =
		previousIndex !== -1 && currentIndex < previousIndex ? -1 : 1;

	useEffect(() => {
		previousIndex = currentIndex;

		const el = containerRef.current;
		if (!el) return;

		if (!hasPaintedOnce) {
			hasPaintedOnce = true;
			return;
		}

		if (
			typeof el.animate !== 'function' ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		// Clip overflow so Suspense fallback→content swaps don't cause a
		// visible "jump" while the slide animation is still running.
		el.style.overflow = 'hidden';

		// Web Animations API: composited (transform/opacity only), and it needs
		// no style-flush read (the old CSS-class toggle read offsetHeight,
		// which forced a synchronous reflow on every navigation).
		const animation = el.animate(
			[
				{ opacity: 0, transform: `translateX(${direction * 20}px)` },
				{ opacity: 1, transform: 'translateX(0)' },
			],
			{
				duration: 300,
				easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
		);

		const cleanup = () => {
			el.style.overflow = '';
		};
		animation.addEventListener('finish', cleanup);
		animation.addEventListener('cancel', cleanup);

		return () => {
			animation.removeEventListener('finish', cleanup);
			animation.removeEventListener('cancel', cleanup);
			animation.cancel();
			el.style.overflow = '';
		};
	}, [currentIndex, pathname]);

	const isAdmin = pathname?.startsWith('/admin');

	return (
		<div
			ref={containerRef}
			className={isAdmin ? 'w-full h-full flex flex-col flex-1 min-h-0' : 'w-full'}>
			{children}
		</div>
	);
}
