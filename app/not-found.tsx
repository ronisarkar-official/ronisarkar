import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
			<h1 className="text-7xl font-extrabold tracking-tight font-mono mb-2">404</h1>
			<h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
			<p className="text-muted-foreground max-w-md mb-8">
				Sorry, the page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
			</p>
			<Link href="/">
				<Button variant="default">
					<ArrowLeft className="mr-2 size-4" />
					Back to Home
				</Button>
			</Link>
		</main>
	);
}
