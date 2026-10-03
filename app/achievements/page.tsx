import { AchievementCard } from '@/components/AchievementCard';
import { getAwards } from '@/lib/sanity';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Achievements',
	description: 'Explore my awards, hackathon wins, and professional certifications.',
};

// Revalidate every 6 hours
export const revalidate = 21600;

export default async function AchievementsPage() {
	const awards = await getAwards();

	const sortedAwards = [...awards].sort((a, b) => {
		if (a.pinned && !b.pinned) return -1;
		if (!a.pinned && b.pinned) return 1;
		if (a.pinned && b.pinned) return (a.order ?? 999) - (b.order ?? 999);
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return (
		<article className="mt-8 flex flex-col gap-8 pb-16">
			<div className="flex flex-col gap-4">
				<h1 className="title text-4xl font-bold">Achievements</h1>
				<p className="text-muted-foreground">
					Awards, hackathon wins, and professional certifications.
				</p>
			</div>

			{sortedAwards && sortedAwards.length > 0 ? (
				<section className="grid gap-6 md:grid-cols-2">
					{sortedAwards.map((award) => (
						<AchievementCard
							key={award._id}
							award={award}
						/>
					))}
				</section>
			) : (
				<div className="rounded-lg border border-border bg-card p-12 text-center">
					<p className="text-lg text-muted-foreground">
						No certifications or achievements available at the moment.
					</p>
				</div>
			)}
		</article>
	);
}
