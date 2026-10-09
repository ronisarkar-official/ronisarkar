import { Suspense } from 'react';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogGridSkeleton from '@/components/blog/BlogGridSkeleton';
import { getAllSanityPosts, getAllCategories } from '@/lib/sanity';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
	description:
		'Articles, tutorials, and insights by Roni Sarkar on web development, React, Next.js, and modern software engineering.',
};

export const revalidate = 60;

export default function BlogPage() {
	return (
		<article className="mt-8 flex flex-col gap-8 pb-16">
			<div className="flex flex-col gap-4">
				<h1 className="title text-4xl font-bold">My Blogs</h1>
				<p className="text-muted-foreground">
					Thoughts, tutorials, and insights about web development and
					technology.
				</p>
			</div>

			{/* Stream the slow Sanity data in after the shell renders,
			    so page swaps stay instant and transitions stay seamless */}
			<Suspense fallback={<BlogGridSkeleton />}>
				<BlogContent />
			</Suspense>
		</article>
	);
}

async function BlogContent() {
	// Fetch data server-side in parallel for optimal performance
	const [posts, categories] = await Promise.all([
		getAllSanityPosts(),
		getAllCategories(),
	]);

	return (
		<BlogSearch
			initialPosts={posts}
			categories={categories}
		/>
	);
}