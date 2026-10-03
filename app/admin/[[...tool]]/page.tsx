'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';
import { useEffect } from 'react';

export default function AdminPage() {
	// Suppress React 19 warning about disableTransition prop
	// This is a known issue with Sanity Studio and will be fixed in future versions
	// https://github.com/sanity-io/next-sanity/issues/822
	useEffect(() => {
		const originalError = console.error;
		console.error = (...args) => {
			if (
				args.some(
					(arg) =>
						typeof arg === 'string' &&
						arg.includes('disableTransition')
				)
			) {
				return;
			}
			originalError.apply(console, args);
		};

		return () => {
			console.error = originalError;
		};
	}, []);

	return (
		<div className="sanity-studio-wrapper w-full h-full flex-1 min-h-0 flex flex-col">
			<NextStudio config={config} />
		</div>
	);
}
