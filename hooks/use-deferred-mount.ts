'use client';

import { useEffect, useState } from 'react';

type IdleWindow = Window & {
	requestIdleCallback?: (
		callback: () => void,
		options?: { timeout: number },
	) => number;
	cancelIdleCallback?: (id: number) => void;
};

/**
 * Mounts on-demand UI (command menu, easter egg, below-the-fold widgets)
 * after the browser is idle, or immediately on the first user interaction.
 *
 * Keeps their JS chunks out of the initial load burst — they are either
 * invisible until interacted with or below the fold, so nothing the user can
 * see waits on them.
 */
export function useDeferredMount(timeoutMs = 2500): boolean {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (mounted) return;

		const w = window as IdleWindow;
		let idleId: number | undefined;

		const mount = () => setMounted(true);

		if (typeof w.requestIdleCallback === 'function') {
			idleId = w.requestIdleCallback(mount, { timeout: timeoutMs });
		} else {
			idleId = window.setTimeout(mount, timeoutMs);
		}

		const events: (keyof WindowEventMap)[] = [
			'pointerdown',
			'keydown',
			'wheel',
			'touchstart',
		];
		events.forEach((event) =>
			window.addEventListener(event, mount, { once: true, passive: true }),
		);

		return () => {
			if (idleId !== undefined) {
				if (typeof w.cancelIdleCallback === 'function') {
					w.cancelIdleCallback(idleId);
				} else {
					window.clearTimeout(idleId);
				}
			}
			events.forEach((event) => window.removeEventListener(event, mount));
		};
	}, [mounted, timeoutMs]);

	return mounted;
}
