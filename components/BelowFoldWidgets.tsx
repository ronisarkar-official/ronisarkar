'use client';

import dynamic from 'next/dynamic';
import { useDeferredMount } from '@/hooks/use-deferred-mount';

const QuoteBlock = dynamic(
	() => import('@/components/QuoteBlock').then((mod) => ({ default: mod.QuoteBlock })),
	{ ssr: false }
);
const VisitorCounter = dynamic(
	() => import('@/components/VisitorCounter'),
	{ ssr: false }
);

/**
 * Below-fold interactive components lazily loaded once the browser is idle.
 * Reduces initial JS bundle and network activity for the homepage.
 */
export default function BelowFoldWidgets() {
	const ready = useDeferredMount();

	if (!ready) return null;

	return (
		<>
			<QuoteBlock />
			<div className="flex justify-center mt-6">
				<VisitorCounter />
			</div>
		</>
	);
}
