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

		// Reset any leftover animation state
		el.classList.remove('page-enter');
		el.style.animation = 'none';

		// Clip overflow so Suspense fallback→content swaps don't cause a
		// visible "jump" while the slide animation is still running.
		el.style.overflow = 'hidden';

		// Promote to its own compositing layer for a smoother animation
		el.style.willChange = 'transform, opacity';

		// Defer the animation start by one frame so the browser has time
		// to paint the initial content (including Suspense fallbacks).
		// Without this, the Suspense swap happens *during* the slide-in,
		// causing the glitchy layout shift you see on Projects → Blog.
		const rafId = requestAnimationFrame(() => {
			// Force a reflow so the browser acknowledges the reset above
			// before we re-enable the animation.
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			el.offsetHeight;
			el.style.animation = '';
			el.classList.add('page-enter');
		});

		const handleEnd = () => {
			el.classList.remove('page-enter');
			el.style.overflow = '';
			el.style.willChange = '';
		};

		el.addEventListener('animationend', handleEnd, { once: true });

		return () => {
			cancelAnimationFrame(rafId);
			el.removeEventListener('animationend', handleEnd);
			// Clean up in case the component unmounts before animationend fires
			el.style.overflow = '';
			el.style.willChange = '';
		};
	}, [currentIndex, pathname]);

	const isAdmin = pathname?.startsWith('/admin');

	return (
		<div
			ref={containerRef}
			className={isAdmin ? 'w-full h-full flex flex-col flex-1 min-h-0' : 'w-full'}
			style={
				{
					'--page-dir': direction,
				} as React.CSSProperties
			}>
			{children}
		</div>
	);
}

