import React from 'react';
import Image from 'next/image';
import type { Award } from '@/lib/sanity';
import dayjs from 'dayjs';

interface Props {
	award: Award;
}

export function AchievementCard({ award }: Props) {
	// Only use directly uploaded images from Sanity CMS
	const certificateImage = award.imageUrl || null;
	const linkTarget = certificateImage;

	const content = (
		<>
			{certificateImage ? (
				<div className="relative w-full aspect-[1.42/1] border rounded-lg overflow-hidden mb-3 bg-neutral-100 dark:bg-neutral-900/50 shrink-0">
					<Image
						src={certificateImage}
						alt={award.image?.alt || award.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain p-0.5 outline -outline-offset-1 outline-black/10 dark:outline-white/10 group-hover:scale-[1.02] transition-transform duration-300"
						loading="lazy"
					/>
				</div>
			) : (
				<div className="w-full aspect-[1.42/1] rounded-lg mb-3 bg-black/5 dark:bg-white/5 flex items-center justify-center text-sm shrink-0 text-muted-foreground">
					No image
				</div>
			)}

			<h2 className="text-xl font-bold mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
				{award.title}
			</h2>

			<div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground mt-auto pt-2">
				{award.date && (
					<time dateTime={award.date}>
						{dayjs(award.date).format('MMM YYYY')}
					</time>
				)}
			</div>
		</>
	);

	const cardClasses =
		'group flex flex-col h-full rounded-lg border p-4 transition-all duration-200 hover:[box-shadow:var(--shadow-border-hover)] bg-card';

	if (linkTarget) {
		return (
			<a
				href={linkTarget}
				target="_blank"
				rel="noopener noreferrer"
				className={`${cardClasses} cursor-pointer`}
				aria-label={`View certificate: ${award.title}`}>
				{content}
			</a>
		);
	}

	return <div className={cardClasses}>{content}</div>;
}
