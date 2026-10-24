import type { ImageLoaderProps } from 'next/image';

/**
 * Serve remote images straight from their own CDN pipelines instead of
 * proxying every request through `/_next/image`.
 *
 * Why: the LCP image used to wait on the Next image optimizer (fetch +
 * re-encode on a cold cache), which added seconds to "resource load
 * duration" on mobile. Both CDNs below resize/encode at the edge and set a
 * one-year cache lifetime, so this removes a network hop from the critical
 * path and fixes the "efficient cache lifetimes" insight.
 *
 * - Sanity: `?w=&q=&auto=format` (auto=format negotiates webp per browser).
 * - ImageKit: `?tr=w-,q-,f-auto`.
 * - Local files in `public/` are returned untouched.
 */
export default function imageLoader({
	src,
	width,
	quality,
}: ImageLoaderProps): string {
	const q = quality ?? 75;

	if (src.startsWith('https://cdn.sanity.io/')) {
		const url = new URL(src);
		url.searchParams.set('w', String(width));
		url.searchParams.set('q', String(q));
		url.searchParams.set('auto', 'format');
		return url.toString();
	}

	if (src.startsWith('https://ik.imagekit.io/')) {
		const url = new URL(src);
		return `${url.origin}${url.pathname}?tr=w-${width},q-${q},f-auto`;
	}

	return src;
}
