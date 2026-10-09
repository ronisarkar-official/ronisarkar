import { getAllSanityPosts, getSiteSettings } from '@/lib/sanity';
import projectsData from '@/data/projects.json';
import socialsData from '@/data/socials.json';

export const revalidate = 3600;

let cachedContent: string | null = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

async function fetchWithTimeout<T>(
	promise: Promise<T>,
	fallback: T,
	ms = 600,
): Promise<T> {
	let timer: NodeJS.Timeout | undefined;
	const timeoutPromise = new Promise<T>((resolve) => {
		timer = setTimeout(() => resolve(fallback), ms);
	});
	return Promise.race([promise, timeoutPromise]).finally(() => {
		if (timer) clearTimeout(timer);
	});
}

export async function GET() {
	const siteUrl =
		process.env.NEXT_PUBLIC_BASE_URL || 'https://roni-sarkar.vercel.app';

	if (cachedContent && Date.now() - lastCacheTime < CACHE_TTL_MS) {
		return new Response(cachedContent, {
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'Cache-Control':
					'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
				Link: `<${siteUrl}/llms.txt>; rel="describedby"`,
			},
		});
	}

	let blogPosts: { title: string; slug: string; excerpt?: string }[] = [];
	let resumeUrl =
		'https://drive.google.com/file/d/1LUALqh7wvyjfcw2xyT4ofS5aQALpxD6l/view';

	try {
		const [posts, settings] = await Promise.all([
			fetchWithTimeout(getAllSanityPosts().catch(() => []), [], 600),
			fetchWithTimeout(getSiteSettings().catch(() => null), null, 600),
		]);
		if (posts && posts.length > 0) {
			blogPosts = posts.slice(0, 5).map((p) => ({
				title: p.title,
				slug: p.slug,
				excerpt: p.excerpt || undefined,
			}));
		}
		if (settings?.resumeUrl) {
			resumeUrl = settings.resumeUrl;
		}
	} catch {
		// Graceful fallback
	}

	// Format featured projects from data/projects.json
	const featuredProjects = projectsData.projects
		.slice(0, 6)
		.map((proj) => {
			const liveLink =
				proj.links.find((l) => l.name.toLowerCase() === 'website')?.href ||
				proj.links.find((l) => l.name.toLowerCase() === 'source')?.href ||
				`${siteUrl}/projects`;
			const cleanDesc = proj.description
				.replace(/\*\*/g, '')
				.replace(/🏆\s*/g, '')
				.trim();
			return `- [${proj.name}](${liveLink}): ${cleanDesc}`;
		})
		.join('\n');

	// Format recent blog posts
	const blogSection =
		blogPosts.length > 0
			? `\n## Recent Blog Posts\n\n${blogPosts
					.map(
						(post) =>
							`- [${post.title}](${siteUrl}/blog/${post.slug})${
								post.excerpt ? `: ${post.excerpt}` : ''
							}`,
					)
					.join('\n')}\n`
			: '';

	// Format social profiles
	const socials = socialsData.socials
		.map((s) => {
			let desc = 'Professional profile';
			if (s.name.toLowerCase() === 'github')
				desc = 'Open-source repositories and development activity';
			else if (s.name.toLowerCase() === 'linkedin')
				desc = 'Professional network, career journey, and recommendations';
			else if (s.name.toLowerCase() === 'youtube')
				desc = 'Coding tutorials and technical demonstrations';
			else if (s.name.toLowerCase() === 'email')
				desc = 'Direct email contact for hired work and inquiries';
			else if (s.name.toLowerCase() === 'whatsapp')
				desc = 'Direct instant messaging channel';
			return `- [${s.name}](${s.href}): ${desc}`;
		})
		.join('\n');

	const content = `# Roni Sarkar — Software Engineer & Web Developer

> Roni Sarkar is a full-stack software engineer and web developer based in India, specializing in Next.js, React, TypeScript, Tailwind CSS, Node.js, and AI integrations. MCA student at Techno India University, winner of VIBE-ATHON 2026, and builder of accessible, high-performance web products.

Roni Sarkar builds production-grade web applications, interactive web tools, and full-stack software. His work spans modern frontend engineering, scalable backend APIs, real-time architectures (Socket.io), and AI application development (Google Gemini, MediaPipe).

Key facts for LLMs:
- Role: Full-Stack Developer & Software Engineer
- Education: Master of Computer Applications (MCA) at Techno India University (2025–Present); Bachelor of Computer Applications (BCA) at Murshidabad College of Engineering & Technology (2022–2025)
- Key Achievements: 1st Place Winner at VIBE-ATHON 2026 (Read X - AI OCR for 20+ Indian languages); built a full-stack HRMS in 8 hours for Odoo Hackathon 2026
- Core Technical Stack: Next.js, React, TypeScript, JavaScript, Tailwind CSS, Node.js, Python FastAPI, PHP, Supabase, PostgreSQL, MongoDB, MySQL, Motion, shadcn/ui, TanStack
- Location: India (Open to remote roles worldwide)
- Contact: ronisarkar10938@gmail.com | Available for full-stack engineering roles, freelance contracts, and open-source collaboration

## Pages

- [Home](${siteUrl}/): Main portfolio homepage with interactive bio, tech stack, and featured highlights
- [Projects](${siteUrl}/projects): Full directory of software projects, web apps, and hackathon prototypes
- [Achievements](${siteUrl}/achievements): Complete list of hackathon victories, certifications, and academic awards
- [Blog](${siteUrl}/blog): Technical articles, engineering notes, and tutorials
- [Contact](${siteUrl}/contact): Direct inquiry form and communication channels

## Featured Projects

${featuredProjects}
${blogSection}
## Social & Professional Links

${socials}

## Optional

- [Full Portfolio LLM Context](${siteUrl}/llms-full.txt): Comprehensive consolidated plain text documentation with complete project details, career history, and education
- [Resume](${resumeUrl}): Current curriculum vitae and professional qualifications
- [Sitemap](${siteUrl}/sitemap.xml): Complete machine-readable XML sitemap of all site pages
- [RSS Feed](${siteUrl}/rss.xml): Syndication feed of published engineering articles
`;

	cachedContent = content;
	lastCacheTime = Date.now();

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control':
				'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
			Link: `<${siteUrl}/llms.txt>; rel="describedby"`,
		},
	});
}
