'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import type { SpotifyData } from '@/lib/spotify';

function SpotifyIcon({
	className,
	'aria-hidden': ariaHidden,
}: {
	className?: string;
	'aria-hidden'?: boolean | 'true' | 'false';
}) {
	return (
		<svg
			viewBox="0 0 24 24"
			width="1em"
			height="1em"
			fill="currentColor"
			className={className}
			aria-hidden={ariaHidden}
			focusable="false">
			<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
		</svg>
	);
}

interface Props {
	initialData: SpotifyData;
}

/**
 * Client component that handles real-time Spotify data polling.
 * Receives initial server-rendered data and updates every 15 seconds.
 */
export default function NowPlayingClient({ initialData }: Props) {
	const [data, setData] = useState<SpotifyData>(initialData);

	const fetchData = useCallback(async () => {
		try {
			const res = await fetch('/api/spotify', {
				cache: 'no-store',
				headers: {
					'Cache-Control': 'no-cache',
				},
			});
			if (res.ok) {
				const json = await res.json();
				setData(json);
			}
		} catch (error) {
			console.error('Error fetching Spotify data:', error);
		}
	}, []);

	useEffect(() => {
		// Poll every 15 seconds for updates
		const interval = setInterval(fetchData, 15000);
		return () => clearInterval(interval);
	}, [fetchData]);

	const containerBase =
		'w-full rounded-lg border transition-colors duration-150';

	return (
		<div
			className="w-full"
			aria-live="polite">
			<div className={`${containerBase} border-gray-200 dark:border-zinc-700`}>
				<div className="flex items-center gap-3 p-3">
					{/* Album artwork or Spotify icon */}
					{data.albumImageUrl ?
						<div className="relative w-14 h-14 flex-shrink-0 rounded-md overflow-hidden [box-shadow:var(--shadow-border)]">
							<Image
								src={data.albumImageUrl}
								alt={data.album ?? 'Album artwork'}
								fill
								sizes="56px"
								className="object-cover outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
								unoptimized
								priority={false}
							/>
						</div>
					:	<div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden grid place-items-center">
							<SpotifyIcon
								className="text-2xl text-[#1DB954]"
								aria-hidden
							/>
						</div>
					}

					{/* Song info */}
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2 mb-1">
							<SpotifyIcon className="text-base text-[#1DB954] flex-shrink-0" />
							<span className="text-xs text-zinc-600 dark:text-zinc-400">
								{data.isPlaying ?
									<span className="flex items-center gap-2">
										<span>Now Playing</span>
										<span className="relative flex h-2 w-2">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-60" />
											<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]" />
										</span>
									</span>
								:	'Last played'}
							</span>
						</div>

						{/* Title (link if available) */}
						{data.songUrl ?
							<a
								href={data.songUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block font-medium text-sm text-zinc-900 dark:text-white truncate hover:underline">
								{data.title || 'Unknown Track'}
							</a>
						:	<h3 className="font-medium text-sm text-zinc-900 dark:text-white truncate">
								{data.title || 'Unknown Track'}
							</h3>
						}

						<p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">
							by {data.artist || 'Unknown Artist'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
