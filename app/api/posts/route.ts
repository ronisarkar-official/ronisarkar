import { NextResponse } from 'next/server';
import { getAllSanityPosts } from '@/lib/sanity';

export const revalidate = 60;

export async function GET() {
	try {
		const posts = await getAllSanityPosts();
		const simplifiedPosts = posts.map((post) => ({
			id: post._id,
			title: post.title,
			slug: post.slug,
			publishedAt: post.publishedAt,
			category: post.categories?.[0]?.title || null,
		}));

		return NextResponse.json(simplifiedPosts);
	} catch (error) {
		console.error('Error fetching blog posts for command menu:', error);
		return NextResponse.json([]);
	}
}
