import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: false,
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ik.imagekit.io',
			},
			{
				protocol: 'https',
				hostname: 'drive.google.com',
			},
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
			{
				protocol: 'https',
				hostname: '**.googleusercontent.com',
			},
		],
		formats: ['image/avif', 'image/webp'],
	},
	// Enable React compiler for better performance
	// The experimental 'reactCompiler' option is not recognized by this Next.js version,
	// so it was removed to satisfy the config's type definitions.
	// Optimize production builds
	compress: true,
	poweredByHeader: false,
	experimental: {
		optimizePackageImports: [
			'lucide-react',
			'motion/react',
			'framer-motion',
			'@radix-ui/react-tooltip',
			'@radix-ui/react-dialog',
			'@radix-ui/react-hover-card',
			'@radix-ui/react-separator',
		],
	},
	async redirects() {
		return [
			{
				source: '/studio',
				destination: '/admin',
				permanent: true,
			},
			{
				source: '/studio/:path*',
				destination: '/admin/:path*',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
