'use client';

import dynamic from 'next/dynamic';
import { useDeferredMount } from '@/hooks/use-deferred-mount';

const EasterEgg = dynamic(() => import('@/components/EasterEgg'), {
	ssr: false,
});
const CommandMenu = dynamic(() => import('@/components/CommandMenu'), {
	ssr: false,
});

/**
 * Wrapper for interactive-only components that don't need SSR.
 * Their chunks are fetched after the page is idle (or on first interaction)
 * so they stay out of the initial JS burst.
 */
export default function ClientShell() {
	const ready = useDeferredMount();

	if (!ready) return null;

	return (
		<>
			<EasterEgg />
			<CommandMenu />
		</>
	);
}
