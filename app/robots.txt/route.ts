const siteUrl =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://roni-sarkar.vercel.app';

const robotsTxt = `# Allow search indexing, block AI training crawlers from bulk scraping while allowing llms.txt
User-agent: GPTBot
Allow: /llms.txt
Allow: /llms-full.txt
Disallow: /

User-agent: ClaudeBot
Allow: /llms.txt
Allow: /llms-full.txt
Disallow: /

User-agent: Google-Extended
Allow: /llms.txt
Allow: /llms-full.txt
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

# Allow AI search/answering crawlers (NOT training crawlers)
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Allow all other crawlers (including Googlebot for search)
User-agent: *
Allow: /
Disallow: /admin
Disallow: /studio
Disallow: /api

# Host
Host: ${siteUrl}

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml
`;

export async function GET() {
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
		},
	});
}
