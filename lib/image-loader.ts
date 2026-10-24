import type { ImageLoaderProps } from 'next/image';

/**
 * Serves remote images straight from their own CDN pipelines instead of
 * proxying every request through `/_next/image`.
 *
 * Why: the LCP image used to wait on the Next image optimizer (fetch +
 * re-encode on a cold cache), which added seconds to "resource load
 * duration" on mobile. Both CDNs below resize/encode at the edge and set a
 * one-year cache lifetime, so this removes a network hop from the critical
 * path and fixes the "efficient cache lifetimes" insight.
 *
 * Why it is passed as a `loader` prop on the component rather than set as
 * `images.loaderFile` in next.config: Turbopack's dev server (Next 16) does
 * not wire `loaderFile` into next/image, which makes every remote image
 * throw "missing loader prop" in `next dev`. A per-component loader works
 * under both bundlers.
 *
 * - Sanity: `?w=&q=&auto=format` (auto=format negotiates webp per browser).
 * - ImageKit: `?tr=w-,q-,f-auto`.
 * - Anything else (local files in `public/`, unknown hosts) is returned
 *   untouched so the default optimizer keeps handling it.
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
