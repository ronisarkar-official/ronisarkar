import React from 'react';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import ClientShell from '@/components/ClientShell';
import LayoutContainer from '@/components/LayoutContainer';

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
});

// Make sure this is the canonical domain you control. Change if needed.
const BASE_URL =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://roni-sarkar.vercel.app';

export const metadata: Metadata = {
	title: {
		default: 'Roni Sarkar — Software Engineer & Web Developer',
		template: '%s | Roni Sarkar',
	},
	description:
		'Roni Sarkar — Software engineer and web developer building modern web apps with Next.js, React and Node.js. Portfolio, case studies and contact.',
	keywords: [
		'Roni Sarkar',
		'roni sarkar',
		'software engineer',
		'web developer',
		'portfolio',
	],
	metadataBase: new URL(BASE_URL),
	authors: [{ name: 'Roni Sarkar', url: BASE_URL }],
	creator: 'Roni Sarkar',
	publisher: 'Roni Sarkar',
	applicationName: 'Roni Sarkar Portfolio',
	category: 'technology',
	openGraph: {
		title: 'Roni Sarkar — Software Engineer & Web Developer',
		description:
			'Portfolio of Roni Sarkar — projects, skills, and contact for hired work. Built with Next.js and modern web best practices.',
		url: BASE_URL,
		siteName: 'Roni Sarkar Portfolio',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: 'https://ik.imagekit.io/2zeqzsn1n/portfolio-image1.webp',
				width: 1200,
				height: 630,
				alt: 'Roni Sarkar — Software Engineer & Web Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Roni Sarkar — Software Engineer & Web Developer',
		description:
			'Portfolio of Roni Sarkar — projects, skills, and contact for hired work.',
		creator: '@ronisarkarDev',
		site: '@ronisarkarDev',
		images: ['https://ik.imagekit.io/2zeqzsn1n/portfolio-image1.webp'],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: BASE_URL,
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	// Add verification for Google Search Console (replace with your actual verification code)
	verification: {
		// google: 'your-google-verification-code',
		// yandex: 'your-yandex-verification-code',
		// bing: 'your-bing-verification-code',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	// Enhanced JSON-LD schema array: Person + WebSite + BreadcrumbList + Organization
	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Roni Sarkar',
			url: BASE_URL,
			image: 'https://ik.imagekit.io/2zeqzsn1n/portfolio-image1.webp',
			sameAs: [
				'https://github.com/ronisarkar-official',
				'https://www.linkedin.com/in/ronisarkar',
				'https://twitter.com/ronisarkarDev',
			],
			jobTitle: 'Software Engineer & Web Developer',
			worksFor: {
				'@type': 'Organization',
				name: 'spechype',
				url: BASE_URL,
			},
			knowsAbout: [
				'Next.js',
				'React',
				'Node.js',
				'TypeScript',
				'JavaScript',
				'Web Development',
				'Software Engineering',
				'Full-Stack Development',
			],
			description:
				'Portfolio of Roni Sarkar, a software engineer specializing in modern web applications with Next.js, React, and Node.js.',
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			url: BASE_URL,
			name: 'Roni Sarkar Portfolio',
			description:
				'Portfolio and projects by Roni Sarkar — software engineer and web developer.',
			author: {
				'@type': 'Person',
				name: 'Roni Sarkar',
			},
			inLanguage: 'en-US',
			potentialAction: {
				'@type': 'SearchAction',
				target: `${BASE_URL}/search?q={query}`,
				'query-input': 'required name=query',
			},
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Home',
					item: BASE_URL,
				},
			],
		},
		{
			'@context': 'https://schema.org',
			'@type': 'ProfilePage',
			dateCreated: new Date().toISOString().split('T')[0],
			dateModified: new Date().toISOString().split('T')[0],
			mainEntity: {
				'@type': 'Person',
				name: 'Roni Sarkar',
				url: BASE_URL,
			},
		},
	];

	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Roni Sarkar - Software engineer and web developer building modern web apps with Next.js, React and Node.js. Portfolio, case studies and contact."
				/>
				<meta
					name="google-site-verification"
					content="h-sOGh3RDTQVIFlEQzlnvqZ7OOPT0bxEQxFnY9W_L5s"
				/>

				{/* Disable automatic detection and formatting of phone numbers */}
				<meta
					name="format-detection"
					content="telephone=no"
				/>

				{/* Geo tags - update with your actual location */}
				<meta
					name="geo.region"
					content="IN"
				/>
				<meta
					name="geo.placename"
					content="India"
				/>

				{/* Referrer policy */}
				<meta
					name="referrer"
					content="origin-when-cross-origin"
				/>

				{/* LLM discoverability following https://llmstxt.org/ specification */}
				<link
					rel="describedby"
					href="/llms.txt"
				/>
				<link
					rel="alternate"
					type="text/plain"
					href="/llms.txt"
					title="LLM Overview"
				/>
				<link
					rel="alternate"
					type="text/plain"
					href="/llms-full.txt"
					title="Full LLM Context"
				/>

				{/* Preconnect to external image CDN */}
				<link
					rel="preconnect"
					href="https://ik.imagekit.io"
					crossOrigin="anonymous"
				/>
				<link
					rel="dns-prefetch"
					href="https://ik.imagekit.io"
				/>
			</head>
			<body
				className={`${jetbrainsMono.variable} antialiased overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<ClientShell />
					<LayoutContainer
						header={<Header />}
						footer={<Footer />}>
						{children}
					</LayoutContainer>
				</ThemeProvider>

				{/* JSON-LD for rich results */}
				<script
					type="application/ld+json"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				{/* Vercel analytics */}
				<Analytics />
			</body>
		</html>
	);
}
