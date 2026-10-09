import { getAllSanityPosts, getSiteSettings, getAwards } from '@/lib/sanity';
import projectsData from '@/data/projects.json';
import careerData from '@/data/career.json';
import educationData from '@/data/education.json';
import socialsData from '@/data/socials.json';
import { TECH_STACK } from '@/lib/tech-stack';

export const revalidate = 3600;

let cachedFullContent: string | null = null;
let lastFullCacheTime = 0;
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

	if (cachedFullContent && Date.now() - lastFullCacheTime < CACHE_TTL_MS) {
		return new Response(cachedFullContent, {
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
	let awardsList: any[] = [];

	try {
		const [posts, settings, awards] = await Promise.all([
			fetchWithTimeout(getAllSanityPosts().catch(() => []), [], 600),
			fetchWithTimeout(getSiteSettings().catch(() => null), null, 600),
			fetchWithTimeout(getAwards().catch(() => []), [], 600),
		]);
		if (posts && posts.length > 0) {
			blogPosts = posts.map((p) => ({
				title: p.title,
				slug: p.slug,
				excerpt: p.excerpt || undefined,
			}));
		}
		if (settings?.resumeUrl) {
			resumeUrl = settings.resumeUrl;
		}
		if (awards && awards.length > 0) {
			awardsList = awards;
		}
	} catch {
		// Graceful fallback
	}

	// Format Career
	const careerSection = careerData.career
		.map((item) => {
			const timeRange = item.end ? `${item.start} – ${item.end}` : `${item.start} – Present`;
			const bullets = item.description.map((d) => `  - ${d}`).join('\n');
			return `### ${item.title} | ${item.name} (${timeRange})\n${bullets}`;
		})
		.join('\n\n');

	// Format Education
	const educationSection = educationData.education
		.map((item) => {
			const timeRange = item.end ? `${item.start} – ${item.end}` : `${item.start} – Present`;
			const bullets = item.description.map((d) => `  - ${d}`).join('\n');
			return `### ${item.title} | ${item.name} (${timeRange})\n${bullets}`;
		})
		.join('\n\n');

	// Format All Projects
	const projectsSection = projectsData.projects
		.map((proj) => {
			const cleanDesc = proj.description
				.replace(/\*\*/g, '')
				.replace(/🏆\s*/g, '')
				.trim();
			const tags = proj.tags.join(', ');
			const links = proj.links.map((l) => `[${l.name}](${l.href})`).join(' | ');
			return `### ${proj.name}\n- Description: ${cleanDesc}\n- Tech Stack: ${tags}\n- Links: ${links}`;
		})
		.join('\n\n');

	// Format Tech Stack grouped by category
	const categoriesMap = new Map<string, string[]>();
	TECH_STACK.forEach((tech) => {
		tech.categories.forEach((cat) => {
			if (!categoriesMap.has(cat)) {
				categoriesMap.set(cat, []);
			}
			categoriesMap.get(cat)!.push(tech.title);
		});
	});

	const techStackSection = Array.from(categoriesMap.entries())
		.map(([category, items]) => `- **${category}**: ${items.join(', ')}`)
		.join('\n');

	// Format Awards
	const awardsSection =
		awardsList.length > 0
			? awardsList
					.map((award) => {
						const dateStr = award.date ? ` (${award.date})` : '';
						const prizeStr = award.prize ? ` - ${award.prize}` : '';
						const gradeStr = award.grade ? ` [${award.grade}]` : '';
						return `- **${award.title}**${prizeStr}${gradeStr}${dateStr}`;
					})
					.join('\n')
			: `- **1st Place Winner — VIBE-ATHON 2026**: Built Read X, an AI-powered OCR platform for 20+ Indian languages using Google Gemini\n- **Odoo Hackathon 2026**: Engineered full-stack HR Management System in 8 hours`;

	// Format Blog
	const blogSection =
		blogPosts.length > 0
			? blogPosts
					.map(
						(p) =>
							`- [${p.title}](${siteUrl}/blog/${p.slug})${
								p.excerpt ? `: ${p.excerpt}` : ''
							}`,
					)
					.join('\n')
			: 'No published blog posts at this time.';

	// Format Socials
	const socialsSection = socialsData.socials
		.map((s) => `- [${s.name}](${s.href})`)
		.join('\n');

	const content = `# Roni Sarkar — Full Portfolio Documentation for LLMs

> Comprehensive contextual reference for language models and AI agents about Roni Sarkar's background, projects, work experience, education, skills, and contact methods.

## Overview & Bio
Roni Sarkar is a full-stack developer and software engineer based in India with a strong focus on building responsive, high-performance web applications, developer tools, and AI-enabled platforms. He specializes in the React and Next.js ecosystem, modern TypeScript, Tailwind CSS, Supabase, and Node.js.

- Primary Email: ronisarkar10938@gmail.com
- Portfolio URL: ${siteUrl}
- Location: India (Open to remote roles and freelance collaborations worldwide)
- Resume: ${resumeUrl}

---

## Experience & Career
${careerSection}

---

## Education
${educationSection}

---

## Projects
${projectsSection}

---

## Technical Skills & Stack
${techStackSection}

---

## Achievements & Certifications
${awardsSection}

---

## Blog Posts & Technical Articles
${blogSection}

---

## Social Profiles & Contact Channels
${socialsSection}
`;

	cachedFullContent = content;
	lastFullCacheTime = Date.now();

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control':
				'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
			Link: `<${siteUrl}/llms.txt>; rel="describedby"`,
		},
	});
}
